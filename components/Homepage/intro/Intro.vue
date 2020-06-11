<template>
	<div>
		<div id="home-welcome">
			<div class="welcome-name">
				Larissa Tapia
			</div>
			<!-- <div class="welcome-spec">Especialista em Dentística</div> -->
			<div class="welcome-phrase">
				"Os dentes mudam o sorriso, o sorriso muda a face. A face muda a expressão, a expressão muda a vida!"
			</div>
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
	</div>
</template>

<script>
	export default {
		name: 'Intro',
		components: {},
		mounted() {
			const targets = this.$el;
			this.$anime
				.timeline()
				.add({
					targets,
					//   translateY: 250,
					easing: 'easeOutExpo',
				})
				.add({
					targets,
					//   translateY: 250,
					easing: 'easeOutExpo',
				});
		},
	};
</script>

<style lang="scss">
	.home-container {
		font-family: 'Montserrat';
	}

	/* mobile */
	@media (max-width: 767px) {
		#home-welcome {
			box-sizing: border-box;
			background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
				url('~assets/images/home-assets/dra-larissa-bg.png');
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center;
			max-width: 100%;
			height: 667px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			text-align: center;
			color: $white;
			padding: 2.5em;
		}

		.welcome-name {
			margin-top: 2.5em;
			font-size: 3em;
			font-family: 'Great Vibes';
		}

		.welcome-spec {
			margin-top: 0.5em;
			font-size: 1.5em;
			padding: 0 25%;
			font-family: 'Montserrat';
			font-weight: 400;
			letter-spacing: 1.5px;
		}

		.welcome-phrase {
			margin-top: 1em;
			font-size: 1.5em;
			padding: 0 10%;
			font-family: 'Montserrat';
			font-weight: 300;
			line-height: 1.2;
		}

		.welcome-next-arrow {
			box-sizing: border-box;
			background-image: url('~assets/images/home-assets/next-arrow-white.svg');
			background-size: contain;
			background-repeat: no-repeat;
			background-position: center;
			content: '';
			width: 4em;
			height: 4em;
			margin-top: 4em;
		}
	}

	/* tablet */
	@media (min-width: 768px) {
		#home-welcome {
			box-sizing: border-box;
			background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
				url('~assets/images/home-assets/dra-larissa-bg.png');
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center;
			max-width: 100%;
			height: 800px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			text-align: center;
			color: $white;
			padding: 2.5em;
		}

		.welcome-name {
			margin-top: 4em;
			font-size: 3em;
			font-family: 'Great Vibes';
		}

		.welcome-spec {
			margin-top: 0.5em;
			font-size: 1em;
			padding: 0 25%;
			font-family: 'Montserrat';
			font-weight: 400;
			letter-spacing: 1.5px;
		}

		.welcome-phrase {
			margin-top: 1em;
			font-size: 1.5em;
			width: 25%;
			font-family: 'Montserrat';
			font-weight: 300;
			line-height: 1.2;
		}

		.welcome-next-arrow {
			box-sizing: border-box;
			background-image: url('~assets/images/home-assets/next-arrow-white.svg');
			background-size: contain;
			background-repeat: no-repeat;
			background-position: center;
			content: '';
			width: 4em;
			height: 4em;
			margin-top: 4em;
		}
	}

	/* web */
	@media (min-width: 1440px) {
		#home-welcome {
			box-sizing: border-box;
			background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
				url('~assets/images/home-assets/dra-larissa-bg.png');
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center;
			max-width: 100%;
			height: 960px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			text-align: center;
			color: $white;
			padding: 2.5em;
		}

		.welcome-name {
			margin-top: 4em;
			font-size: 6em;
			font-family: 'Great Vibes';
		}

		.welcome-spec {
			margin-top: 0.5em;
			font-size: 1.5em;
			font-family: 'Montserrat';
			font-weight: 400;
			letter-spacing: 1.5px;
		}

		.welcome-phrase {
			font-size: 2em;
			width: 25%;
			font-family: 'Montserrat';
			font-weight: 300;
			line-height: 1.2;
		}

		.welcome-next-arrow {
			box-sizing: border-box;
			background-image: url('~assets/images/home-assets/next-arrow-white.svg');
			background-size: contain;
			background-repeat: no-repeat;
			background-position: center;
			content: '';
			width: 6em;
			height: 6em;
			margin-top: 3em;
		}
	}
</style>
