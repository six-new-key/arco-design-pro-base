<template>

  <!-- 实现布局切换的加载动画 -->
  <template v-if="appStore.layoutMode === ''">
    <div class="layout-transition">
      <a-spin loading :size="40" tip="正在切换布局..." />
    </div>
  </template>

  <!-- 侧边栏布局 -->
  <template v-if="appStore.layoutMode === 'sidebar'">
    <SidebarLayout :breadcrumbs="breadcrumbs">
      <router-view />
    </SidebarLayout>
  </template>

  <!-- 顶部水平布局 -->
  <template v-if="appStore.layoutMode === 'horizontal'">
    <HorizontalLayout :breadcrumbs="breadcrumbs">
      <router-view />
    </HorizontalLayout>
  </template>


  <!-- 点击按钮弹出右侧全局设置抽屉 -->
  <div class="app-settings" v-if="appStore.layoutMode != ''">
    <a-button type="primary" @click="openAppSettings">
      <template #icon>
        <icon-settings />
      </template>
    </a-button>
  </div>

  <!-- 全局设置抽屉 -->
  <AppSettings ref="appSettingsRef" />
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useAppStore } from '@/stores/modules/app'
import { IconSettings } from '@arco-design/web-vue/es/icon'
import SidebarLayout from './sidebar/SidebarLayout.vue'
import HorizontalLayout from './horizontal/HorizontalLayout.vue'
import AppSettings from '@/components/AppSettings.vue'

const route = useRoute()
const appStore = useAppStore()
const appSettingsRef = ref(null)

// 打开全局设置抽屉
const openAppSettings = () => {
  appSettingsRef.value?.openSettings()
}

// 面包屑导航
const breadcrumbs = computed(() => {
  const matched = route.matched.filter(item => item.meta && item.meta.title)
  return matched.map(item => ({
    path: item.path,
    title: item.meta.title
  }))
})
</script>

<style scoped lang="scss">
.layout-transition {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.app-settings {
  position: fixed;
  top: 50%;
  right: 0;
  z-index: 9999;
}

:deep(.arco-btn) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
</style>
