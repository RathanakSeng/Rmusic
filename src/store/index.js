import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    user: {
      id: null,
      username: null
    },
    err: null,
    songs: []
  },
  mutations: {
    setUser (state, user) {
      state.user.id = user.id
      state.user.username = user.username
    },
    setErr (state, message) {
      state.err = message
    }
  },
  actions: {
    signup ({commit}, user) {
      commit('setUser', user)
    },
    login ({commit}, user) {
      commit('setUser', user)
    },
    autoLogin ({commit}, user) {
      commit('setUser', user)
    },
    logout ({commit}) {
      commit('setUser', {id: null, username: null})
    },
    err ({commit}, message) {
      commit('setErr', message)
    }
  },
  getters: {
    getUserId (state) {
      return state.user.id
    },
    getUserName (state) {
      return state.user.name
    },
    getErr (state) {
      return state.err
    }
  }
})
