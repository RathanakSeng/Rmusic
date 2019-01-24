<template>
  <div id="app">
    <v-app>
      <v-content>
        <navbar/>
        <router-view/>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import Navbar from '@/components/reusable/Navbar'
export default {
  name: 'App',
  components: {
    Navbar
  },
  computed: {
    userAuthenticated () {
      return true
    }
  }
}
</script>
<style>
  body {
    font-size: 18px
  }
</style>
