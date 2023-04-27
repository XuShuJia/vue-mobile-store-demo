<script lang="ts" setup>
import styles from "./style.module.less";
import { Icon } from "vant";
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import type { ITabBarState, ITabBarExpose } from "./types";
import { TabBarItems } from "./config";
import TabBarItem from "./components/TabBarItem";

const router = useRouter();
const state = reactive<ITabBarState>({
  list: TabBarItems,
  active: ""
});
const tabBarRef = ref<HTMLDivElement | null>(null);
const handleClickTabBarItem = (id: string) => {
  const tab = state.list.find((item) => item.id === id);
  if (tab) {
    router.push(tab.path);
    state.active = id;
  }
};
router.isReady().then(() => {
  state.active = router.currentRoute.value.path.split("/")[1];
});
router.afterEach((to) => {
  state.active = to.path.split("/")[1];
});

defineExpose<ITabBarExpose>({
  getTabBarHeight() {
    if (tabBarRef.value instanceof HTMLDivElement) {
      const rect = tabBarRef.value.getBoundingClientRect();
      return rect.height;
    }
    return 0;
  },
  switchTab(id: string) {
    handleClickTabBarItem(id);
  }
});
</script>

<template>
  <div ref="tabBarRef" :class="styles.tabbar">
    <TabBarItem
      v-for="item in state.list"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :active="state.active === item.id"
      @click="handleClickTabBarItem"
    >
      <template #active-icon>
        <Icon :name="item.activeIcon" />
      </template>
      <template #default-icon>
        <Icon :name="item.icon" />
      </template>
    </TabBarItem>
  </div>
</template>
