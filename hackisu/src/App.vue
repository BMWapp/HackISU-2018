<template>
  <div id="app">

    <Container/>


  </div>
</template>

<script>

import Container from './components/Container.vue'

export default {
  name: 'app',
  components: {
    Container
  }

}


</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}


@font-face {
    font-family: "";
    src: url(http://www.example.org/mycustomfont.ttf) format("truetype");
}



</style>
