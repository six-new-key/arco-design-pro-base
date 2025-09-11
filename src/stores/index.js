import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'

const pinia = createPinia()

// 配置持久化插件
pinia.use(
  createPersistedState({
    storage: localStorage,
    key: id => `pinia-${id}`,
  })
)

export default pinia