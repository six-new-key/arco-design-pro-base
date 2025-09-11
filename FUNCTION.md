# 项目功能说明文档

## 1. 自定义消息提示组件

本项目提供了两个自定义封装组件：**CustomMessage** 和 **CustomNotification**，基于 Arco Design Vue 组件库进行二次封装，主要解决防重复显示和智能过期管理问题。

### 1.1 功能文件存放位置说明

**文件位置：**
- `src/utils/message.js` - CustomMessage 组件
- `src/utils/notification.js` - CustomNotification 组件
- `src/utils/index.js` - 统一导出入口

**组件功能：**
- **CustomMessage**：基于 Arco Design Message 的消息提示组件
- **CustomNotification**：基于 Arco Design Notification 的通知组件
- **核心特性**：防重复显示、智能过期管理

### 1.2 功能具体使用方法步骤

#### 步骤1：导入组件

```javascript
// 方式1：按需导入
import { CustomMessage, CustomNotification } from '@/utils'

// 方式2：从统一入口导入
import { CustomMessage, CustomNotification } from '@/utils/index.js'
```

#### 步骤2：基础使用

**消息提示（Message）：**
```javascript
// 成功提示
CustomMessage.success('操作成功！')

// 错误提示
CustomMessage.error('操作失败！')

// 警告提示
CustomMessage.warning('请注意！')

// 信息提示
CustomMessage.info('这是一条信息')

// 加载提示
const loading = CustomMessage.loading('正在处理...')
// 手动关闭
loading.close()
```

**通知（Notification）：**
```javascript
// 成功通知
CustomNotification.success({
  title: '成功',
  content: '数据保存成功！'
})

// 错误通知
CustomNotification.error({
  title: '错误',
  content: '网络连接失败！'
})

// 警告通知
CustomNotification.warning({
  title: '警告',
  content: '请注意数据安全',
  position: 'topRight'
})
```

#### 步骤3：高级配置

**带参数配置：**
```javascript
// Message 配置
CustomMessage.info('这是一条信息', {
  duration: 5000,    // 显示时长（毫秒）
  closable: true,    // 显示关闭按钮
  position: 'top'    // 显示位置
})

// Notification 配置
CustomNotification.info({
  title: '通知标题',
  content: '通知内容',
  duration: 0,           // 0 表示不自动关闭
  position: 'topRight',  // 显示位置
  closable: true         // 显示关闭按钮
})
```

#### 步骤4：在 Vue 组件中使用

**Composition API：**
```vue
<script setup>
import { CustomMessage } from '@/utils'

const handleSubmit = async () => {
  try {
    const loading = CustomMessage.loading('正在提交...')
    await submitData()
    loading.close()
    CustomMessage.success('提交成功！')
  } catch (error) {
    CustomMessage.error('提交失败：' + error.message)
  }
}
</script>
```

**Options API：**
```vue
<script>
import { CustomMessage } from '@/utils'

export default {
  methods: {
    async handleSubmit() {
      try {
        const loading = CustomMessage.loading('正在提交...')
        await this.submitData()
        loading.close()
        CustomMessage.success('提交成功！')
      } catch (error) {
        CustomMessage.error('提交失败：' + error.message)
      }
    }
  }
}
</script>
```

### 1.3 使用时的基本注意事项

#### 依赖要求
- **Vue 版本**：Vue 3.0+
- **UI 组件库**：@arco-design/web-vue 2.0+
- **浏览器支持**：现代浏览器（Chrome 60+, Firefox 60+, Safari 12+）

#### 重要提醒

1. **防重复显示机制**
   - 相同内容的提示在显示期间不会重复弹出
   - 只有完全相同的参数组合才会被识别为重复
   - 提示消失后可立即显示新的相同内容提示

2. **手动关闭长时间提示**
   - 设置 `duration: 0` 的提示不会自动关闭
   - 必须手动调用 `close()` 方法关闭
   - 避免创建过多不关闭的提示

3. **导入路径**
   - 确保导入路径正确：`@/utils` 或 `./utils`
   - 确保 Arco Design Vue 已正确安装和配置

4. **性能考虑**
   - 避免在循环或高频事件中频繁调用
   - 合理设置 duration 时长，避免过长显示时间
   - 及时关闭不需要的长时间提示

5. **用户体验**
   - 提示内容保持简洁明了
   - 根据操作结果选择合适的提示类型
   - 错误提示应包含具体原因和解决建议

#### 常见问题

**问题：提示不显示**
- 检查导入路径是否正确
- 确认 Arco Design Vue 是否已安装

**问题：TypeScript 类型错误**
- 组件已内置类型定义，确保从正确路径导入

**问题：重复提示仍然显示**
- 检查传入参数是否完全一致
- 确认使用的是最新版本的组件文件