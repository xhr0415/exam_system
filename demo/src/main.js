import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import './scss/common.scss'
import './scss/_mixin.scss'
import './config/element-ui'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
