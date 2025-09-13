<template>
  <a-menu :default-selected-keys="[currentRoute]" :default-open-keys="defaultOpenKeys" mode="vertical"
    :theme="appStore.sidebarTheme" :collapsed="appStore.sidebarCollapsed" :style="{ height: '100%' }">
    <template v-for="route in menuRoutes" :key="route.name">
      <!-- 一级菜单 -->
      <a-menu-item v-if="!route.children || route.children.length === 0" :key="route.name"
        @click="handleMenuClick(route.path)">
        <template #icon>
          <component :is="getIcon(route.meta?.icon)" v-if="getIcon(route.meta?.icon)" />
        </template>
        <span>{{ route.meta?.title }}</span>
      </a-menu-item>

      <!-- 多级菜单 -->
      <a-sub-menu v-else :key="`menu-${route.name}`">
        <template #icon>
          <component :is="getIcon(route.meta?.icon)" v-if="getIcon(route.meta?.icon)" />
        </template>
        <template #title>{{ route.meta?.title }}</template>

        <template v-for="child in route.children" :key="child.name">
          <!-- 二级菜单项 -->
          <a-menu-item v-if="!child.children || child.children.length === 0" :key="child.name"
            @click="handleMenuClick(child.path)">
            <template #icon>
              <component :is="getIcon(child.meta?.icon)" v-if="getIcon(child.meta?.icon)" />
            </template>
            <span>{{ child.meta?.title }}</span>
          </a-menu-item>

          <!-- 三级菜单 -->
          <a-sub-menu v-else :key="`sub-${child.name}`">
            <template #icon>
              <component :is="getIcon(child.meta?.icon)" v-if="getIcon(child.meta?.icon)" />
            </template>
            <template #title>{{ child.meta?.title }}</template>

            <a-menu-item v-for="grandChild in child.children" :key="grandChild.name"
              @click="handleMenuClick(grandChild.path)">
              <template #icon>
                <component :is="getIcon(grandChild.meta?.icon)" v-if="getIcon(grandChild.meta?.icon)" />
              </template>
              <span>{{ grandChild.meta?.title }}</span>
            </a-menu-item>
          </a-sub-menu>
        </template>
      </a-sub-menu>
    </template>
  </a-menu>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAppStore } from '@/stores/modules/app'
import { constantRoutes } from '@/router/routes'
// 导入Arco UI图标
import {
  IconHome,
  IconDashboard,
  IconLayout,
  IconUser,
  IconUserGroup,
  IconSafe,
  IconSettings,
  IconEdit,
  IconList,
  IconPlus,
  IconApps,
  IconImage,
  IconCamera,
  IconTool,
  IconPalette,
  IconFile,
  IconSave,
  IconBarChart,
  IconArrowUp,
  IconArrowDown,
  IconHistory
} from '@arco-design/web-vue/es/icon'

// 移除所有props，直接使用store

const router = useRouter()
const route = useRoute()
const appStore = useAppStore()

// 图标映射
const iconMap = {
  IconHome,
  IconDashboard,
  IconLayout,
  IconUser,
  IconUserGroup,
  IconSafe,
  IconSettings,
  IconEdit,
  IconList,
  IconPlus,
  IconApps,
  IconImage,
  IconCamera,
  IconTool,
  IconPalette,
  IconFile,
  IconSave,
  IconBarChart,
  IconArrowUp,
  IconArrowDown,
  IconHistory
}

// 获取图标组件
const getIcon = (iconName) => {
  return iconMap[iconName] || null
}

// 菜单路由数据
const menuRoutes = computed(() => {
  const layoutRoute = constantRoutes.find(route => route.name === 'Layout')
  return layoutRoute?.children?.filter(route => !route.meta?.hide) || []
})

// 当前路由
const currentRoute = computed(() => {
  return route.name
})

// 默认展开的菜单
const defaultOpenKeys = computed(() => {
  const matched = route.matched
  const openKeys = []

  matched.forEach(item => {
    if (item.children && item.children.length > 0) {
      openKeys.push(item.name)
    }
  })

  return openKeys
})

// 处理菜单点击
const handleMenuClick = (path) => {
  router.push(path)
}
</script>