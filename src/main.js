import { createApp } from 'vue'
import './style.css'
// 引入Arco Design样式
import '@arco-design/web-vue/dist/arco.css'
// 引入Arco Design组件库
import ArcoVue from '@arco-design/web-vue'
// 引入图标库
import ArcoVueIcon from '@arco-design/web-vue/es/icon'
import App from './App.vue'
import router from './router'
import pinia from './stores'

const app = createApp(App)

app.use(ArcoVue)
app.use(ArcoVueIcon)
app.use(router)
app.use(pinia)
app.mount('#app')
