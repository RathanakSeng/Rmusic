<template>
  <v-item-group>
    <v-container grid-list-md>
      <v-subheader><b>Channel Analytic</b></v-subheader>
      <v-layout wrap>
        <v-flex lg3 md3 sm6 xs12 v-for="detail in details" :key="detail.type">
          <detail :type="detail.type" :amount="detail.amount" :increase="detail.increase" :decrease="detail.decrease" :icon="detail.icon" :typeOfUpdate="detail.typeOf"/>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-md>
      <v-divider></v-divider>
      <v-subheader><b>Most popular videos</b></v-subheader>
      <v-layout wrap>
        <song-table/>
      </v-layout>
    </v-container>
  </v-item-group>
</template>

<script>
import Detail from '../components/reusable/Detail'
import SongTable from '../components/reusable/SongTable'
export default {
  data () {
    return {
      details: [
        {type: 'View', icon: 'play_circle_outline', typeOf: 'update now', amount: '123456', increase: '98298'},
        {type: 'Like', icon: 'favorite_outline', typeOf: 'update now', amount: '123456', increase: '98298', decrease: ''},
        {type: 'Comment', icon: 'chat_bubble_outline', typeOf: 'update now', amount: '123456', increase: '98298'},
        {type: 'Follower', icon: 'subscriptions_outline', typeOf: 'update now', amount: '123456', increase: '', decrease: '6523798'}
      ]
    }
  },
  components: {
    Detail,
    SongTable
  }
}
</script>
