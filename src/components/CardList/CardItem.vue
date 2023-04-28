<script setup lang="ts">
import styles from "./style.module.less";
</script>

<template>
  <div :class="styles['card-item']">
    <slot></slot>
  </div>
</template>
