import Vue from 'vue'
import Router from 'vue-router'
const Record = () => import('@/components/index.vue')

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/record',
      name: 'Record',
      component: Record
    }
  ]
})

export default router
