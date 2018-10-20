<template>

	<div class="maincontainer">
		<p v-if="gameRunning">The game has been started</p>

	</div>
	
</template>


<script>
import MainComp from './MainComp.vue'
	
export default {
  name: 'Container',
  props: {
    
  }

}

</script>

<style src="./Container.css" scoped>
</style>