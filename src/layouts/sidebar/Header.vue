<template>
  <a-layout-header>
    <div class="header">
      <div class="header-left">
        <a-breadcrumb>
          <a-breadcrumb-item v-for="item in breadcrumbs" :key="item.path">
            {{ item.title }}
          </a-breadcrumb-item>
        </a-breadcrumb>
      </div>
      <div class="header-right">
        <a-space>
          <a-button type="text">
            <icon-notification />
          </a-button>
          <a-dropdown>
            <a-button type="text">
              <icon-user />
              <span>管理员</span>
            </a-button>
            <template #content>
              <a-doption>个人设置</a-doption>
              <a-doption>退出登录</a-doption>
            </template>
          </a-dropdown>
        </a-space>
      </div>
    </div>
  </a-layout-header>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import {
  IconNotification,
  IconUser
} from '@arco-design/web-vue/es/icon'

const route = useRoute()

// 面包屑导航
const breadcrumbs = computed(() => {
  const matched = route.matched.filter(item => item.meta && item.meta.title)
  return matched.map(item => ({
    path: item.path,
    title: item.meta.title
  }))
})
</script>

<style scoped>
.header {
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  background: var(--color-bg-2);
  border-left: 1px solid var(--color-neutral-2);
}

.header-left {
  flex: 1;
}

.header-right {
  display: flex;
  align-items: center;
}
</style>