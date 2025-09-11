<template>
  <a-menu
    mode="horizontal"
    :selected-keys="selectedKeys"
    class="nav-menu"
    @menu-item-click="handleMenuClick"
  >
    <a-menu-item
      v-for="route in menuRoutes"
      :key="route.name"
    >
      {{ route.meta?.title || route.name }}
    </a-menu-item>
  </a-menu>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

// 获取菜单路由
const menuRoutes = computed(() => {
  return router.getRoutes().filter(route => 
    route.meta?.showInMenu !== false && 
    route.path !== '/' &&
    !route.path.includes('/:') &&
    route.meta?.title
  )
})

// 当前选中的菜单项
const selectedKeys = computed(() => {
  return [route.name]
})

// 处理菜单点击
const handleMenuClick = (key) => {
  router.push({ name: key })
}
</script>

<style scoped>
.nav-menu {
  flex: 1;
  border-bottom: none;
  background: transparent;
}

.nav-menu :deep(.arco-menu-item) {
  height: 64px;
  line-height: 64px;
  margin: 0 8px;
  border-radius: 4px;
}

.nav-menu :deep(.arco-menu-item:hover) {
  background-color: #f2f3f5;
}

.nav-menu :deep(.arco-menu-item-selected) {
  background-color: #e8f4ff;
  color: #165dff;
}
</style>