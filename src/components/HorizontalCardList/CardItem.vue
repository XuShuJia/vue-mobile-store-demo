<script lang="ts" setup>
import styles from "./style.module.less";
import { CardItemProps } from "./types";

const props = defineProps(CardItemProps);
</script>

<template>
  <div :data-size="props.size" :class="styles['card-item']">
    <slot></slot>
  </div>
</template>
