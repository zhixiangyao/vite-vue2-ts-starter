import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const stores = {
  state: {
    title: 'Vite + Vue2',
  },
}

const Store = new Vuex.Store(stores)

export default Store
