<template>
  <a-layout class="sidebar-layout">

    <Sidebar />

    <!-- 主内容区域 -->
    <a-layout>
      <!-- 顶部导航栏 -->
      <Header />

      <!-- 页面内容 -->
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup>
import Sidebar from './Sidebar.vue'
import Header from './Header.vue'
</script>

<style scoped>
.sidebar-layout {
  height: 100vh;
  width: 100%;
}

.content {
  padding: 20px;
  height: calc(100vh - 80px);
  background: var(--color-neutral-2);
  overflow-y: scroll;
}
</style>