<template>
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
</template>

<script setup>
import { 
  IconNotification, 
  IconUser 
} from '@arco-design/web-vue/es/icon'
</script>

<style scoped>
.header-right {
  display: flex;
  align-items: center;
}
</style>