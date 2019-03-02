<template>
  <div>
    <v-alert
      :value="true"
      icon="warning"
      outline
      error
    >
    {{message}}
    </v-alert>
  </div>
</template>
<script>
export default {
  props: [
    'message'
  ]
}
</script>
