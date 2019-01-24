<template>
   <div>
    <v-navigation-drawer
      fixed
      clipped
      v-model="drawer"
      app
    >
      <menu-component :items="items" :co_items="co_items"/>
    </v-navigation-drawer>
    <v-toolbar
      clipped-left
      color="primary"
      dark
      app
      fixed
      >
      <v-btn icon dark @click.stop="drawer = !drawer">
        <v-icon>menu</v-icon>
      </v-btn>
      <v-toolbar-title>
        <span>Rmusic</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-layout row align-center style="max-width: 300px" pr-3>
        <v-text-field
          @click:append="() => {}"
          placeholder="Search..."
          single-line
          append-icon="search"
          color="white"
          hide-details
          class="hidden-sm-and-down"
        ></v-text-field>
      </v-layout>
      <v-btn icon class="show-sm-and-down hidden-md-and-up">
        <v-icon>search</v-icon>
      </v-btn>
      <v-menu offset-y>
        <v-btn
          dark
          icon
          large
          slot="activator"
          color="primary"
          >
          <v-icon>account_circle</v-icon>
        </v-btn>
        <v-list>
            <v-list-tile @click="dialog_login = !dialog_login">
            <v-list-tile-title class="myPointer">Log in</v-list-tile-title>
            </v-list-tile>
            <v-list-tile @click="dialog_signup = !dialog_signup">
            <v-list-tile-title class="myPointer">Sign up</v-list-tile-title>
            </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
    <v-dialog v-model="dialog_login" width="450px">
      <login/>
    </v-dialog>
    <v-dialog v-model="dialog_signup" width="450px">
      <signup/>
    </v-dialog>
   </div>
</template>

<script>
import Login from '../authentication/Login'
import Signup from '../authentication/Signup'
import MenuComponent from './MenuComponent'
export default {
  data () {
    return {
      dialog_login: false,
      dialog_signup: false,
      drawer: true,
      items: [
        { icon: 'home', text: 'Home', to: 'home' },
        { icon: 'trending_up', text: 'Most Popular', to: 'trending' },
        { icon: 'video_library', text: 'Playlists', to: 'playLists' },
        { icon: 'watch_later', text: 'Saved', to: 'saved' }
      ],
      co_items: [
        { icon: 'add_circle_outline', text: 'My Channel', to: 'mychannel' },
        { icon: 'settings', text: 'Account Management', to: 'accountmanagement' }
      ]
    }
  },
  props: {
    source: String
  },
  components: {
    Login,
    Signup,
    MenuComponent
  }
}
</script>
