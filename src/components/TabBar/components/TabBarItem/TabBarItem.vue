<script lang="ts" setup>
import styles from "./style.module.less";
import { TabBarItemProps } from "./types";

const props = defineProps(TabBarItemProps);
const emit = defineEmits<{
  (e: "click", id: string): void;
}>();
const handleClick = () => {
  emit("click", props.id);
};
</script>

<template>
  <div
    :data-active="props.active"
    :class="styles['tabbar-item']"
    @click.stop.prevent="handleClick"
  >
    <div :class="styles['item-icon']">
      <slot v-if="!props.active" name="default-icon"></slot>
      <slot v-if="props.active" name="active-icon"></slot>
    </div>
    <div :class="styles['item-title']">
      {{ props.title }}
    </div>
  </div>
</template>
