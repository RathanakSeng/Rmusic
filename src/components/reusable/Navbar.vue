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
        <template v-slot:activator="{ on }">
          <v-btn
            dark
            icon
            large
            slot="activator"
            color="primary"
            v-on="on"
            >
            <v-icon v-if="!userIsAuthenticated">account_circle</v-icon>
            <v-avatar v-if="userIsAuthenticated" size="45" color="grey darken-3">
              <img
                class="elevation-6"
                src='https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light'
                alt="Vuetify"
              >
            </v-avatar>
          </v-btn>
        </template>
        <v-list>
            <v-list-tile v-if="!userIsAuthenticated" @click="logIn()">
            <v-list-tile-title class="myPointer">Log in</v-list-tile-title>
            </v-list-tile>
            <v-list-tile v-if="!userIsAuthenticated" @click="signUp()">
            <v-list-tile-title class="myPointer">Sign up</v-list-tile-title>
            </v-list-tile>
            <v-list-tile v-if="userIsAuthenticated" @click="logout()">
            <v-list-tile-title class="myPointer">Log out</v-list-tile-title>
            </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
   </div>
</template>

<script>
import Auth from '../../controller/AuthenticationController'
import MenuComponent from './MenuComponent'
export default {
  data () {
    return {
      drawer: true,
      items: [
        { icon: 'home', text: 'Home', to: '/' },
        { icon: 'trending_up', text: 'Most Popular', to: '/trending' },
        { icon: 'video_library', text: 'Playlists', to: '/playLists' },
        { icon: 'watch_later', text: 'Saved', to: '/saved' }
      ],
      co_items: [
        { icon: 'add_circle_outline', text: 'My Channel', to: '/channel/' },
        { icon: 'settings', text: 'Account Management', to: '/setting/' }
      ]
    }
  },
  props: {
    source: String
  },
  components: {
    MenuComponent
  },
  methods: {
    logIn () {
      return this.$router.push('/login')
    },
    signUp () {
      return this.$router.push('/signup')
    },
    logout () {
      Auth.signOut().then(
        res => {
          this.$store.dispatch('logOut')
        }
      ).catch(
        err => {
          console.log(err.message)
        }
      )
    }
  },
  computed: {
    userIsAuthenticated () {
      return this.$store.getters.getUserId !== null && this.$store.getters.getUserId !== undefined
    }
  }
}
</script>
