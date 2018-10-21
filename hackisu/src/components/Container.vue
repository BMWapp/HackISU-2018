<!-- TODO: 
	Fonts Integration - Nitin
	Game Logic and Content - Justin
	Import correct images - Brevin
	Button Styling/Images
 -->

<template>
	<div class="maincontainer">

		<div id="imgcontainer">
			<transition name="spin">
				<img v-if="gameRunning" alt="Fuck this shit I'm out" v-bind:src='imagePath'>	
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
					:type-delay='10'
					:erase-on-complete='true'
					:pre-erase-delay='500'
					erase-style='clear'>
				</vue-typer>


			</div>
		</div>

		<div class="menu">

			<ul class="mtest">
				<li><input v-if="nameInputVisible" v-model="playername" placeholder="Enter Player Name" @keyup.enter="disappear" id="nameinput"></li>					

				<li><button @click="startGame"  v-if="startMenu"  class="menubtn">Start Game</button></li>		
				<li><button @click="startGame" v-if="startMenu" class="menubtn">Start Game But It Works</button></li>
					
				<li><button v-if="mtnOrJungle" @click="clickChoiceButton('mountains')" class="menubtn">Mountains</button></li>
				<li><button v-if="mtnOrJungle" @click="clickChoiceButton('jungle')" class="menubtn">Jungle</button></li>

				<li><button v-if="knivesOrCrossbow" @click="clickChoiceButton('knives')" class="menubtn">Throwing Knives</button></li>
				<li><button v-if="knivesOrCrossbow" @click="clickChoiceButton('crossbow')" class="menubtn">Crossbow</button></li>

				<li><button v-if="minotaurOrDragon" @click="clickChoiceButton('minotaur')" class="menubtn">Minotaur</button></li>
				<li><button v-if="minotaurOrDragon" @click="clickChoiceButton('dragon')" class="menubtn">Dragon</button></li>

				<li><button v-if="castleOrTemple" @click="clickChoiceButton('castle')" class="menubtn">Castle</button></li>
				<li><button v-if="castleOrTemple" @click="clickChoiceButton('temple')" class="menubtn">Temple</button></li>

				<li><button v-if="investigateOrHide" @click="clickChoiceButton('investigate')" class="menubtn">Investigate</button></li>
				<li><button v-if="investigateOrHide" @click="clickChoiceButton('hide')" class="menubtn">Hide</button></li>

				<li><button v-if="fightOrRun" @click="clickChoiceButton('fight')" class="menubtn">Fight</button></li>
				<li><button v-if="fightOrRun" @click="clickChoiceButton('run')" class="menubtn">Run</button></li>

				<li><button v-if="leftOrRight" @click="clickChoiceButton('left')" class="menubtn">Left</button></li>
				<li><button v-if="leftOrRight" @click="clickChoiceButton('right')" class="menubtn">Right</button></li>
					
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
        story: [
			'You have awoken in the Octocat universe.. a real cat-astrophe',
			'This is your adventure, continue forward how you wish', 
			'You have been given a map with four locations',
			'Choose Wisely!', //CHOICE
			//continues as if user chose mountains, skip to index __ for jungle
			'You trek along the path and up the mountain, slowly',
			'You stumble upon some items!',
			'There are throwing knives and a crossbow..',
			//stop loop and store choice
			'You only have room for one..', //CHOICE
			'You walk along the trail, through the mountain',
			'There are two tunnels to exit the mountain!',
			'One has a minotaur, the other an ice-breathing dragon',
			'Pick your poison..', //CHOICE
			//continues for minotaur (knives -> crossbow), skip to index __ for dragon
			'You use your throwing knives to defeat the minautar!',
			//crossbow
			'The crossbow is useless against the minautar..',
			'You died..', //14
			'You use your crossbow to defeat the dragon!',
			//if throwing knives and minautar, survive
			//if crossbow and dragon, survive 
			'You\'ve come across another fork in the road',
			'Will you contine onto the castle or the temple?', //CHOICE
			//continues as if castle, jump to __ for temple
			'You walk into the castle and see a sword..', //18
			'Curious, you creep toward the sword to grab it',
			'There\'s a mysterious noise inside the castle..',
			'Do you investigate or hide?', //CHOICE
			'You walk closer to the noise; it\'s coming out of a barrell..', //22
			'Suddenly, a jester jumps out at you!!!',
			'Jester: Hello, I haven\'t seen anyone in years..',
			'Would you like to hear a joke?',
			'You say yes, who doesn\'t like a good joke?',
			//say a random joke
			// JUNGLE BEGINS
			'You cut through dense foliage in the jungle..', //27
			'You come across an angry jaguar!',
			'Do you fight or run?', //CHOICE
			'Running was the only survival option, good choice',
			'You\'re so out of breath, so you stop at a tree stump',
			'As you walk closer, you see that it is actually a chest!',
			'Inside is a blow dart!',
			//TEMPLE BEGINS
			'You walk into an abandoned temple..', //34
			'Ancient drawings detail the orgins of the world',
			'On the path, you find an endless labyrinth',
			'To start, you can go left or right..', //CHOICE
			//if left
			'You notice several holes along the wall..', //38
			'It seems to be some sort of trigger mechanism',
			'You can use your weapons to test out the traps..', //mtns -> (a,a) -> temple -> left
			'You launch your weapon down the corridor',
			'It hits a stone wall in the distance..',
			'Rapid fire arrows shoot out of the holes!',
			'You can\'t escape in time and die' ,
			//if right
			'The path is dark and ominous..', //45
			'You hear hissing noises in the distance',
			'Hundreds of snakes block the path!',
			'You need to use a weapon to get them to move..',
			'Choose the weapon you want to try..', //WPN CHOICE
			//blowdart or knives
			'You scared them away!', //50
			//crossbow
			'The snakes slowly overwhelm you..',
			'The crossbow was ineffective. You Died'


			
			

		],
		jokes: [],
		imgName: [
			'@/assets/PathChoice1.png',//0
			'@/assets/MountainWepChoice.png',//1
			'@/assets/MountainPathChoice.png',//2
			'@/assets/Minotaur.png',//3
			'@/assets/Dragon.png',//4
			'@/assets/Jaguar.png',//5
			'@/assets/PathChoice2.png',//6
			'@/assets/ThroneRoom.png',//7
			'@/assets/TempleWall.png',//8
			'@/assets/GameOver.png'//9
		],

		//imgChoice: 0,
		//imagePath: this.imgName[this.imgChoice],
		weapons: ['blowdart'],
        startMenu: true,
        mtnOrJungle: false,
        knivesOrCrossbow: false,
        minotaurOrDragon: false,
        castleOrTemple: false,
        investigateOrHide: false,
        fightOrRun: false,
        leftOrRight: false,
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
			//this.changeBackground();
			this.showFirstChoiceLayout(1);
			//if waiting for input, checkc if either button pressed
			this.watingForInput = true;
			//must wait until option chosen
			//not continuously checking conditions after exiting once

		}
		else if(this.lineNumber == 7){
			//this.changeBackground();
			this.showFirstChoiceLayout(2);
			//if waiting for input, checkc if either button pressed
			this.watingForInput = true;

		}
		else if(this.lineNumber == 11){
			//this.changeBackground();
			this.showFirstChoiceLayout(3);
			//if waiting for input, checkc if either button pressed
			this.watingForInput = true;

		}
		else if(this.lineNumber == 17){
			//this.changeBackground();
			this.showFirstChoiceLayout(4);
			this.watingForInput = true;
		}
		else if(this.lineNumber == 21){
			this.changeBackground();
			this.showFirstChoiceLayout(5);
			this.watingForInput = true;
		}
		else if(this.lineNumber == 29){
			this.changeBackground();
			this.showFirstChoiceLayout(6);
			this.watingForInput = true;
		}
		else if(this.lineNumber == 36){
			this.changeBackground();
			this.showFirstChoiceLayout(7);
			this.watingForInput = true;
		}

		else{
			this.lineNumber++;
		}

    },
	changeBackground: function(){
		//this.imagePath = this.imgName[this.imgChoice];
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
		else if(choice == 3){
			this.knivesOrCrossbow = false;
			this.minotaurOrDragon = true;
		}
		else if(choice == 4){
			this.minotaurOrDragon = false;
			this.castleOrTemple = true;
		}
		else if(choice == 5){
			this.castleOrTemple = false;
			this.investigateOrHide = true;
		}
		else if(choice == 6){
			this.mtnOrJungle = false;
			this.fightOrRun = true;
		}
		else if(choice == 7){
			this.fightOrRun = false;
			this.leftOrRight = true;
		}
    },
    //WHEN DONE: change all die events to line 99 (or last)
    clickChoiceButton: function(choice){
		this.choice1 = choice;
		//console.log(this.choice1);
		this.watingForInput = false;
		if(this.choice1 == 'mountains'){
			this.imgChoice = 1;
			this.lineNumber = 4;
			this.changeBackground();
		}
		else if(this.choice1 == 'jungle'){
			this.imgChoice == 5;

			this.lineNumber = 27; //update with story

			this.changeBackground();

		}

		else if(this.choice1 == 'knives'){
			this.weapons += 'knives';
			this.lineNumber = 8;
			this.imgChoice = 2;
			this.changeBackground();
		}
		else if(this.choice1 == 'crossbow'){
			this.weapons += 'crossbow';
			this.lineNumber = 8;
			this.imgChoice = 2;
			this.changeBackground();
		}

		else if(this.choice1 == 'minotaur'){
			if(this.hasKnives){
				this.lineNumber = 12;
			}
			else{
				this.lineNumber = 13;
			}
		}
		else if(this.choice1 == 'dragon'){
			this.lineNumber = 12;
			if(this.hasKnives){
				//die
				this.lineNumber = 14;
			}
			else{
				//live
				this.lineNumber = 15;
			}
		}
		else if(this.choice1 == 'castle'){
			this.lineNumber = 18;
		}
		else if(this.choice1 == 'temple'){
			this.lineNumber = 1; //change when we write the story
		}

		else if(this.choice1 == 'investigate'){
			this.lineNumber = 22;
		}
		else if(this.choice1 == 'hide'){
			this.lineNumber = 1; //update later with story
		}

		else if(this.choice1 == 'fight'){
			//die
			this.lineNumber = 14;

		}
		else if(this.choice1 == 'run'){
			//live
			this.lineNumber = 30; 
		}

		else if(this.choice1 == 'left'){
			//die
			this.lineNumber = 38;

		}
		else if(this.choice1 == 'right'){
			//live
			this.lineNumber = 45; 
		}


    }
  }

}

</script>

<style src="./Container.css" scoped>
</style>