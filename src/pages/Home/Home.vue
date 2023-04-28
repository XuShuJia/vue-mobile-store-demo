<script lang="ts" setup>
import styles from "./style.module.less";
import { Swipe, SwipeItem } from "vant";
import PageContainer, { Section } from "@/components/PageContainer";
import SearchBar from "@/components/SearchBar";
import HorizontalCardList, {
  HCardRow,
  HCardItem
} from "@/components/HorizontalCardList";
import CardList, {
  VCardColumn,
  VCardItem
} from "@/components/CardList";
</script>

<template>
  <PageContainer title="首页" :class="styles.container">
    <template #header>
      <SearchBar placeholder="搜索" />
    </template>
    <!-- Swipe -->
    <Section>
      <Swipe :class="styles.swipe">
        <SwipeItem :class="styles['swipe-item']"></SwipeItem>
        <SwipeItem :class="styles['swipe-item']"></SwipeItem>
        <SwipeItem :class="styles['swipe-item']"></SwipeItem>
        <SwipeItem :class="styles['swipe-item']"></SwipeItem>
      </Swipe>
    </Section>
    <!-- HorizontalCardList -->
    <Section>
      <HorizontalCardList>
        <HCardRow>
          <HCardItem size="small"></HCardItem>
          <HCardItem size="wide"></HCardItem>
          <HCardItem size="default"></HCardItem>
          <HCardItem size="default"></HCardItem>
        </HCardRow>
        <HCardRow>
          <HCardItem size="default"></HCardItem>
          <HCardItem size="small"></HCardItem>
          <HCardItem size="wide"></HCardItem>
          <HCardItem size="default"></HCardItem>
        </HCardRow>
      </HorizontalCardList>
    </Section>
    <!-- CardList -->
    <Section>
      <CardList>
        <VCardColumn>
          <VCardItem></VCardItem>
          <VCardItem></VCardItem>
          <VCardItem></VCardItem>
          <VCardItem></VCardItem>
          <VCardItem></VCardItem>
        </VCardColumn>
        <VCardColumn>
          <VCardItem></VCardItem>
          <VCardItem></VCardItem>
          <VCardItem></VCardItem>
          <VCardItem></VCardItem>
          <VCardItem></VCardItem>
        </VCardColumn>
      </CardList>
    </Section>
  </PageContainer>
</template>
