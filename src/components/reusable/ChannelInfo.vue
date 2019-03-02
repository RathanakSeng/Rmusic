<template>
  <v-card-actions>
    <v-list-tile-avatar color="grey darken-3" size="55" class="avatarSize">
      <v-img
        class="elevation-6"
        src='https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light'
      ></v-img>
    </v-list-tile-avatar>
    <v-list-tile-content>
      <v-list-tile-title @click="navigateToChannel('/channel/', 'ureq838q9')" class="channel"><h3><span class="ma-2"></span>Blackpink</h3></v-list-tile-title>
      <span class="grey--text ml-1 mt-1">
        <span class="subheading ml-2">1274353</span>
        <span>follower</span>
      </span>
    </v-list-tile-content>
    <v-spacer></v-spacer>
    <v-btn v-if="uid != reqid" flat class="amber darken-3" v-bind:class="{'theme--dark': !follow, 'font-amber': follow, 'v-btn--outline': follow}" @click="followAction">
      <span>{{ follow ? 'following' : 'follow' }}</span>
    </v-btn>
  </v-card-actions>
</template>
<script>
export default {
  data () {
    return {
      follow: false,
      isMe: false,
      uid: 'YTWEGY1346HF67568Q4',
      reqid: this.$route.params.id
    }
  },
  methods: {
    followAction () {
      this.follow = !this.follow
      if (this.follow) {
        this.nFollow++
      } else {
        this.nFollow--
      }
    },
    navigateToChannel (route, id) {
      this.$router.push(route + id)
    }
  }
}
</script>
<style scoped>
.channel {
  cursor: pointer !important
}
</style>
