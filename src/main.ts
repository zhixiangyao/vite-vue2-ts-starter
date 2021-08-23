import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'

import App from './App.vue'

import 'virtual:windi.css'
import '/@/styles/main.css'

Vue.use(VueCompositionAPI)

const app = new Vue({
  render: (h) => h(App),
})

app.$mount('#app')
