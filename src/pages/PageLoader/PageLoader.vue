<script lang="ts" setup>
import { useRouter } from "vue-router";
import { ref, reactive } from "vue";
import TabBar from "@/components/TabBar";
import type { TPageName, IPageLoaderState } from "./types";
import usePageMap from "./hooks/usePageMap";
import { showLoadingToast } from "vant";
import type { ITabBarExpose } from "@/components/TabBar/types";
import { provide } from "vue";
import type { Ref } from "vue";

const router = useRouter();
const state = reactive<IPageLoaderState>({
  pages: [],
  show: "home"
});
const tabBarRef = ref<ITabBarExpose | null>(null);
const { PageMap } = usePageMap();
const handleSwitchPage = async (pageName: TPageName) => {
  if (PageMap[pageName].component === null) {
    if (!state.pages.find((item) => item.name === pageName)) {
      state.pages.push({
        id: pageName,
        name: pageName,
        loaded: false
      });
    }
    let loading: ReturnType<typeof showLoadingToast> | null = null;
    let timeout = setTimeout(() => {
      loading = showLoadingToast({
        message: "Loading"
      });
    }, 100);
    await PageMap[pageName].load();
    clearTimeout(timeout);
    if (loading) {
      (loading as ReturnType<typeof showLoadingToast>).close();
    }
    state.pages.forEach((item, index) => {
      if (item.name === pageName) {
        state.pages[index].loaded = true;
      }
    });
  }
  state.show = pageName;
};

router.beforeEach((to) => {
  const pageName = to.path.split("/")[1] as TPageName;
  handleSwitchPage(pageName);
});
router.isReady().then(() => {
  const pageName = router.currentRoute.value.path.split(
    "/"
  )[1] as TPageName;
  handleSwitchPage(pageName);
});

provide<Ref<ITabBarExpose | null>>("tabBarRef", tabBarRef);
</script>

<template>
  <component
    v-for="page in state.pages"
    :key="page.id"
    v-show="state.show === page.id"
    :is="PageMap[page.name].component"
  />
  <TabBar ref="tabBarRef" />
</template>
