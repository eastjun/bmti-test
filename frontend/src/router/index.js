import Vue from 'vue'
import VueRouter from 'vue-router'
import mainRoutes from '@/router/modules/main'
import authRoutes from '@/router/modules/auth'
import chatRoutes from '@/router/modules/chat'
import bmtiRoutes from '@/router/modules/bmti'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [...mainRoutes, ...authRoutes, ...chatRoutes, ...bmtiRoutes],
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})
