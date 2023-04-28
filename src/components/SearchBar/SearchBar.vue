<script lang="ts" setup>
import styles from "./style.module.less";
import { Icon } from "vant";
import { SearchBarProps } from "./types";

const props = defineProps(SearchBarProps);
defineEmits<{
  (e: "click"): void;
}>();
</script>

<template>
  <div :class="styles['search-bar']" @click="() => $emit('click')">
    <div :class="styles['search-bar-icon']">
      <Icon name="search" />
    </div>
    <div :class="styles['search-bar-placeholder']">
      {{ props.placeholder }}
    </div>
  </div>
</template>
