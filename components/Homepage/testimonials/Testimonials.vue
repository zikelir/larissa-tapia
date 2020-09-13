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
						"{{ testimonial.testimonial }}"
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
		min-height: 100vh;

		@media screen and (min-width: 1024px) {
			min-height: 75vh;
		}
	}

	#testimonial-title {
		color: $red-01;
		font-size: 2rem;
		font-weight: 400;
		padding: 1.5em 0 1em 0;
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
					width: 100%;
					padding: 2rem;

					@media screen and (min-width: 951px) {
						width: 30%;
					}

					img {
						width: 10rem;
						height: 10rem;
						border-radius: 50%;

						@media screen and (min-width: 768px) {
							width: 13rem;
							height: 13rem;
						}
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

				.name {
					margin-top: 1rem;
				}
			}
		}

		.hooper-navigation {
			.hooper-prev,
			.hooper-next {
				background-color: $red-02;
				display: flex;
				width: 35px;
				height: 35px;

				@media screen and (max-width: 480px) {
					top: calc(26%);
				}

				@media screen and (min-width: 481px) and (max-width: 950px) {
					top: 36%;
				}

				@media screen and (min-width: 768px) {
					width: 45px;
					height: 45px;
				}

				svg {
					width: 23px;
					height: 23px;
					position: absolute;
					top: 0;
					left: 0;
					transform: translate(25%, 25%);

					@media screen and (min-width: 768px) {
						width: 30px;
						height: 30px;
					}

					path:last-of-type {
						fill: $white;
					}
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
