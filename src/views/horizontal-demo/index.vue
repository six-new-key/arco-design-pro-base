<template>
  <div class="horizontal-demo">
    <a-card title="顶部水平布局演示">
      <a-space direction="vertical" size="large" style="width: 100%">
        <a-alert
          type="info"
          title="布局说明"
          description="这是一个顶部水平布局模式的演示页面。导航菜单位于页面顶部，采用水平排列方式。"
        />
        
        <a-row :gutter="16">
          <a-col :span="8">
            <a-card title="特性介绍" size="small">
              <ul>
                <li>顶部水平导航菜单</li>
                <li>响应式布局设计</li>
                <li>用户操作区域</li>
                <li>品牌Logo展示</li>
              </ul>
            </a-card>
          </a-col>
          <a-col :span="8">
            <a-card title="适用场景" size="small">
              <ul>
                <li>菜单项较少的系统</li>
                <li>需要更多内容展示空间</li>
                <li>简洁的管理界面</li>
                <li>移动端友好的布局</li>
              </ul>
            </a-card>
          </a-col>
          <a-col :span="8">
            <a-card title="布局优势" size="small">
              <ul>
                <li>节省垂直空间</li>
                <li>视觉层次清晰</li>
                <li>操作便捷直观</li>
                <li>现代化设计风格</li>
              </ul>
            </a-card>
          </a-col>
        </a-row>

        <a-card title="示例内容">
          <a-descriptions title="系统信息" :column="2">
            <a-descriptions-item label="布局模式">顶部水平布局</a-descriptions-item>
            <a-descriptions-item label="UI框架">Arco Design Vue</a-descriptions-item>
            <a-descriptions-item label="创建时间">{{ new Date().toLocaleString() }}</a-descriptions-item>
            <a-descriptions-item label="状态">正常运行</a-descriptions-item>
          </a-descriptions>
        </a-card>

        <a-card title="操作示例">
          <a-space>
            <a-button type="primary">主要操作</a-button>
            <a-button>次要操作</a-button>
            <a-button type="outline">辅助操作</a-button>
            <a-button type="text">文本按钮</a-button>
          </a-space>
        </a-card>
      </a-space>
    </a-card>
  </div>
</template>

<script setup>
// 演示页面，无需额外逻辑
</script>

<style scoped>
.horizontal-demo {
  padding: 0;
}

.horizontal-demo ul {
  margin: 0;
  padding-left: 20px;
}

.horizontal-demo li {
  margin-bottom: 8px;
  color: #4e5969;
}
</style>