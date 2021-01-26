<template>
	<div id="home-welcome">
		<Hooper
			infinite-scroll
			:wheel-control="false"
		>
			<Slide>
				<div id="welcome-phrase" class="welcome-phrase">
					<span>"Os dentes mudam o sorriso, o sorriso muda a face. A face muda a expressão, a expressão muda a vida!"</span>
				</div>
			</Slide>

			<Slide>
				<div id="consultorio1" class="welcome-phrase" />
			</Slide>

			<Slide>
				<div id="consultorio2" class="welcome-phrase" />
			</Slide>

			<HooperNavigation slot="hooper-addons" />
		</Hooper>
		<transition name="bounce" enter-active-class="bounceUp" leave-active-class="bounceDown">
			<div
				id="tratamentos"
				v-scroll-to="'#tratamentos'"
				v-anime="{ duration: 2000, loop: true }"
				class="welcome-next-arrow"
				href="#home-treatments"
			/>
		</transition>
	</div>
</template>

<script>
	import {
		Hooper,
		Slide,
		Navigation as HooperNavigation,
	} from 'hooper';
	import 'hooper/dist/hooper.css';

	export default {
		name: 'Intro',
		components: {
			Hooper,
			Slide,
			HooperNavigation,
		},
		mounted() {
			const targets = this.$el;
			this.$anime
				.timeline()
				.add({
					targets,
					easing: 'easeOutExpo',
				})
				.add({
					targets,
					easing: 'easeOutExpo',
				});
		},
	};
</script>

<style lang="scss" scoped>
	#home-welcome {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		box-sizing: border-box;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		text-align: center;
		color: $white;
		padding: 80px 40px 40px;
		min-height: 100vh;
	}

	.welcome-phrase {
		height: 100%;
		width: 100%;
		margin-top: 1em;
		font-size: 1.5em;
		padding: 0 10%;
		font-family: 'Montserrat';
		font-weight: 300;
		line-height: 1.2;
		background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
			url('~assets/images/home-assets/dra-larissa-bg.png') no-repeat center/cover;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	#consultorio1 {
		background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
			url('~assets/images/home-assets/consultorio1.jpeg') no-repeat center/cover;
	}

	#consultorio2 {
		background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
			url('~assets/images/home-assets/consultorio2.jpeg') no-repeat center/cover;
	}

	.welcome-next-arrow {
		position: absolute;
		bottom: 80px;
		box-sizing: border-box;
		background-image: url('~assets/images/home-assets/next-arrow-white.svg');
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center;
		width: 4em;
		height: 4em;
		cursor: pointer;
	}

	/deep/ .hooper {
		flex: 1;

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
	}
</style>
