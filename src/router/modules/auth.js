import SignUpPage from '@/views/auth/SignUpPage'
import LoginPage from '@/views/auth/LoginPage'

const authRoutes = [
  {
    path: '/login',
    component: LoginPage
  },
  {
    path: '/signup',
    component: SignUpPage
  }
]
export default authRoutes
