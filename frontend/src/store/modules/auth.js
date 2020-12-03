import { LOGIN, REMOVE_ASSESS_TOKEN, SET_ASSESS_TOKEN, SET_USER } from '@/store/shared/mutation.types'
import UserService from '@/api/modules/auth'
import { SIGNUP } from '@/store/shared/action.types'

const state = {
  accessToken: null,
  user: {}
}

const getters = {
  accessToken(state) {
    return state.accessToken
  },
  user(state) {
    return state.user
  }
}

const mutations = {
  [SET_ASSESS_TOKEN](state, accessToken) {
    state.accessToken = accessToken
  },
  [REMOVE_ASSESS_TOKEN](state) {
    state.accessToken = null
  },
  [SET_USER](state, user) {
    state.user = user
  }
}

const actions = {
  async [SIGNUP]({ commit }, { email, name, password }) {
    try {
      const { data } = await UserService.signup({ email, name, password })
      commit(SET_USER, data)
    } catch (e) {
      throw new Error(e)
    }
  },
  async [LOGIN]({ commit }, { email, password }) {
    try {
      const { data } = await UserService.login({ email, password })
      commit(SET_USER, data)
      // localStorage.accessToken = data
      localStorage.setItem('user', data)
    } catch (e) {
      throw new Error(e)
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
