<template>
	<div id="home-testimonials">
		<h3 id="testimonial-title">
			E os depoimentos de nossos pacientes
		</h3>
		<Hooper
			infinite-scroll
			:play-speed="2000"
		>
			<Slide v-for="(testimonial, index) in testimonialArrays" :key="index" :index="index">
				<div class="testimonial">
					<img :alt="testimonial.name" :src="require(`@/assets/images/home-assets/testimonials-photos/${testimonial.img}`)">
					<h4>
						{{ testimonial.name }}, {{ testimonial.age }}
					</h4>
					<p>{{ testimonial.job }}</p>
					<p>{{ testimonial.testimonial }}</p>
				</div>
			</Slide>

			<HooperNavigation slot="hooper-addons" />
			<HooperPagination slot="hooper-addons" />
		</Hooper>
	</div>
</template>

<script>
	import {
		Hooper,
		Slide,
		Navigation as HooperNavigation,
		Pagination as HooperPagination,
	} from 'hooper';
	import 'hooper/dist/hooper.css';
	import testimonialArrays from './allTestimonials.js';

	export default {
		name: 'Testimonial',
		components: {
			Hooper,
			Slide,
			HooperNavigation,
			HooperPagination,
		},
		data() {
			return {
				testimonialArrays,
			};
		},
	};
</script>

<style lang="scss" scoped>
	#home-testimonials {
		display: flex;
		flex-direction: column;
		font-family: 'Montserrat';
		height: 70vh;
	}

	#testimonial-title {
		color: $red-01;
		font-size: 1.5rem;
		padding: 1rem;
		margin-bottom: 2rem;
		text-align: center;

		@media (min-width: 768px) {
			font-size: 2.5em;
		}
	}

	/deep/ .hooper {
		margin: auto 0;
		height: 60%;

		.hooper-slide {
			display: flex;
			justify-content: center;
			align-items: center;
			transition: background-color 0.3s ease-in;

			&.is-active {
				border: none;
			}

			.testimonial {
				display: flex;
				flex-direction: column;
				height: 100%;
				max-width: 75%;
				align-items: center;
				justify-content: flex-start;

				img {
					width: 80px;
					height: 80px;
					border-radius: 50%;

					@media screen and (min-width: 481px) {
						width: 140px;
						height: 140px;
					}
				}

				h4 {
					font-size: 1.5rem;
					font-weight: normal;
				}

				p {
					font-size: 1rem;
					font-weight: normal;
					margin: 8px 0;

					&:last-of-type {
						font-size: 0.85rem;
					}
				}
			}
		}

		.hooper-pagination {
			background-color: $red-02;
			border-radius: 8px;
			padding: 8px;
			bottom: -40px;

			.hooper-indicators li {
				display: flex;
				align-items: center;
			}
		}
	}
</style>
