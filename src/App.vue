<script lang="ts" setup>
import { ref, provide, type Ref } from "vue";
import TabBar from "@/components/TabBar";
import type { ITabBarExpose } from "@/components/TabBar/types";

const tabBarRef = ref<ITabBarExpose | null>(null);
provide<Ref<ITabBarExpose | null>>("tabBarRef", tabBarRef);
</script>

<template>
  <RouterView />
  <TabBar ref="tabBarRef" />
</template>
