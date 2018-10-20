<template>
  <div class="hello">


    <transition>
      <img v-if="imgvisible" alt="Vue logo" src="@/assets/logo.png">
    </transition>

    <div class="menu">
      <ul class>
        <li>
          <button @click="changeImg" class="menubtn">
            Start Game
          </button>
        </li>
        <li>
          <button @click="startGame" class="menubtn">
            Start Game But It Works
          </button>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: 'MainComp',
  props: {
    msg: String,
    imgvisible: false,
    gameRunning: false
  },
  methods: {
    changeImg: function(){
      this.imgvisible = !this.imgvisible;
      //console.log("this changed or something")
    },
    startGame: function(){
      this.gameRunning = true
      //console.log("started forreal")
    }
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./MainComp.css" scoped>

</style>
