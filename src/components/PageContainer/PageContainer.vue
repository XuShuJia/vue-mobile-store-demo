<script lang="ts" setup>
import styles from "./style.module.less";
import { inject, computed, type Ref, type CSSProperties } from "vue";
import type { ITabBarExpose } from "../TabBar/types";
import { PageContainerProps } from "./types";

const props = defineProps(PageContainerProps);
const tabBarRef = inject<Ref<ITabBarExpose | null>>("tabBarRef");
const containerStyles = computed<CSSProperties>(() => {
  return {
    paddingBottom: `${
      (tabBarRef?.value?.getTabBarHeight() || 0) + 15
    }px`
  };
});
</script>

<template>
  <div :style="containerStyles" :class="styles['page-container']">
    <div :class="styles['background-box']">
      <!-- <img src=""/> -->
    </div>
    <div
      v-if="props.headerless !== true"
      :class="styles['content-box']"
    >
      <div :class="styles['content-header']">
        <div v-if="props.title" :class="styles['header-title']">
          {{ props.title }}
        </div>
        <slot name="header"></slot>
      </div>
      <slot name="default"></slot>
    </div>
  </div>
</template>
