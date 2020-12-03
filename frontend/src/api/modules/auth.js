import ApiService from '@/api'

const BASE_URL = 'http://52.78.96.131:8080/api/user'

const UserService = {
  login({ email, password }) {
    return ApiService.post(`${BASE_URL}/login`, { email, password })
  },
  signup({ email, name, password }) {
    return ApiService.post(`${BASE_URL}`, { email, name, password })
  }
}

export default UserService
