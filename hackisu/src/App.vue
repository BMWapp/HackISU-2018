<template>
  <div id="app">
    <Container/>

    <MainComp msg="Welcome to Your Vue.js App"/>


  </div>
</template>

<script>
import MainComp from './components/MainComp.vue'
import Container from './components/Container.vue'

export default {
  name: 'app',
  components: {
    MainComp,
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



</style>
