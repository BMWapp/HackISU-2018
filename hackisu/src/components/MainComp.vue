<template>
  <div class="hello">
    <div class="menu">
      <ul>
        <li class="menubtn">
          <button @click="startGame">
            Start Game
          </button>
        </li>

        <li class="menubtn">
          <button @click="startGame">
            Also Start Game
          </button>
        </li>

      </ul>

    </div>

    <transition>
      <img v-if="imgvisible" alt="Vue logo" src="@/assets/logo.png">
    </transition>

  </div>
</template>

<script>
export default {
  name: 'MainComp',
  props: {
    msg: String,
    imgvisible: false
  },
  methods: {
    startGame: function(){
      this.imgvisible = !this.imgvisible;
      console.log("this changed or something")
    }
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./MainComp.css" scoped>

</style>
