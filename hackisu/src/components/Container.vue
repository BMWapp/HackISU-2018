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
<!-- :text= '[playername + ", .. you have awoken in the octocat universe.. a real cat-astrophe"]' -->

				<vue-typer 
					
					v-bind:text="playername"
					@completed='showNextLine'
					v-if="playername"
					class="gametext" 
					:repeat='0'
					:type-delay='60'
					:erase-on-complete='true'
					:pre-erase-delay='500'
					erase-style='clear'>
				</vue-typer>
				<vue-typer text= "This is your adventure, continue forward how you wish"
					v-if="lineComplete"
					@completed='showNextLine'
					:repeat='0'
					class="gametext" 
					:type-delay='60'
					:erase-on-complete='false'
					:pre-erase-delay='500'
					erase-style='clear'>
				</vue-typer>
				<vue-typer text= "Choose Wisely.."
					v-if="lineComplete && lineNumber > 1"
					@completed='showNextLine'
					:repeat='0'
					class="gametext" 
					:type-delay='60'
					:erase-on-complete='false'
					:pre-erase-delay='500'
					erase-style='clear'>
				</vue-typer>

				<!-- modify to only include 1 vue-typer -->
				<!-- <vue-typer :text= '[story + ", .. you have awoken in the octocat universe.. a real cat-astrophe"]'
					@completed='showNextLine'
					v-if="playername"
					v-bind:story="['first line', 'second line', 'third line']"
					class="gametext" 
					:repeat='0'
					:type-delay='60'
					:erase-on-complete='true'
					:pre-erase-delay='500'
					erase-style='clear'>
				</vue-typer>
				<vue-typer text= "This is your adventure, continue forward how you wish"
					v-if="lineComplete"
					:repeat='0'
					class="gametext" 
					:type-delay='60'
					:erase-on-complete='false'
					:pre-erase-delay='500'
					erase-style='clear'>
				</vue-typer>  -->
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
    lineComplete: false,
    lineNumber: 1,
    //menuVisible: true,
    playername: String,
    story: String
  },
  methods: {
    startGame: function(){
      this.gameRunning = !this.gameRunning;
      this.nameInputVisible = true;
      //this.story[0] = "welcome to the game ya idiot"
      //this.menuVisible = false
      //console.log("started forreal")
    },
    disappear: function(){
      this.nameInputVisible = false
      //this.menuVisible = true
      //start rolling text
    },
    showNextLine: function(){
		this.lineComplete = true;
		this.lineNumber++;
    }
  }

}

</script>

<style src="./Container.css" scoped>
</style>