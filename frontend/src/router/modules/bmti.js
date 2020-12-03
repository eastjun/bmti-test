import BmtiMainPage from '@/views/bmti/BmtiMainPage'
import BmtiResultPage from '@/views/bmti/BmtiResultPage'
import BmtiSelectPage from '@/views/bmti/BmtiSelectPage'

// const requireAuth = () => (from, to, next) => {
//   const isAuthenticated = false
//   if (isAuthenticated) {
//     return next()
//   }
//   next('/login')
// }

const bmtiRoutes = [
  {
    path: '/bmti',
    component: BmtiMainPage
    // beforeEnter: requireAuth()
  },
  {
    path: '/bmti/result',
    component: BmtiResultPage
  },
  {
    path: '/bmti/select',
    component: BmtiSelectPage
  }
]
export default bmtiRoutes
