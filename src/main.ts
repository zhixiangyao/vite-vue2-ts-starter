import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'

import router from '/@/router'
import store from '/@/store'
import App from '/@/App'

import 'virtual:windi.css'
import '/@/styles/main.css'

Vue.use(VueCompositionAPI)

const app = new Vue({
  store,
  router,
  render: (h) => h(App),
})

app.$mount('#app')
