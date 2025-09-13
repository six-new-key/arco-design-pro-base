<template>
    <!-- 侧边栏 -->
    <a-layout-sider :collapsed="appStore.sidebarCollapsed" :width="224" collapsible :theme="appStore.sidebarTheme"
        @collapse="appStore.toggleSidebarCollapsed" :class="siderClass">
        <!-- 固定的logo区域 -->
        <div class="header-logo">
            <transition name="logo-fade" mode="out-in">
                <span v-if="!appStore.sidebarCollapsed" key="full">管理系统</span>
                <span v-else key="short">MS</span>
            </transition>
        </div>

        <!-- 可滚动的菜单区域 -->
        <div class="menu-container">
            <Menu />
        </div>

        <!-- 收缩插槽 -->
        <template #trigger>
            <div :class="{ 'trigger-collapsed': appStore.sidebarCollapsed, 'trigger': !appStore.sidebarCollapsed }">
                <a-button type="text" size="small">
                    <template #icon>
                        <icon-menu-fold v-if="!appStore.sidebarCollapsed" />
                        <icon-menu-unfold v-else />
                    </template>
                </a-button>
            </div>
        </template>
    </a-layout-sider>
</template>

<script setup>
import { computed } from 'vue'
import { useAppStore } from '@/stores/modules/app'
import Menu from './Menu.vue'

const appStore = useAppStore()

// 根据侧边栏主题动态设置类名
const siderClass = computed(() => {
    return `sider-theme-${appStore.sidebarTheme}`
})
</script>

<style lang="scss" scoped>
.arco-layout-sider {
    height: 100vh;

    .header-logo {
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 16px;
        flex-shrink: 0;
        font-size: 18px;
        font-weight: bold;
        position: relative;
    }

    /* Logo文字切换动画 */
    .logo-fade-enter-active,
    .logo-fade-leave-active {
        transition: all 0.3s ease;
        position: absolute;
    }

    .logo-fade-enter-from {
        opacity: 0;
        transform: scale(0.8);
    }

    .logo-fade-leave-to {
        opacity: 0;
        transform: scale(1.2);
    }

    .menu-container {
        max-height: calc(100vh - 100px);
        overflow: auto;
    }

    .menu-container::-webkit-scrollbar {
        display: none;
    }
}

.trigger-collapsed {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.trigger {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 10px;
}

/* 根据侧边栏主题动态设置触发器背景色 */
.sider-theme-light :deep(.arco-layout-sider-trigger) {
    border: none;
    background: var(--color-menu-light-bg) !important;
}

.sider-theme-dark :deep(.arco-layout-sider-trigger) {
    background: var(--color-menu-dark-bg) !important;
    border: none;
    width: 220px;
}
</style>
