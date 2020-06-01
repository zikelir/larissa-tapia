<template>
	<div id="home-testimonials">
		<div id="testimonial-title">
			E os depoimentos de nossos pacientes
		</div>
		<div id="testimonial-list">
			<div
				v-for="(item, index) in testmonialsArray"
				:key="item.id"
				:item="item"
				:index="index"
			>
				<TestimonialElement :testimonial="item" />
			</div>
			<!-- <TestimonialElement /> -->
		</div>
		<div id="testimonial-divider">
			<div class="testimonial-next-arrow" />
		</div>
	</div>
</template>

<script>
	import TestimonialElement from './TestimonialElement.vue';
	import testimonialArrays from './allTestimonials.js';

	export default {
		name: 'Testimonial',
		components: {
			TestimonialElement,
		},
		data() {
			return {
				testmonialsArray: testimonialArrays,
			};
		},
	};
</script>

<style lang="scss">
	#home-testimonials {
		font-family: 'Montserrat';
	}

	/* mobile */
	@media (max-width: 767px) {
		#testimonial-title {
			box-sizing: border-box;
			color: $red-01;
			font-size: 2em;
			display: flex;
			justify-content: center;
			padding: 1em 2em;
			text-align: center;
		}

		#testimonial-list {
			box-sizing: border-box;
			display: flex;
			flex-direction: row;
			min-width: 100%;
			flex-wrap: nowrap;
			flex: 1;
			flex-shrink: initial;
			overflow: auto;
			white-space: nowrap;
		}

		#testimonial-divider {
			width: 100%;
			justify-content: center;
			align-items: center;
			display: flex;
		}

		.testimonial-next-arrow {
			box-sizing: border-box;
			background-image: url('~assets/images/home-assets/next-arrow-red.svg');
			background-size: contain;
			background-repeat: no-repeat;
			background-position: center;
			content: '';
			width: 4em;
			height: 4em;
		}
	}

	/* tablet */
	@media (min-width: 768px) {
		#testimonial-title {
			box-sizing: border-box;
			color: $red-01;
			font-size: 2.5em;
			display: flex;
			justify-content: center;
			padding: 1em 2em;
			text-align: center;
		}

		#testimonial-list {
			box-sizing: border-box;
			display: flex;
			flex-direction: row;
			min-width: 100%;
			flex-wrap: nowrap;
			flex: 1;
			flex-shrink: initial;
			overflow: auto;
			white-space: nowrap;
			justify-content: space-between;
		}

		#testimonial-divider {
			width: 100%;
			justify-content: center;
			align-items: center;
			display: flex;
		}

		.testimonial-next-arrow {
			box-sizing: border-box;
			background-image: url('~assets/images/home-assets/next-arrow-red.svg');
			background-size: contain;
			background-repeat: no-repeat;
			background-position: center;
			content: '';
			width: 4em;
			height: 4em;
		}
	}

	/* web */
	@media (min-width: 1440px) {
		#testimonial-title {
			box-sizing: border-box;
			color: $red-01;
			font-size: 3.5em;
			display: flex;
			justify-content: center;
			padding: 1em 2em;
			text-align: center;
		}

		#testimonial-list {
			box-sizing: border-box;
			display: flex;
			flex-direction: row;
			min-width: 100%;
			flex-wrap: wrap;
			justify-content: space-between;
		}

		#testimonial-divider {
			width: 100%;
			justify-content: center;
			align-items: center;
			display: flex;
		}

		.testimonial-next-arrow {
			box-sizing: border-box;
			background-image: url('~assets/images/home-assets/next-arrow-red.svg');
			background-size: contain;
			background-repeat: no-repeat;
			background-position: center;
			content: '';
			width: 6em;
			height: 6em;
			margin-bottom: 2em;
		}
	}
</style>
