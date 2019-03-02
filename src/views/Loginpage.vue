<template>
  <v-container>
    <v-layout align-center justify-center>
      <login/>
    </v-layout>
  </v-container>
</template>
<script>
import Login from '../components/authentication/Login'
export default {
  components: {
    Login
  }
}
</script>
