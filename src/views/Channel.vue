<template>
    <div>
      <section>
        <v-parallax src='https://cdn.vuetifyjs.com/images/cards/house.jpg' height="250"></v-parallax>
      </section>
      <v-container>
        <channel-info/>
        <v-tabs
          slot="extension"
          v-model="tab"
          align-with-title
          color="transparent"
          >
          <v-tabs-slider color="primary"></v-tabs-slider>
          <v-tab v-for="item in items" :key="item">
            {{ item }}
          </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item v-for="item in items" :key="item">
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex lg3 md3 sm6 xs12 v-for='song in songs' :key='song.title'>
                  <song-card :img='song.imgUrl' :title='song.title' :artist='song.artist' route='/song'/>
                </v-flex>
              </v-layout>
            </v-container>
          </v-tab-item>
        </v-tabs-items>
     </v-container>
    </div>
</template>

<script>
import SongCard from '../components/reusable/SongCard'
import ChannelInfo from '../components/reusable/ChannelInfo'
export default {
  data () {
    return {
      tab: null,
      items: [
        'Home', 'Videos', 'Playlists'
      ],
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
      ],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  },
  components: {
    SongCard,
    ChannelInfo
  }
}
</script>
