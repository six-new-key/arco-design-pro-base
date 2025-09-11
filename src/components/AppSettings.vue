<template>
  <a-drawer
    v-model:visible="visible"
    title="全局设置"
    placement="right"
    :width="320"
    :closable="true"
  >
    <div class="settings-content">
      <div class="setting-item">
        <h4>布局模式</h4>
        <div class="layout-options">
          <div 
            class="layout-option"
            :class="{ 'active': appStore.layoutMode === 'sidebar' }"
            @click="switchLayout('sidebar')"
          >
            <icon-menu-fold />
            <span>侧边栏布局</span>
          </div>
          <div 
            class="layout-option"
            :class="{ 'active': appStore.layoutMode === 'horizontal' }"
            @click="switchLayout('horizontal')"
          >
            <icon-layout />
            <span>顶部水平布局</span>
          </div>
        </div>
      </div>
      
      <div class="setting-item">
        <h4>主题模式</h4>
        <div class="theme-switch">
          <span>浅色模式</span>
          <a-switch 
            v-model="isDarkMode" 
            @change="toggleTheme"
            :checked-text="'暗黑'"
            :unchecked-text="'浅色'"
          />
          <span>暗黑模式</span>
        </div>
      </div>
      
      <div class="setting-item">
        <h4>侧边栏主题</h4>
        <div class="sidebar-theme-options">
          <div 
            class="theme-option"
            :class="{ 'active': appStore.sidebarTheme === 'light' }"
            @click="setSidebarTheme('light')"
          >
            <div class="theme-preview light-theme"></div>
            <span>浅色侧边栏</span>
          </div>
          <div 
            class="theme-option"
            :class="{ 'active': appStore.sidebarTheme === 'dark' }"
            @click="setSidebarTheme('dark')"
          >
            <div class="theme-preview dark-theme"></div>
            <span>暗色侧边栏</span>
          </div>
        </div>
      </div>
    </div>
  </a-drawer>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useAppStore } from '@/stores/modules/app'
import { 
  IconLayout, 
  IconMenuFold 
} from '@arco-design/web-vue/es/icon'

const appStore = useAppStore()

// 抽屉显示状态
const visible = ref(false)

// 主题模式计算属性
const isDarkMode = computed({
  get: () => appStore.themeMode === 'dark',
  set: (value) => {
    appStore.setThemeMode(value ? 'dark' : 'light')
  }
})

// 打开设置抽屉
const openSettings = () => {
  visible.value = true
}

// 切换布局模式
const switchLayout = (mode) => {
  appStore.setLayoutMode(mode)
  visible.value = false
}

// 切换主题模式
const toggleTheme = (value) => {
  appStore.setThemeMode(value ? 'dark' : 'light')
}

// 设置侧边栏主题
const setSidebarTheme = (theme) => {
  appStore.setSidebarTheme(theme)
}

// 暴露方法供父组件调用
defineExpose({
  openSettings
})
</script>

<style scoped>
.settings-content {
  padding: 16px 0;
}

.setting-item {
  margin-bottom: 24px;
}

.setting-item h4 {
  margin: 0 0 12px 0;
  font-size: 14px;
  font-weight: 500;
  color: #1d2129;
}

.layout-options {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.layout-option {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  border: 1px solid #e5e6eb;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
}

.layout-option:hover {
  border-color: #165dff;
  background-color: #f2f3ff;
}

.layout-option.active {
  border-color: #165dff;
  background-color: #e8f4ff;
  color: #165dff;
}

.layout-option span {
  margin-left: 8px;
  font-size: 14px;
}

.theme-switch {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.theme-switch span {
  font-size: 14px;
  color: #4e5969;
}

.sidebar-theme-options {
  display: flex;
  gap: 12px;
}

.theme-option {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  border: 1px solid #e5e6eb;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
  flex: 1;
}

.theme-option:hover {
  border-color: #165dff;
  background-color: #f2f3ff;
}

.theme-option.active {
  border-color: #165dff;
  background-color: #e8f4ff;
  color: #165dff;
}

.theme-preview {
  width: 40px;
  height: 30px;
  border-radius: 4px;
  margin-bottom: 8px;
  border: 1px solid #e5e6eb;
}

.light-theme {
  background-color: #ffffff;
}

.dark-theme {
  background-color: #2c2c2c;
}

.theme-option span {
  font-size: 12px;
  text-align: center;
}
</style>