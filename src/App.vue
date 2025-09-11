<template>
  <router-view />
</template>

<script setup>
import { onMounted } from 'vue'
import { useAppStore } from '@/stores/modules/app'

const appStore = useAppStore()

// 在组件挂载后初始化主题
onMounted(() => {
  appStore.initTheme()
})
</script>

<style lang="scss" scoped>

</style>
