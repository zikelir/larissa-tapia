<template>
	<div>
		<Header />
		<nuxt />
		<Footer />
	</div>
</template>

<script>
	import Header from '~/components/Header/Header.vue';
	import Footer from '~/components/Footer/Footer.vue';

	export default {
		name: 'DefaultLayout',
		components: {
			Header,
			Footer,
		},
	};
</script>
<style lang="scss">
	#__nuxt {
		margin: 0;
		padding: 0;
		max-width: 1600px;
		height: 100%;
		width: 100%;
		background-color: $white;
	}
</style>
