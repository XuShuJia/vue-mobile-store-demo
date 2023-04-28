<script lang="ts" setup>
import styles from "./style.module.less";
</script>

<template>
  <div :class="styles['card-row']">
    <slot></slot>
  </div>
</template>
