<template>
	<div id="contacts-welcome">
		<div id="contacts-call">
			<p class="schedule-today">
				Agende hoje a avaliação!
			</p>
			<div class="contact-numbers">
				<div class="contact-number">
					<div id="contact-zap" class="contact-icon" />
					<span>+55 (19) 99679-1213</span>
				</div>
				<div class="contact-number">
					<div id="contact-phone" class="contact-icon" />
					<span>+55 (19) 3213-1936</span>
				</div>
			</div>
			<div class="imagens-consultorio">
				<img :src="require(`~/assets/images/home-assets/address.png`)" :alt="'address image'" class="imagem-consultorio">
				<img :src="require(`~/assets/images/home-assets/consultorio-entrada.jpeg`)" :alt="'entrada consultorio'" class="imagem-consultorio">
			</div>
		</div>
		<div id="location">
			<iframe
				id="home-map"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.552538937914!2d-47.05034218448813!3d-22.892982243135226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8cf5a7a649ecd%3A0x2791c520c4d0a98d!2sAv.%20Jo%C3%A3o%20Mendes%20J%C3%BAnior%2C%20180%20-%20Cambu%C3%AD%2C%20Campinas%20-%20SP%2C%2013024-030!5e0!3m2!1spt-BR!2sbr!4v1593390974942!5m2!1spt-BR!2sbr"
				frameborder="0"
				style="border: 0;"
				allowfullscreen=""
				aria-hidden="false"
				tabindex="0"
			/>
			<p id="map-address">
				Avenida João Mendes Júnior, 180 Sala 2. Cambuí, Campinas - SP. CEP: 13024-030
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Contacts',
		components: {},
	};
</script>

<style lang="scss">
	#contacts-welcome {
		background-color: $red-02;
	}

	#contacts-welcome {
		display: flex;
		flex-direction: column;
		background-image: url('~assets/images/home-assets/contact-bg.svg');
		background-repeat: no-repeat;

		@media (min-width: 768px) {
			flex-direction: row;
		}
	}

	#contacts-call,
	#location {
		@media (min-width: 768px) {
			width: 50%;
		}
	}

	.schedule-today {
		font-size: 1.5rem;
		padding: 1.5rem 0 1rem;
		text-align: center;
		color: $white;

		@media (min-width: 768px) {
			font-size: 2.25rem;
		}
	}

	.contact-icon {
		width: 1.5rem;
		height: 1.5rem;
		background-repeat: no-repeat;
		background-size: cover;
		margin-right: 0.5rem;

		@media (min-width: 768px) {
			width: 1.875rem;
			height: 1.875rem;
		}
	}

	#contact-zap {
		background-image: url('~assets/images/home-assets/zap-white.svg');
	}

	#contact-phone {
		background-image: url('~assets/images/home-assets/phone-white.svg');
	}

	.contact-numbers {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		@media (min-width: 768px) {
			font-size: 1.5rem;
		}

		.contact-number {
			display: flex;
			color: $white;

			&:first-child {
				margin-bottom: 0.5rem;
			}
		}
	}

	.imagens-consultorio {
		display: flex;
		flex-direction: column;
		width: 100%;
		padding: 1rem;

		img {
			max-height: 400px;
		}

		@media (min-width: 768px) {
			flex-direction: row;

			img {
				width: 50%;
			}
		}
	}

	#location {
		iframe {
			width: 100%;
			height: 320px;
			padding: 1rem;
		}

		#map-address {
			text-align: center;
			color: $white;
			font-size: 1.5rem;
		}
	}
</style>
