import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    userId: null,
    err: null,
    songs: []
  },
  mutations: {
    setUserId (state, userId) {
      state.userId = userId
    }
  },
  actions: {
    signup ({commit}, user) {
      commit('setUserId', user.uid)
    },
    autoLogin ({commit}, userId) {
      commit('setUserId', userId)
    },
    logOut ({commit}) {
      commit('setUserId', null)
    }
  },
  getters: {
    getUserId (state) {
      return state.userId
    }
  }
})
