<template>
	<div id="footer">
		<div id="social-media-icons-footer">
			<div id="footer-phones">
				<a class="footer-social-media-row" href="https://wa.me/5519976546644/?text=hello" target="#">
					<div id="zap-footer-icon" />+55 (19) 97654-6644</a>
				<a class="footer-social-media-row" href="tel:5551234567" target="#">
					<div id="phone-footer-icon" />+55 (19) 3213-1936</a>
			</div>
			<div id="footer-medias">
				<a class="footer-social-media-row" href="http://instagram.com/dralarissatapia" target="#">
					<div id="insta-footer-icon" />dralarissatapia</a>
				<a class="footer-social-media-row" href="http://facebook.com/dralarissatapia" target="#">
					<div id="face-footer-icon" />dralarissatapia</a>
			</div>
		</div>
		<a id="made-with-love" href="https://www.linkedin.com/in/paulo-victor-campelo-selano-b799a298/" target="#">Made with ❤ by pvselano</a>
	</div>
</template>

<script>
	export default {
		name: 'Footer',
		components: {},
	};
</script>

<style lang="scss">
	a {
		color: $white;
		text-decoration: none;
	}

	a:visited {
		text-decoration: none;
	}
	/* mobile */
	@media (max-width: 767px) {
		#footer {
			display: flex;
			align-content: center;
			flex-direction: column;
			align-items: center;
			width: 100%;
			background-image: url('~assets/images/footer-assets/footer-bg.svg');
			background-repeat: no-repeat;
			background-size: cover;
			color: $white;
		}

		#social-media-icons-footer {
			display: flex;
			flex-direction: column;
			margin-top: 6em;
		}

		.footer-social-media-row {
			display: flex;
			flex-direction: row;
			align-items: center;
			font-size: 1.5em;
			margin-top: 1em;
		}

		#footer-phones {
			display: flex;
			flex-direction: column;
		}

		#zap-footer-icon {
			width: 1.5em;
			height: 1.5em;
			background-image: url('~assets/images/footer-assets/zap-white.svg');
			content: '';
			background-repeat: no-repeat;
			background-size: contain;
			margin-right: 0.5em;
		}

		#phone-footer-icon {
			width: 1.5em;
			height: 1.5em;
			background-image: url('~assets/images/footer-assets/phone-white.svg');
			content: '';
			background-repeat: no-repeat;
			background-size: contain;
			margin-right: 0.5em;
		}

		#footer-medias {
			display: flex;
			flex-direction: column;
		}

		#insta-footer-icon {
			width: 1.5em;
			height: 1.5em;
			background-image: url('~assets/images/footer-assets/insta-white.svg');
			content: '';
			background-repeat: no-repeat;
			background-size: contain;
			margin-right: 0.5em;
		}

		#face-footer-icon {
			width: 1.5em;
			height: 1.5em;
			background-image: url('~assets/images/footer-assets/fb-white.svg');
			content: '';
			background-repeat: no-repeat;
			background-size: contain;
			margin-right: 0.5em;
		}

		#made-with-love {
			padding: 2em 0;
		}
	}
	/* tablet */
	@media (min-width: 768px) {
		#footer {
			display: flex;
			align-content: center;
			flex-direction: column;
			align-items: center;
			width: 100%;
			background-image: url('~assets/images/footer-assets/footer-bg.svg');
			background-repeat: no-repeat;
			background-size: cover;
			color: $white;
		}

		#social-media-icons-footer {
			display: flex;
			flex-direction: row;
			margin: 6em 2em 0em 2em;
			width: 100%;
			justify-content: space-around;
		}

		.footer-social-media-row {
			display: flex;
			flex-direction: row;
			align-items: center;
			font-size: 1.5em;
			margin: 3em 1em 2em 1em;
		}

		#footer-phones {
			display: flex;
			flex-direction: row;
		}

		#zap-footer-icon {
			width: 1.5em;
			height: 1.5em;
			background-image: url('~assets/images/footer-assets/zap-white.svg');
			content: '';
			background-repeat: no-repeat;
			background-size: contain;
			margin-right: 0.5em;
		}

		#phone-footer-icon {
			width: 1.5em;
			height: 1.5em;
			background-image: url('~assets/images/footer-assets/phone-white.svg');
			content: '';
			background-repeat: no-repeat;
			background-size: contain;
			margin-right: 0.5em;
		}

		#footer-medias {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
		}

		#insta-footer-icon {
			width: 1.5em;
			height: 1.5em;
			background-image: url('~assets/images/footer-assets/insta-white.svg');
			content: '';
			background-repeat: no-repeat;
			background-size: contain;
			margin-right: 0.5em;
		}

		#face-footer-icon {
			width: 1.5em;
			height: 1.5em;
			background-image: url('~assets/images/footer-assets/fb-white.svg');
			content: '';
			background-repeat: no-repeat;
			background-size: contain;
			margin-right: 0.5em;
		}

		#made-with-love {
			padding: 2em 0;
		}
	}

	@media (min-width: 1440px) {
		#footer {
			display: flex;
			align-content: center;
			flex-direction: column;
			align-items: center;
			width: 100%;
			background-image: url('~assets/images/footer-assets/footer-bg.svg');
			background-repeat: no-repeat;
			background-size: cover;
			color: $white;
		}

		#social-media-icons-footer {
			display: flex;
			flex-direction: row;
			margin: 6em 2em 0em 2em;
			width: 100%;
			justify-content: space-around;
		}

		.footer-social-media-row {
			display: flex;
			flex-direction: row;
			align-items: center;
			font-size: 1.5em;
			margin: 3em 1em 2em 1em;
		}

		#footer-phones {
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			width: 50%;
		}

		#zap-footer-icon {
			width: 1.5em;
			height: 1.5em;
			background-image: url('~assets/images/footer-assets/zap-white.svg');
			content: '';
			background-repeat: no-repeat;
			background-size: contain;
			margin-right: 0.5em;
		}

		#phone-footer-icon {
			width: 1.5em;
			height: 1.5em;
			background-image: url('~assets/images/footer-assets/phone-white.svg');
			content: '';
			background-repeat: no-repeat;
			background-size: contain;
			margin-right: 0.5em;
		}

		#footer-medias {
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			width: 50%;
		}

		#insta-footer-icon {
			width: 1.5em;
			height: 1.5em;
			background-image: url('~assets/images/footer-assets/insta-white.svg');
			content: '';
			background-repeat: no-repeat;
			background-size: contain;
			margin-right: 0.5em;
		}

		#face-footer-icon {
			width: 1.5em;
			height: 1.5em;
			background-image: url('~assets/images/footer-assets/fb-white.svg');
			content: '';
			background-repeat: no-repeat;
			background-size: contain;
			margin-right: 0.5em;
		}

		#made-with-love {
			padding: 2em 0;
		}
	}
</style>
