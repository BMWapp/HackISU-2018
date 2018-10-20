<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
      <transition>
        <img v-if="imgvisible" alt="Vue logo" src="@/assets/logo.png">
      </transition>
    
    <p>
      Welcome to The App
    </p>

  </div>
</template>

<script>
export default {
  name: 'MainComp',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./MainComp.css" scoped>

</style>
