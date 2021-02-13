<template>
	<div id="header">
		<div role="navigation" class="header-nav">
			<div id="menuMobile">
				<div id="menuToggle">
					<input
						v-click-outside="clickOutside"
						type="checkbox"
						aria-label="Toggle menu"
						:checked="checked"
						@click="checked = !checked"
					>
					<span />
					<span />
					<span />
					<scrollactive id="menu" class="menu" :offset="0">
						<a v-scroll-to="'#home-welcome'" class="header-link scrollactive-item" href="#home-welcome">Home</a>
						<a v-scroll-to="'#tratamentos'" class="header-link scrollactive-item" href="#tratamentos">Tratamentos</a>
						<a v-scroll-to="'#depoimentos'" class="header-link scrollactive-item" href="#depoimentos">Depoimentos</a>
						<a v-scroll-to="'#equipe'" class="header-link scrollactive-item" href="#equipe">Equipe</a>
						<!-- <a class="header-link" href="">Consultório</a> -->
						<!-- <a class="header-link" href="">Avaliação</a> -->
						<a v-scroll-to="'#contacts-welcome'" class="header-link scrollactive-item" href="#contacts-welcome">Contato</a>
					</scrollactive>
				</div>
				<div id="logo" class="logo-mobile" />
				<div class="social-media-icons-header mobile">
					<!-- eslint-disable-next-line vuejs-accessibility/anchor-has-content -->
					<a
						id="zap"
						class="social-media-icon"
						href="https://wa.me/5519996791213/?text=Olá, Dra. Larissa"
						target="_blank"
						aria-label="WhatsApp"
					/>
					<!-- eslint-disable-next-line vuejs-accessibility/anchor-has-content -->
					<a
						id="face"
						class="social-media-icon"
						href="https://facebook.com/dralarissatapia"
						target="_blank"
						aria-label="Facebook"
					/>
					<!-- eslint-disable-next-line vuejs-accessibility/anchor-has-content -->
					<a
						id="insta"
						class="social-media-icon"
						href="https://instagram.com/dralarissatapia"
						target="_blank"
						aria-label="Instagram"
					/>
				</div>
			</div>

			<div id="menuDesktop">
				<div id="logo" />
				<div id="page-links">
					<scrollactive class="my-nav" :offset="0">
						<a v-scroll-to="'#home-welcome'" class="header-link scrollactive-item" href="#home-welcome">Home</a>
						<a v-scroll-to="'#tratamentos'" class="header-link scrollactive-item" href="#tratamentos">Tratamentos</a>
						<a v-scroll-to="'#depoimentos'" class="header-link scrollactive-item" href="#depoimentos">Depoimentos</a>
						<a v-scroll-to="'#equipe'" class="header-link scrollactive-item" href="#equipe">Equipe</a>
						<!-- <a class="header-link" href="">Consultório</a> -->
						<!-- <a class="header-link" href="">Avaliação</a> -->
						<a v-scroll-to="'#contacts-welcome'" class="header-link scrollactive-item" href="#contacts-welcome">Contato</a>
					</scrollactive>
				</div>
				<div class="social-media-icons-header">
					<!-- eslint-disable-next-line vuejs-accessibility/anchor-has-content -->
					<a
						id="zap"
						class="social-media-icon"
						href="https://wa.me/5519996791213/?text=Olá, Dra. Larissa"
						target="_blank"
						aria-label="WhatsApp"
					/>
					<!-- eslint-disable-next-line vuejs-accessibility/anchor-has-content -->
					<a
						id="face"
						class="social-media-icon"
						href="https://facebook.com/dralarissatapia"
						target="_blank"
						aria-label="Facebook"
					/>
					<!-- eslint-disable-next-line vuejs-accessibility/anchor-has-content -->
					<a
						id="insta"
						class="social-media-icon"
						href="https://www.instagram.com/dralarissatapia"
						target="_blank"
						aria-label="Instagram"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Header',
		data() {
			return {
				checked: false,
			};
		},
		methods: {
			clickOutside() {
				if (!this.checked) {
					return;
				}

				this.checked = false;
			},
		},
	};
</script>

