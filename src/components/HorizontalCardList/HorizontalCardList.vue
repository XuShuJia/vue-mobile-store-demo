<script lang="ts" setup>
import styles from "./style.module.less";
</script>

<template>
  <div :class="styles['horizontal-card-list']">
    <slot></slot>
  </div>
</template>
