import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Song from '@/views/Song'
import Trending from '@/views/Trending'
import PlayLists from '@/views/PlayLists'
import Saved from '@/views/Saved'
import MyChannel from '@/views/MyChannel'
import AccountManagement from '@/views/AccountManagement'

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
      path: '/playlists',
      name: 'playlists',
      component: PlayLists
    },
    {
      path: '/save',
      name: 'saved',
      component: Saved
    },
    {
      path: '/mychannel',
      name: 'mychannel',
      component: MyChannel
    },
    {
      path: '/setting',
      name: 'accountmanagement',
      component: AccountManagement
    }
  ]
})
