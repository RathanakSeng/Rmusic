<template>
  <v-container>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md8>
        <v-card class="elevation-12">
          <v-toolbar dark color="amber darken-3">
            <v-toolbar-title>Signup form</v-toolbar-title>
          </v-toolbar>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-card-text>
              <alertbtn v-if="errMess" :message="errMess"/>
              <v-text-field v-model="title" label="Title" required></v-text-field>
              <v-layout wrap>
                <v-flex xs12 sm2 d-flex>
                  <v-select :items="privacyType" v-model="privacy" label="Pivacy" required></v-select>
                </v-flex>
                <v-spacer/>
                <v-flex xs12 sm9 d-flex>
                  <v-text-field v-model="url" label="Song's url" required></v-text-field>
                </v-flex>
              </v-layout>
              <v-textarea outline v-model="description" label="Description" required></v-textarea>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn dark color="amber darken-3" @click="upload()">Upload</v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import Alertbtn from '../components/authentication/Alertbtn'
// import SongController from '../controller/SongController'
export default {
  data: () => ({
    valid: true,
    errMess: null,
    privacyType: ['public', 'private'],
    title: null,
    description: null,
    url: null,
    privacy: null
  }),
  methods: {
    upload () {
      console.log(this.privacy)
      console.log(this.title)
      console.log(this.description)
      console.log(this.url)
    }
  },
  components: {
    Alertbtn
  }
}
</script>
