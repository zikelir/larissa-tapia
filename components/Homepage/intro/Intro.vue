<template>
	<div id="home-welcome">
		<!-- <div class="welcome-name">
			Larissa Tapia
		</div> -->
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
					easing: 'easeOutExpo',
				})
				.add({
					targets,
					easing: 'easeOutExpo',
				});
		},
	};
</script>

<style lang="scss">
	#home-welcome {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		box-sizing: border-box;
		background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
			url('~assets/images/home-assets/dra-larissa-bg.png');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		text-align: center;
		color: $white;
		padding: 80px 40px 40px;
		min-height: 100vh;
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
		position: absolute;
		bottom: 40px;
		box-sizing: border-box;
		background-image: url('~assets/images/home-assets/next-arrow-white.svg');
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center;
		width: 4em;
		height: 4em;
		cursor: pointer;
	}
</style>
