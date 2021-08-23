import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('/@/layouts/index.vue'),
    redirect: () => ({ name: 'Home' }),
    children: [
      {
        path: 'Home',
        name: 'Home',
        component: () => import('/@/views/Home.vue'),
      },
      {
        path: 'TensileColumn',
        name: 'TensileColumn',
        component: () => import('/@/views/TensileColumn.vue'),
      },
    ],
  },
]

const router = new VueRouter({
  routes,
})

export default router
