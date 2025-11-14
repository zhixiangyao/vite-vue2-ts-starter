import Vue from 'vue'
import router from '~/router'
import { pinia } from '~/stores'
import App from './App.vue'
import '~/styles/app.css'

const app = new Vue({
  pinia,
  router,
  render: h => h(App),
})

app.$mount('#app')
