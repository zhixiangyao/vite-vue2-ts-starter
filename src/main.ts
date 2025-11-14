import Vue from 'vue'
import App from './App.vue'
import '/@/styles/app.css'
import router from '/@/router'
import { pinia } from '/@/stores'

const app = new Vue({
  pinia,
  router,
  render: h => h(App),
})

app.$mount('#app')
