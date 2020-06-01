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