<style lang="scss" scoped>
	#header {
		position: fixed;
		z-index: 1;
		width: 100%;
		max-width: 1600px;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		height: 80px;
		background-color: $white;

		@media screen and (min-width: 769px) {
			height: 80px;
		}

		.header-nav {
			height: 100%;
		}
	}

	#menuToggle {
		display: none;
	}

	.social-media-icons-header {
		display: flex;

		&.mobile {
			display: flex;
			align-items: center;
			justify-content: flex-end;

			@media screen and (min-width: 769px) {
				display: none;
			}
		}

		.social-media-icon {
			height: 32px;
			width: 32px;
			background-size: contain;
			background-repeat: no-repeat;
			cursor: pointer;
			margin-right: 8px;

			@media screen and (min-width: 1101px) {
				height: 48px;
				width: 48px;
				margin-right: 16px;
			}

			&#zap {
				background-image: url('~assets/images/header-assets/zap.svg');
			}

			&#face {
				background-image: url('~assets/images/header-assets/face.svg');
			}

			&#insta {
				background-image: url('~assets/images/header-assets/insta.svg');
			}
		}
	}

	#logo {
		background-image: url('~assets/images/header-assets/logo.png');
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center;
		width: 80px;
		height: 80px;
		margin: 0 16px;

		&.logo-mobile {
			display: none;
		}

		@media screen and (min-width: 769px) {
			width: 90px;
			height: 90px;
		}
	}

	#menuDesktop {
		display: none;
		height: 100%;
		justify-content: space-between;
		align-items: center;

		@media screen and (min-width: 769px) {
			display: flex;
		}

		#page-links {
			display: flex;

			.header-link {
				color: $red-01;
				text-decoration: none;
				font-size: 1.15rem;
				transition: font-weight 0.15s linear;

				&:hover,
				&:focus {
					font-weight: bold;
					text-decoration: underline;
				}

				&:focus {
					outline: none;
				}

				&:not(:last-of-type) {
					margin-right: 8px;
					padding: 0 4px;
				}

				@media screen and (min-width: 1101px) {
					font-size: 1.5rem;

					&:not(:last-of-type) {
						margin-right: 16px;
						padding: 0 8px;
					}
				}
			}
		}
	}

	@media screen and (max-width: 768px) {
		#logo.logo-mobile {
			display: block;
			position: absolute;
			top: 0;
			left: 42vw;
			margin: 0;
		}

		#menuMobile {
			height: 100%;
		}

		#menuToggle {
			display: block;
			position: relative;
			top: 31px;
			left: 40px;
			z-index: 1;
			user-select: none;

			a {
				text-decoration: none;
				color: $red-01;
				transition: color 0.3s ease;
				font-size: 24px;

				&:hover,
				&:focus {
					color: $red-02;
					text-decoration: underline;
					font-weight: bold;
				}

				&:focus {
					outline: none;
				}
			}

			input {
				display: block;
				width: 35px;
				height: 32px;
				position: absolute;
				top: -8px;
				left: -1px;
				cursor: pointer;
				opacity: 0; /* hide this */
				z-index: 2; /* and place it over the hamburger */
				-webkit-touch-callout: none;
				margin: 0;

				&:focus {
					border: 1px solid $red-02;
				}

				&:checked ~ span {
					opacity: 1;
					transform: rotate(45deg) translate(-2px, -1px);

					&:nth-last-child(2) {
						transform: rotate(-45deg) translate(0, -1px);
					}

					&:nth-last-child(3) {
						opacity: 0;
						transform: rotate(0deg) scale(0.2, 0.2);
					}
				}

				&:checked ~ .menu {
					transform: none;
				}
			}

			span {
				display: block;
				width: 33px;
				height: 4px;
				margin-bottom: 5px;
				position: relative;
				background: $red-02;
				border-radius: 3px;
				z-index: 1;
				transform-origin: 4px 0px;
				transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
					background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
					opacity 0.55s ease;

				&:first-child {
					transform-origin: 0% 0%;
				}

				&:nth-last-child(2) {
					transform-origin: 0% 100%;
				}
			}
		}

		#menu {
			display: flex;
			flex-direction: column;
			min-height: 180px;
			position: absolute;
			width: 100%;
			margin: 22px 0 0 -50px;
			padding: 17px 50px;
			padding-top: 0;
			background: $white;
			list-style-type: none;
			-webkit-font-smoothing: antialiased;
			transform-origin: 0% 0%;
			transform: translate(-100%, 0);
			transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);

			li {
				padding: 10px 0;
				font-size: 22px;
			}
		}
	}

	@media screen and (max-width: 400px) {
		#logo.logo-mobile {
			left: 36vw;
		}
	}

	@media screen and (max-width: 330px) {
		#logo.logo-mobile {
			left: 30vw;
		}
	}
</style>
