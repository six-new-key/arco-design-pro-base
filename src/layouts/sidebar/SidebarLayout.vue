<template>
  <a-layout class="sidebar-layout">
    <!-- 侧边栏 -->
    <a-layout-sider :collapsed="appStore.sidebarCollapsed" :width="224" collapsible :theme="appStore.sidebarTheme"
      @collapse="appStore.toggleSidebarCollapsed" class="custom-sider">
      <div class="sider-content">
        <!-- 固定的logo区域 -->
        <div class="sidebar-header">
          <div class="logo">
            <span v-if="!appStore.sidebarCollapsed">管理系统</span>
            <span v-else>MS</span>
          </div>
        </div>

        <!-- 可滚动的菜单区域 -->
        <div class="menu-container">
          <Menu />
        </div>
      </div>
    </a-layout-sider>

    <!-- 主内容区域 -->
    <a-layout>
      <!-- 顶部导航栏 -->
      <a-layout-header>
        <Header :breadcrumbs="breadcrumbs" />
      </a-layout-header>


      <!-- 页面内容 -->
      <a-layout-content class="content">
        <slot />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useAppStore } from '@/stores/modules/app'
import Header from './Header.vue'
import Menu from './Menu.vue'

const appStore = useAppStore()

const props = defineProps({
  breadcrumbs: {
    type: Array,
    default: () => []
  }
})

</script>

<style scoped>
.sidebar-layout {
  height: 100vh;
}

/* 自定义侧边栏样式 */
.custom-sider {
  overflow: hidden !important;
}

.sider-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* 固定的logo区域 */
.sidebar-header {
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  flex-shrink: 0;
  border-bottom: 1px solid var(--color-border-2);
  background: inherit;
}

.logo {
  font-size: 18px;
  font-weight: bold;
}

/* 可滚动的菜单容器 */
.menu-container {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  height: calc(100% - 48px);
}

/* 隐藏滚动条 - Webkit浏览器 */
.menu-container::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}

.menu-container::-webkit-scrollbar-track {
  background: transparent;
}

.menu-container::-webkit-scrollbar-thumb {
  background: transparent;
}

/* 隐藏滚动条 - Firefox */
.menu-container {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.content {
  padding: 20px;
  min-height: calc(100vh - 48px);
}
</style>