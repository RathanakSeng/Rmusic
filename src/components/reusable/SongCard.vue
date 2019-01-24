<template>
  <v-hover>
    <v-card
      @click="navigateTo({name: route})"
      slot-scope="{ hover }"
      :class="`elevation-${hover ? 12 : 2}`"
      class="mx-auto"
      >
      <v-img :src="img" height="150px"/>

      <v-card-title primary-title>
        <div>
          <div v-text="title"></div>
          <span class="grey--text" v-text="artist"></span>
          <div class="grey--text">
            <v-icon small>play_circle_filled</v-icon><span class="subheading mr-2"> 256</span>
            <v-icon small>favorite</v-icon><span class="subheading mr-2"> 256 </span>
          </div>
        </div>
      </v-card-title>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: ['title', 'artist', 'img', 'route'],
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>
