import { HIDE_PRIMARY_BACKGROUND, SHOW_PRIMARY_BACKGROUND } from '@/store/shared/mutation.types'

const state = {
  isPrimaryBackground: true
}

const getters = {
  isPrimaryBackground(state) {
    return state.isPrimaryBackground
  }
}

const mutations = {
  [SHOW_PRIMARY_BACKGROUND](state) {
    state.isPrimaryBackground = true
  },
  [HIDE_PRIMARY_BACKGROUND](state) {
    state.isPrimaryBackground = false
  }
}

export default {
  state,
  getters,
  mutations
}
