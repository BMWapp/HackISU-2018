<!-- TODO: 
	Fonts Integration
	Game Logic and Content
	Import correct images
	Button Styling/Images



 -->

<template>
	<div class="maincontainer">

		<div id="imgcontainer">
			<transition name="spin">
				<img v-if="gameRunning" alt="Vue logo" src="@/assets/OctocatGif.gif">	
			</transition>

		</div>

		<div class="textarea">
			<div class="gametextcontainer">
				<vue-typer text='playername' class="gametext" :type-delay='40'></vue-typer>
			</div>
			

		</div>

		<div class="menu">

			<ul class="mtest">
				<li>
					<input v-if="nameInputVisible" v-model="playername" placeholder="Enter Player Name" @keyup.enter="disappear" id="nameinput">
				</li>
				<li>
					<button @click="startGame" class="menubtn">
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
import { VueTyper } from 'vue-typer'
	
export default {
  name: 'Container',
  components: {
  	VueTyper
  },
  props: {
    gameRunning: false,
    nameInputVisible: false,
    //menuVisible: true,
    playername: String
  },
  methods: {
    startGame: function(){
      this.gameRunning = !this.gameRunning;
      this.nameInputVisible = true;
      //this.menuVisible = false
      //console.log("started forreal")
    },
    disappear: function(){
      this.nameInputVisible = false
      //this.menuVisible = true
    }
  }

}

</script>

<style src="./Container.css" scoped>
</style>