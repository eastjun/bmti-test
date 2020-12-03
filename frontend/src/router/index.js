import Vue from 'vue'
import VueRouter from 'vue-router'
import mainRoutes from '@/router/modules/main'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [...mainRoutes],
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})
