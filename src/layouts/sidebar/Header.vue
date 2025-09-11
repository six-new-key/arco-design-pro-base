<template>
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
</template>

<script setup>
import {
  IconNotification,
  IconUser
} from '@arco-design/web-vue/es/icon'

const props = defineProps({
  breadcrumbs: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.header-left {
  flex: 1;
}

.header-right {
  display: flex;
  align-items: center;
}
</style>