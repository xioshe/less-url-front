<template>
  <div>
    <n-flex vertical align="stretch">
      <div flex="1" :style="{ height: isMobile ? '330px' : '400px' }">
        <ProgressList :data="limitedData" />
        <div class="view-more" v-if="data.length > 5">
          <n-button text type="default" @click="showDetailsModal = true" class="view-more-btn">
            <template #icon>
              <n-icon><ScanOutline /></n-icon>
            </template>
            <span class="btn-text">DETAILS</span>
          </n-button>
        </div>
      </div>

      <PieChart
        ref="pieChartRef"
        :data="limitedData"
        :theme="themeName"
        :height="isMobile ? 300 : 400"
      />
    </n-flex>

    <!-- 详细数据弹窗 -->
    <n-modal
      v-model:show="showDetailsModal"
      preset="card"
      title="详细数据"
      :style="{ width: '600px' }"
    >
      <ProgressList :data="data" />
      <PieChart :data="data" :theme="themeName" :height="400" />
    </n-modal>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { NButton, NModal, NIcon, NFlex } from 'naive-ui'
import { useThemesStore } from '@/stores/themes'
import ProgressList from './ProgressList.vue'
import PieChart from './PieChart.vue'
import { debounce } from 'lodash-es'
import { ScanOutline } from '@vicons/ionicons5'
import type { MetricsData } from '@/types'
import { useWindowSize } from '@vueuse/core'

interface Props {
  data: MetricsData[]
}

const props = defineProps<Props>()

// 主题相关
const themesStore = useThemesStore()
const themeName = computed(() => themesStore.themeName)

const pieChartRef = ref()

// 创建防抖的 resize 处理函数
const debouncedResize = debounce(() => {
  pieChartRef.value?.resize()
}, 200)

// 使用防抖后的函数
onMounted(() => {
  window.addEventListener('resize', debouncedResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', debouncedResize)
  debouncedResize.cancel() // 清除待执行的防抖函数
})

// 控制详情弹窗显示
const showDetailsModal = ref(false)

// 限制显示前5项数据
const limitedData = computed(() => {
  return props.data.slice(0, 5)
})

const { width } = useWindowSize()
const isMobile = computed(() => width.value <= 768)
</script>

<style scoped>
.view-more {
  display: flex;
  margin-top: 8px;
}

.view-more-btn {
  width: 100%;
  justify-content: center;
  padding: 8px 0;
}

.btn-text {
  position: relative;
  padding: 2px 0;
}

.btn-text::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: var(--n-text-color);
  transform: scaleX(0);
  transition: transform 0.3s ease;
  transform-origin: center;
}

.view-more-btn:hover .btn-text::after,
.view-more-btn:focus .btn-text::after {
  transform: scaleX(1);
}

:deep(.n-button__content) {
  justify-content: center;
}
</style>
