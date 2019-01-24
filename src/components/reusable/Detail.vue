<template>
    <v-card>
      <v-layout>
        <v-flex xs6 sm6 md4 lg4 ml-4 mt-4 mb-4>
          <v-icon x-large color="primary">{{icon}}</v-icon>
        </v-flex>
        <v-flex xs6 sm6 md8 lg8 centered>
          <v-card-title>
            <div>
              <div class="grey--text">{{type}}</div>
                <div class="grey--text">{{amount}}</div>
                  <div><h5>{{increase ? '+ ' + increase : '- ' + decrease}}</h5></div>
            </div>
          </v-card-title>
        </v-flex>
      </v-layout>
      <v-divider light></v-divider>
      <v-card-title class="pa-3 grey--text">
        <v-icon>loop</v-icon><span class="ma-1"></span><span>{{typeOfUpdate}}</span>
      </v-card-title>
    </v-card>
</template>

<script>
export default {
  props: [
    'type', 'icon', 'amount', 'increase', 'decrease', 'typeOfUpdate'
  ]
}
</script>
