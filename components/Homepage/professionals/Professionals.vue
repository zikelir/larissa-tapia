<template>
	<section id="equipe" class="professionals">
		<h3 class="title">
			Equipe
		</h3>
		<div class="professionals-list">
			<ul class="tabs">
				<li
					class="tab"
					:class="{ active: selectedTab === 'larissa' }"
					tabindex="0"
					@click="selectedTab = 'larissa'"
					@keyup.enter="selectedTab = 'larissa'"
				>
					Dra. Larissa Rodrigues Tapia
				</li>
				<li
					class="tab"
					:class="{ active: selectedTab === 'gabriela' }"
					tabindex="0"
					@click="selectedTab = 'gabriela'"
					@keyup.enter="selectedTab = 'gabriela'"
				>
					Dra. Gabriela Fatarelli
				</li>
				<li
					class="tab"
					:class="{ active: selectedTab === 'christian' }"
					tabindex="0"
					@click="selectedTab = 'christian'"
					@keyup.enter="selectedTab = 'christian'"
				>
					Dr. Christian José Macedo
				</li>
			</ul>
			<div class="content">
				<img :src="require(`~/assets/${content.imgSrc}`)" :alt="content.name">
				<p class="text">
					<span v-for="(line, index) in content.text" :key="index" class="line">
						{{ line }}
					</span>
				</p>
			</div>
		</div>
	</section>
</template>

<script>
	import professionalsData from './professionals';

	export default {
		name: 'Professionals',
		data() {
			return {
				selectedTab: 'larissa',
			};
		},
		computed: {
			content() {
				return professionalsData[this.selectedTab];
			},
		},
	};
</script>

<style lang="scss" scoped>
	.professionals {
		display: flex;
		flex-direction: column;
		height: auto;

		@media screen and (min-width: 950px) {
			// height: 80vh;
		}

		.title {
			color: $red-01;
			font-size: 1.5rem;
			padding: 1rem;
			margin-bottom: 2rem;
			text-align: center;
			height: 10%;
			width: 100%;
			text-align: center;

			@media (min-width: 768px) {
				font-size: 2.5em;
			}
		}

		&-list {
			display: flex;
			flex-direction: column;
			height: calc(90% - 2rem);

			.tabs {
				display: flex;
				// background-color: $light-red-02;
				border-top-left-radius: 8px;
				// border-top: 4px solid $light-red-03;

				@media screen and (max-width: 680px) {
					overflow-x: auto;
				}

				.tab {
					display: flex;
					align-items: center;
					box-sizing: border-box;
					padding: 16px;
					font-size: 16px;
					display: flex;
					border: 1px solid $light-red-03;
					background-color: $white;
					color: $red-01;
					cursor: pointer;
					outline: none;
					border-top: 4px solid $light-red-03;
					min-width: fit-content;
					// max-height: 40px;

					@media screen and (min-width: 481px) {
						font-size: rfs(20px);
					}

					&:hover,
					&:focus {
						border-top-width: 4px;
						border-color: $light-red-03;
						// font-weight: bold;
					}

					&.active {
						background-color: transparent;
						border-top-width: 4px;
						border-color: $light-red-03;
						// font-weight: bold;
					}

					&:first-of-type {
						border-top-left-radius: 8px;
					}

					&:last-of-type {
						border-top-right-radius: 8px;
					}
				}
			}

			.content {
				display: flex;
				flex-direction: column;
				flex: 1;
				box-sizing: border-box;

				@media screen and (min-width: 651px) {
					img {
						width: 100%;
						height: 400px;
					}
				}

				@media screen and (min-width: 950px) {
					flex-direction: row;
				}

				@media screen and (min-width: 950px) {
					img {
						// width: unset;
						width: 100%;
						height: 600px;
						object-fit: cover;
						@media screen and (min-width: 900px) {
							width: 40%;
							height: 680px;
						}
					}
				}

				.text {
					display: flex;
					flex-direction: column;
					padding: rfs(24px);
					color: $red-01;
					font-size: 16px;
					width: 100%;
					@media screen and (min-width: 769px) {
						font-size: rfs(16px);
					}

					@media screen and (min-width: 900px) {
						font-size: rfs(20px);
						width: 60%;
						border-top: 2px solid $light-red-02;
					}
				}
			}
		}
	}
</style>
