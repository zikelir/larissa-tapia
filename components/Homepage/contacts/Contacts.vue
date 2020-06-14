<template>
	<div>
		<div id="contacts-welcome">
			<div id="contacts-call">
				<div class="schedule-today">
					Agende hoje a avaliação!
				</div>
				<div class="contact-numbers">
					<div class="contact-number">
						<div id="contact-zap" />+55 (19) 97654-6644
					</div>
					<div class="contact-number">
						<div id="contact-phone" />+55 (19) 3213-1936
					</div>
				</div>
			</div>
			<div id="location">
				<div>
					<div class="located-in-call">
						Nossa localização:
					</div>
					<iframe
						id="home-map"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.6799031827195!2d-47.07373998503466!3d-22.88828008502119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c61b9508de13%3A0x720a402aa6fef35a!2sRua%20Frei%20Manoel%20da%20Ressurrei%C3%A7%C3%A3o%2C%20974%20-%20Jardim%20Guanabara%2C%20Campinas%20-%20SP%2C%2013073-221!5e0!3m2!1spt-BR!2sbr!4v1586022677012!5m2!1spt-BR!2sbr"
						frameborder="0"
						style="border: 0;"
						allowfullscreen=""
						aria-hidden="false"
						tabindex="0"
					/>
				</div>
				<div id="map-address">
					Rua Frei Manoel da Ressurreição, 974 - Jardim Guanabara, Campinas - SP, 13073-221
				</div>
			</div>
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
	.home-container {
		font-family: 'Montserrat';
	}

	#contacts-welcome {
		background-color: $red-02;
	}
	/* mobile */
	@media (max-width: 767px) {
		#contacts-welcome {
			box-sizing: border-box;
			background-image: url('~assets/images/home-assets/contact-bg.svg');
			background-repeat: no-repeat;
			max-width: 100%;
			display: flex;
			flex-direction: column;
			color: $white;
			padding: 0 !important;
		}

		#contacts-call {
			display: flex;
			flex-direction: column;
		}

		.schedule-today {
			display: flex;
			font-weight: bold;
			font-size: 1.5em;
			padding: 2em 0 1em 0;
			justify-content: center;
		}

		#home-map {
			width: 100%;
			height: 320px;
		}

		.contact-numbers {
			display: flex;
			justify-content: center;
			flex-direction: column;
			align-items: center;
			width: 100%;
		}

		.contact-number {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			margin-bottom: 1em;
		}

		#contact-zap {
			width: 1.5em;
			height: 1.5em;
			background-repeat: no-repeat;
			background-size: cover;
			content: '';
			background-image: url('~assets/images/home-assets/zap-white.svg');
			margin-right: 0.5em;
		}

		#contact-phone {
			width: 1.5em;
			height: 1.5em;
			background-repeat: no-repeat;
			background-size: cover;
			content: '';
			background-image: url('~assets/images/home-assets/phone-white.svg');
			margin-right: 0.5em;
		}

		.located-in-call {
			display: flex;
			font-weight: 300;
			justify-content: center;
			margin: 1.5em 0 1em 0;
			font-size: 1.5em;
		}

		#map-address {
			display: flex;
			justify-content: center;
			align-items: center;
			text-align: center;
			padding: 1em 2em 3em 2em;
			font-size: 1em;
		}
	}

	/* tablet */
	@media (min-width: 768px) {
		#contacts-welcome {
			box-sizing: border-box;
			background-image: url('~assets/images/home-assets/contact-bg.svg');
			background-repeat: no-repeat;
			max-width: 100%;
			display: flex;
			flex-direction: row;
			color: $white;
			padding: 0 !important;
			justify-content: space-between;
		}

		#contacts-call {
			display: flex;
			flex-direction: column;
			margin: 0 0 0 1.5em;
			width: 50%;
			font-size: 1.5em;
		}

		.schedule-today {
			display: flex;
			font-size: 1.5em;
			padding: 1.5em 0 1em 0;
			justify-content: center;
			text-align: center;
			line-height: 1.2;
		}

		#home-map {
			width: 100%;
			height: 320px;
		}

		.contact-numbers {
			display: flex;
			justify-content: center;
			flex-direction: column;
			align-items: center;
			width: 100%;
		}

		.contact-number {
			display: flex;
			justify-content: flex-start;
			align-items: left;
			margin-bottom: 1em;
			width: 100%;
		}

		#contact-zap {
			width: 2em;
			height: 2em;
			background-repeat: no-repeat;
			background-size: cover;
			content: '';
			background-image: url('~assets/images/home-assets/zap-white.svg');
			margin-right: 0.5em;
		}

		#contact-phone {
			width: 2em;
			height: 2em;
			background-repeat: no-repeat;
			background-size: cover;
			content: '';
			background-image: url('~assets/images/home-assets/phone-white.svg');
		}

		#location {
			margin: 3.5em 6em 2em 1em;
			width: 50%;
		}

		.located-in-call {
			display: flex;
			font-weight: 300;
			justify-content: center;
			margin: 0em 0 1em 0;
			font-size: 2em;
		}

		#map-address {
			display: flex;
			justify-content: center;
			align-items: center;
			text-align: center;
			padding: 1em 1.5em 1.5em 2em;
			font-size: 1.5em;
			line-height: 1.2;
		}
	}

	/* web */
	@media (min-width: 1440px) {
		#contacts-welcome {
			box-sizing: border-box;
			background-image: url('~assets/images/home-assets/contact-bg.svg');
			background-size: cover;
			background-repeat: no-repeat;
			max-width: 100%;
			display: flex;
			flex-direction: row;
			color: $white;
			padding: 0;
			justify-content: space-between;
		}

		#contacts-call {
			display: flex;
			flex-direction: column;
			margin: 0 0 0 1.5em;
		}

		.schedule-today {
			display: flex;
			font-size: 2em;
			padding: 1em 0 0.5em 0;
			justify-content: center;
			text-align: left;
			font-weight: 300;
		}

		#home-map {
			width: 100%;
			height: 480px;
		}

		.contact-numbers {
			display: flex;
			justify-content: center;
			flex-direction: column;
			align-items: center;
			width: 100%;
		}

		.contact-number {
			display: flex;
			justify-content: flex-start;
			align-items: left;
			margin-bottom: 0.5em;
			font-size: 1.5em;
			align-items: center;
			width: 100%;
			padding-left: 2em;
		}

		#contact-zap {
			width: 1.5em;
			height: 1.5em;
			background-repeat: no-repeat;
			background-size: cover;
			content: '';
			background-image: url('~assets/images/home-assets/zap-white.svg');
		}

		#contact-phone {
			width: 1.5em;
			height: 1.5em;
			background-repeat: no-repeat;
			background-size: cover;
			content: '';
			background-image: url('~assets/images/home-assets/phone-white.svg');
		}

		#location {
			margin: 3em 8em 1.5em 1em;
			width: 50%;
		}

		.located-in-call {
			display: flex;
			justify-content: center;
			font-size: 2.5em;
		}

		#map-address {
			display: flex;
			justify-content: center;
			align-items: center;
			text-align: center;
			padding: 0em 1em 2em 0em;
			font-size: 2em;
		}
	}
</style>
