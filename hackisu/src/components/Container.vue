<template>
	<div class="maincontainer">
		<img v-if="gameRunning" alt="Vue logo" src="@/assets/OctocatGif.gif">
		
		<transition>
		  <img v-if="imgvisible" alt="Vue logo" src="@/assets/logo.png">
		</transition>


		<div class="menu">
		  <ul class="mtest">
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
  name: 'Container',
   props: {
    imgvisible: false,
    gameRunning: false
  },
  methods: {
    changeImg: function(){
      this.imgvisible = !this.imgvisible;
      //console.log("this changed or something")
    },
    startGame: function(){
      this.gameRunning = !this.gameRunning
      console.log("started forreal")
    }
  }

}

</script>

<style src="./Container.css" scoped>
</style>