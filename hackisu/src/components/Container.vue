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
					<button @click="startGame"  v-if="startMenu"  class="menubtn">Start Game</button>
				</li>
				<li>
					<button @click="startGame" v-if="startMenu" class="menubtn">Start Game But It Works</button>
				</li>

				<li>
					<button v-if="mtnOrJungle" @click="clickChoiceButton('mountains')" class="menubtn">Mountains</button>
				</li>
				<li >
					<button v-if="mtnOrJungle" @click="clickChoiceButton('jungle')" class="menubtn">Jungle</button>
				</li>

				<li>
					<button v-if="knivesOrCrossbow" @click="clickChoiceButton('knives')" class="menubtn">Throwing Knives</button>
				</li>
				<li >
					<button v-if="knivesOrCrossbow" @click="clickChoiceButton('crossbow')" class="menubtn">Crossbow</button>
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
			'Choose Wisely!',
			//continues as if user chose mountains, skip to index __ for jungle
			'You trek along the path and up the mountain, slowly',
			'You stumble upon some items!',
			'There is a rogue suit with throwing knives and a crossbow..',
			//stop loop and store choice
			'You only have room for one..',
			'You walk along the trail, through the mountain',
			'There are two tunnels to exit the mountain!',
			'One has a minotaur, the other an ice-breathing dragon',
			//continues for minotaur, skip to index __ for dragon
			//if throwing knives and minautar, survive
			//if crossbow and dragon, survive 
			
			

        ],
        startMenu: true,
        mtnOrJungle: false,
        knivesOrCrossbow: false,
        choice1: '',
        watingForInput: false,
        hasKnives: false
    }
  },
  methods: {
    startGame: function(){
      this.gameRunning = !this.gameRunning;
      this.nameInputVisible = true;

    },
    disappear: function(){
      this.nameInputVisible = false
      //this.menuVisible = true
      //start rolling text
    },
    showNextLine: function(){
		this.lineComplete = true;
		if(this.lineNumber == 3){ //index of first choice
			this.changeBackground();
			this.showFirstChoiceLayout(1);
			//if waiting for input, checkc if either button pressed
			this.watingForInput = true;
			//must wait until option chosen
			//not continuously checking conditions after exiting once

		}
		else if(this.lineNumber == 7){
			this.changeBackground();
			this.showFirstChoiceLayout(2);
			//if waiting for input, checkc if either button pressed
			this.watingForInput = true;
			//must wait until option chosen
			//not continuously checking conditions after exiting once

		
		}
		else{
			this.lineNumber++;
		}

    },
	changeBackground: function(){
		//this.imagePath = '@/assets/PathChoice1.png'
    },
    showFirstChoiceLayout: function(choice){
		//change buttons
		if(choice == 1){
			this.startMenu = false;
			this.mtnOrJungle = true;
		}
		else if(choice == 2){
			this.mtnOrJungle = false;
			this.knivesOrCrossbow = true;
		}
    },

    clickChoiceButton: function(choice){
		this.choice1 = choice;
		console.log(this.choice1);
		this.watingForInput = false;
		if(this.choice1 == 'mountains'){
			this.lineNumber = 4;
		}
		else if(this.choice1 == 'jungle'){
			this.lineNumber = 1;
		}
		if(this.choice1 == 'knives'){
			this.hasKnives = true;
			this.lineNumber = 8;
		}
		else if(this.choice1 == 'crossbow'){
			this.lineNumber = 8;
		}
    }
  }

}

</script>

<style src="./Container.css" scoped>
</style>