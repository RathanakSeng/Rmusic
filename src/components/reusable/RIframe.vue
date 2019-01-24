<template>
  <iframe
    width="100%"
    height="400"
    :src="src"
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    >
  </iframe>
</template>
<script>
export default {
  props: [
    'src'
  ]
}
</script>
<style scoped>
@media only screen and (max-width: 320px) {
  iframe {
    height: 160px;
  }
}
@media only screen and (min-width: 321px) {
  iframe {
    height: 190px;
  }
}
@media (min-width: 361px) and (min-width: 400px) {
  iframe {
    height: 210px;
  }
}
@media only screen and (min-width: 500px) {
  iframe {
    height: 280px;
  }
}
@media only screen and (min-width: 600px) {
  iframe {
    height: 290px;
  }
}
@media only screen and (min-width: 768px) {
  iframe {
    height: 385px;
  }
}
@media only screen and (min-width: 960px) {
  iframe {
    height: 470px;
  }
}
@media only screen and (min-width: 1264px) {
  iframe {
    height: 420px;
  }
}
</style>
