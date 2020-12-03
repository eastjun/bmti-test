import { PUSH_MESSAGE } from '@/store/shared/mutation.types'

const state = {
  messages: []
}

const getters = {
  messages(state) {
    return state.messages
  }
}

const mutations = {
  [PUSH_MESSAGE](state, message) {
    state.messages.push(message)
  }
}

export default {
  state,
  getters,
  mutations
}
