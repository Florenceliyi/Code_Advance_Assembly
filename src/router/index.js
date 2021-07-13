import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
    {
        path: '/proxy',
        component: () => import('@/components/subComponents/proxyContent'),
        hidden: true
    },
]
  

  const router = new Router({
    routes 
  })

export default router
  