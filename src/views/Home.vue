<template>
  <v-item-group>
    <v-container grid-list-md>
      <v-subheader><b>Trending</b></v-subheader>
      <v-layout wrap>
        <v-flex lg3 md3 sm6 xs12 v-for='song in songs' :key='song.title'>
          <song-card :img='song.imgUrl' :title='song.title' :artist='song.artist' route='song'/>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-md>
      <v-divider></v-divider>
      <v-subheader><b>Recommended</b></v-subheader>
      <v-layout wrap>
        <v-flex lg3 md3 sm6 xs12 v-for='song in songs' :key='song.title'>
          <song-card :img='song.imgUrl' :title='song.title' :artist='song.artist' route='song'/>
        </v-flex>
      </v-layout>
    </v-container>
  </v-item-group>
</template>

<script>
import SongCard from '../components/reusable/SongCard'
export default {
  name: 'HelloWorld',
  components: {
    SongCard
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      songs: [
        {
          title: 'Solo',
          artist: 'Jennie',
          imgUrl: 'https://cdn.vuetifyjs.com/images/cards/house.jpg'
        },
        {
          title: 'Boombayah',
          artist: 'Blackpink',
          imgUrl: 'https://cdn.vuetifyjs.com/images/cards/house.jpg'
        },
        {
          title: 'Stay',
          artist: 'Blackpink',
          imgUrl: 'https://cdn.vuetifyjs.com/images/cards/house.jpg'
        },
        {
          title: 'Solo',
          artist: 'Jennie',
          imgUrl: 'https://cdn.vuetifyjs.com/images/cards/house.jpg'
        },
        {
          title: 'Boombayah',
          artist: 'Blackpink',
          imgUrl: 'https://cdn.vuetifyjs.com/images/cards/house.jpg'
        },
        {
          title: 'Stay',
          artist: 'Blackpink',
          imgUrl: 'https://cdn.vuetifyjs.com/images/cards/house.jpg'
        }
      ]
    }
  }
}
</script>
