// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {sync} from 'vuex-router-sync'
import store from '@/store'
import './plugins'
import firebase from 'firebase'
Vue.config.productionTip = false

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyCJbIu_48dhXaN5Nex9QR9YUgDwzCEEnss',
      authDomain: 'rmusic-670ce.firebaseapp.com',
      databaseURL: 'https://rmusic-670ce.firebaseio.com',
      projectId: 'rmusic-670ce',
      storageBucket: 'rmusic-670ce.appspot.com',
      messagingSenderId: '748031460029'
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoLogin', user.uid)
      }
    })
  }
})
