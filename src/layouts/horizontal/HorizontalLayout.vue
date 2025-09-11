<template>
  <a-layout class="horizontal-layout">
    <!-- 顶部头部区域 -->
    <a-layout-header class="header">
      <div class="header-left">
        <div class="logo">
          <img src="/vite.svg" alt="Logo" class="logo-img" />
          <span class="logo-text">管理系统</span>
        </div>
        <Menu />
      </div>
      <UserActions />
    </a-layout-header>

    <!-- 主内容区域 -->
    <a-layout-content class="content">
      <slot />
    </a-layout-content>
  </a-layout>
</template>

<script setup>
import Menu from './Menu.vue'
import UserActions from './UserActions.vue'
</script>

<style scoped>
.horizontal-layout {
  min-height: 100vh;
}

.header {
  background-color: #fff;
  border-bottom: 1px solid #e8e8e8;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  height: 64px;
}

.header-left {
  display: flex;
  align-items: center;
  flex: 1;
}

.logo {
  display: flex;
  align-items: center;
  margin-right: 40px;
}

.logo-img {
  width: 32px;
  height: 32px;
  margin-right: 12px;
}

.logo-text {
  font-size: 18px;
  font-weight: 600;
  color: #1d2129;
}

/* 菜单和用户操作区域样式已移至各自组件中 */

.content {
  padding: 24px;
  background-color: #f2f3f5;
  min-height: calc(100vh - 64px);
}
</style>