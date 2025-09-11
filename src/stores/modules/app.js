import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useAppStore = defineStore(
  "app",
  () => {
    // 布局模式：sidebar（侧边栏布局）、horizontal（顶部水平布局）
    const layoutMode = ref("sidebar");

    // 主题模式：light（浅色）、dark（暗黑）
    const themeMode = ref("light");
    
    // 侧边栏主题
    const sidebarTheme = ref("dark");
    
    // 侧边栏折叠状态
    const sidebarCollapsed = ref(false);

    // 设置布局模式
    const setLayoutMode = (mode) => {
      if (["sidebar", "horizontal"].includes(mode)) {
        if (layoutMode.value !== mode) {
          // 先设置为空，显示加载动画
          layoutMode.value = "";

          // 300ms后设置为目标布局
          setTimeout(() => {
            layoutMode.value = mode;
          }, 300);
        }
      }
    };

    // 设置主题模式
    const setThemeMode = (mode) => {
      if (["light", "dark"].includes(mode)) {
        themeMode.value = mode;
        if (mode === "dark") {
          document.body.setAttribute("arco-theme", "dark");
        } else {
          document.body.removeAttribute("arco-theme");
        }
      }
    };

    // 设置侧边栏主题
    const setSidebarTheme = (theme) => {
      sidebarTheme.value = theme;
    };
    
    // 切换侧边栏折叠状态
    const toggleSidebarCollapsed = () => {
      sidebarCollapsed.value = !sidebarCollapsed.value;
    };
    
    // 设置侧边栏折叠状态
    const setSidebarCollapsed = (collapsed) => {
      sidebarCollapsed.value = collapsed;
    };

    // 初始化主题
    const initTheme = () => {
      setThemeMode(themeMode.value);
    };

    return {
      layoutMode,
      themeMode,
      sidebarTheme,
      sidebarCollapsed,
      setLayoutMode,
      setThemeMode,
      setSidebarTheme,
      toggleSidebarCollapsed,
      setSidebarCollapsed,
      initTheme,
    };
  },
  {
    // 持久化配置
    persist: {
      key: "app-layout-mode",
      storage: localStorage,
      paths: ["layoutMode", "themeMode", "sidebarTheme", "sidebarCollapsed"],
    },
  }
);
