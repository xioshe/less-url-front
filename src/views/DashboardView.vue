<template>
  <div class="dashboard">
    <n-card>
      <template #header>
        <n-h1 class="gradient-text">控制台</n-h1>
      </template>
      <n-flex vertical size="large">
        <OverviewStats />
        <LinkList />
      </n-flex>
    </n-card>
  </div>
</template>

<script setup lang="ts">
import { NH1, NCard, NFlex } from 'naive-ui'
import OverviewStats from '@/components/OverviewStats.vue'
import LinkList from '@/components/LinkList.vue'
</script>

<style scoped>
.dashboard {
  animation: fadeIn 0.5s ease-out;
}

.n-card {
  flex-grow: 1;
}

.gradient-text {
  font-size: 2.5rem;
  font-weight: bold;
}
</style>
