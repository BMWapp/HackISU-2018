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
				<img v-if="gameRunning" alt="Image Not Found" v-bind:src='imagePath'>	
			</transition>

		</div>

		<div class="textarea">
			<div class="gametextcontainer">
				<vue-typer 
					
					v-bind:text="story[this.lineNumber]"
					@completed='showNextLine'
					v-if="playername"
					class="gametext" 
					:repeat='0'
					:type-delay='60'
					:erase-on-complete='true'
					:pre-erase-delay='500'
					erase-style='clear'>
				</vue-typer>


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
    //menuVisible: true,
    playername: String

  },
  data: function () {
    return {
        lineNumber: 0,
        imagePath: '@/assets/OctocatGif.gif',
        story: [
			'You have awoken in the octocat universe.. a real cat-astrophe',
			'This is your adventure, continue forward how you wish',
			'You have been given a map with four locations',
			'Choose Wisely!'

        ],
    }
  },
  methods: {
    startGame: function(){
      this.gameRunning = !this.gameRunning;
      this.nameInputVisible = true;
      //this.story.intro = 'You have awoken in the octocat universe.. a real cat-astrophe'
      //this.story.intropt2 = 'This is your adventure, continue forward how you wish'
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
		if(this.lineNumber == 4){
			alert("trying to change background");
			this.changeBackground();
		}
    },
	changeBackground: function(){
		//this.imagePath = '@/assets/PathChoice1.png'
    }
  }

}

</script>

<style src="./Container.css" scoped>
</style>