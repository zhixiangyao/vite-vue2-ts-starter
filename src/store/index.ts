import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const stores = {
  state: {
    title: 'Vite + Vue3',
  },
}

const Store = new Vuex.Store(stores)

export default Store
