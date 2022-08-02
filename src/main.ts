import Vue from 'vue'

import router from '/@/router'
import store from '/@/store'
import App from '/@/App'

import 'virtual:windi.css'
import '/@/styles/main.css'

const app = new Vue({
  store,
  router,
  render: (h) => h(App),
})

app.$mount('#app')
