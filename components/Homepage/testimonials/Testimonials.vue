<template>
	<div id="depoimentos">
		<h3 id="testimonial-title">
			E os depoimentos de nossos pacientes
		</h3>
		<Hooper
			infinite-scroll
			:wheel-control="false"
		>
			<Slide v-for="(testimonial, index) in testimonialArrays" :key="index" :index="index">
				<div class="testimonial">
					<div class="person">
						<img :src="getImage(testimonial.img)" :alt="testimonial.name">
						<h4 class="name">
							{{ testimonial.name }}
						</h4>
						<h4 class="age">
							{{ testimonial.age }} anos
						</h4>
						<h4 class="job">
							{{ testimonial.job }}
						</h4>
					</div>
					<p class="text">
						{{ testimonial.testimonial }}
					</p>
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
		methods: {
			getImage(filename) {
				return require(`@/assets/images/home-assets/testimonials-photos/${filename}`);
			},
		},
	};
</script>

<style lang="scss" scoped>
	#depoimentos {
		display: flex;
		flex-direction: column;
		font-family: 'Montserrat';
		height: 80vh;

		@media screen and (max-width: 950px) {
			height: 100vh;
		}
	}

	#testimonial-title {
		color: $red-01;
		font-size: 2rem;
		font-weight: 400;
		padding: 1rem;
		margin-top: 2rem;
		text-align: center;

		@media (min-width: 768px) {
			font-size: 2.5em;
		}
	}

	/deep/ .hooper {
		height: calc(88% - 2rem);

		.hooper-list {
			height: 100%;
		}

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
				height: 100%;
				width: 100%;

				@media screen and (max-width: 950px) {
					flex-direction: column;
					background-size: cover;
					background-position: center 40%;
				}

				.person {
					position: relative;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: flex-start;
					width: 40%;
					padding: 2rem 2rem 2rem 4rem;

					@media screen and (max-width: 480px) {
						width: 100%;
						padding: 2rem 2rem;
					}

					@media screen and (min-width: 481px) and (max-width: 950px) {
						width: 100%;
						padding: 2rem 2rem;
					}

					img {
						width: 130px;
						height: 120px;
						border-radius: 50%;
					}

					h4 {
						font-size: 1.3rem;
						font-weight: normal;
						z-index: 1;

						@media screen and (max-width: 480px) {
							font-size: 1rem;
						}
					}

					.name,
					.age,
					.job {
						text-align: center;
					}
				}

				p {
					font-size: 1rem;
					font-weight: normal;
					z-index: 1;
				}

				.text {
					width: 60%;
					padding: 32px 64px 32px 0;
					font-size: 1rem;

					@media screen and (max-width: 950px) {
						font-size: 0.75rem;
						width: 80%;
						padding: 1rem;
						align-self: center;
					}
				}
			}
		}

		.hooper-navigation {
			.hooper-prev,
			.hooper-next {
				background-color: $red-02;
				display: flex;

				@media screen and (max-width: 480px) {
					top: calc(26%);
				}

				@media screen and (min-width: 481px) and (max-width: 950px) {
					top: 36%;
				}

				svg path:last-of-type {
					fill: $white;
				}
			}
		}

		.hooper-pagination {
			background-color: $red-02;
			border-radius: 8px;
			padding: 8px;
			bottom: 5px;

			.hooper-indicators li {
				display: flex;
				align-items: center;
			}
		}
	}
</style>
