import App from './App'
import router from './router'
import store from './store'
import * as hooks from './hooks'

export default {
  launch: (Vue) => {
    /* eslint-disable no-new */
    new Vue({
      el: '#app',
      router,
      store,
      template: '<App/>',
      components: { App }
    })
    // 启动应用时执行某些操作
    hooks.bootstrap(store, router)()
  }
}
