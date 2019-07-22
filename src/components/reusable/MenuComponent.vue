<template>
  <v-list dense>
    <div>
      <v-list-tile v-for="item in items" :key="item.text" class="myPointer myHover" @click="navigateTo(item.to)">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.text }}
            </v-list-tile-title>
          </v-list-tile-content>
      </v-list-tile>
    </div>
    <div v-if="userAuthenticated">
      <v-list-tile v-for="co_item in co_items" :key="co_item.text" class="mt-3 myPointer myHover" @click="navigateToMind(co_item.to, getUserId)">
        <v-list-tile-action>
          <v-icon color="grey darken-1">
            {{ co_item.icon }}
          </v-icon>
        </v-list-tile-action>
        <v-list-tile-title class="grey--text text--darken-1">
            {{ co_item.text }}
        </v-list-tile-title>
      </v-list-tile>
    </div>
  </v-list>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    navigateToMind (route, id) {
      if (this.$store.getters.getUserId === id) {
        this.$forceUpdate()
        this.$router.push(route + id)
      }
    }
  },
  computed: {
    userAuthenticated () {
      return this.$store.getters.getUserId !== null && this.$store.getters.getUserId !== undefined
    },
    getUserId () {
      return this.$store.getters.getUserId
    }
  },
  props: [
    'items', 'co_items'
  ]
}
</script>

<style scoped>
.myPointer {
  cursor: pointer !important
}
.myHover:hover {
  background-color: rgba(200, 200, 200, 0.6) !important
}
</style>
