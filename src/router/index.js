import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Song from '@/views/Song'
import Trending from '@/views/Trending'
import PlayLists from '@/views/PlayLists'
import Saved from '@/views/Saved'
import Channel from '@/views/Channel'
import AccountManagement from '@/views/AccountManagement'
import Signup from '@/views/Signuppage'
import Login from '@/views/Loginpage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/song',
      name: 'song',
      component: Song
    },
    {
      path: '/trending',
      name: 'trending',
      component: Trending
    },
    {
      path: '/playLists',
      name: 'playlists',
      component: PlayLists
    },
    {
      path: '/saved',
      name: 'saved',
      component: Saved
    },
    {
      path: '/channel/:id',
      name: 'channel',
      component: Channel
    },
    {
      path: '/setting/:id',
      name: 'accountmanagement',
      component: AccountManagement
    }
  ]
})
