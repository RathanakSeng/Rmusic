<template>
  <v-flex xs12 sm8 md8>
    <v-card class="elevation-12">
      <v-toolbar dark color="amber darken-3">
        <v-toolbar-title>Signup form</v-toolbar-title>
      </v-toolbar>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-card-text>
          <alertbtn v-if="errMess" :message="errMess"/>
          <v-text-field
            prepend-icon="email"
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
          <v-text-field
            prepend-icon="lock"
            v-model="password"
            :rules="passwordRules"
            label="password"
            type="password"
            required
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="amber darken-3" :disabled="!valid" dark @click="signup()">Signup</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-flex>
</template>
<script>
import Alertbtn from './Alertbtn'
import Auth from '../../controller/AuthenticationController'
export default {
  data: () => ({
    valid: true,
    errMess: null,
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],
    password: '',
    passwordRules: [v => !!v || 'Password is required']
  }),
  components: {
    Alertbtn
  },
  methods: {
    signup () {
      if (this.$refs.form.validate()) {
        Auth.register({
          email: this.email,
          password: this.password
        }).then(
          res => {
            this.$store.dispatch('signup', res.user)
            if (this.$store.getters.getUserId) {
              this.$router.push('/')
            }
          }
        ).catch(
          err => {
            console.log(err)
            this.errMess = err.message
          }
        )
      }
    }
  }
}
</script>
