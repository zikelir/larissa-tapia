<template>
	<div id="app">
		<Homepage />
	</div>
</template>

<script>
	import Homepage from '~/components/Homepage/Homepage.vue';

	export default {
		name: 'IndexPage',
		components: {
			Homepage,
		},
	};
</script>

<style lang="scss">
	#app {
		margin: 0;
		padding: 0;
		max-width: 1600px;
		height: 100%;
		width: 100%;
		background-color: $white;
	}
</style>
