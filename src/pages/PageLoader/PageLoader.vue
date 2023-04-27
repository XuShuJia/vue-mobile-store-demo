<script lang="ts" setup>
import { useRouter } from "vue-router";
import TabBar from "@/components/TabBar";
import { reactive } from "vue";
import type { TPageName, IPageLoaderState } from "./types";
import usePageMap from "./hooks/usePageMap";
import { showLoadingToast } from "vant";

const { PageMap } = usePageMap();
const router = useRouter();
const state = reactive<IPageLoaderState>({
  pages: [],
  show: "home"
});
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
</script>

<template>
  <div
    v-for="page in state.pages"
    :key="page.id"
    v-show="state.show === page.id"
  >
    <component :is="PageMap[page.name].component" />
  </div>
  <TabBar />
</template>
