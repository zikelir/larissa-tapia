<template>
	<div id="footer">
		<div class="contacts">
			<div class="social-contacts">
				<h3>Nos encontre nas redes sociais</h3>
				<a
					v-for="(contact, index) in contacts"
					:key="index"
					:href="contact.href"
					class="contact-info"
					target="_blank"
				>
					<img :src="contact.imgSrc" :alt="contact.text" class="footer-icon">
					{{ contact.text }}
				</a>
			</div>
			<div class="form-contact">
				<h3>Para mais informações</h3>
				<form class="form">
					<label for="name" class="form__field">
						Nome
						<input id="name" type="text">
					</label>

					<label for="email" class="form__field">
						E-mail
						<input id="email" type="text">
					</label>

					<label for="tel" class="form__field">
						Telefone
						<input id="tel" type="text">
					</label>

					<label for="message" class="form__field">
						Mensagem
						<textarea
							id="message"
							name="message"
							rows="5"
						/>
					</label>
					<button type="submit" class="submit">
						Enviar
					</button>
				</form>
			</div>
		</div>
		<a id="made-with-love" href="https://www.linkedin.com/in/paulo-victor-campelo-selano-b799a298/" target="_blank">
			Made with ❤ by pvselano
		</a>
	</div>
</template>

<script>
	export default {
		name: 'Footer',
		data() {
			return {
				contacts: [
					{
						href: 'https://wa.me/5519976546644/?text=hello',
						imgSrc: require('@/assets/images/footer-assets/zap-white.svg'),
						text: '+55 (19) 97654-6644',
					},
					{
						href: 'tel:5551234567',
						imgSrc: require('@/assets/images/footer-assets/phone-white.svg'),
						text: '+55 (19) 3213-1936',
					},
					{
						href: 'http://instagram.com/dralarissatapia',
						imgSrc: require('@/assets/images/footer-assets/insta-white.svg'),
						text: 'dralarissatapia',
					},
					{
						href: 'http://facebook.com/dralarissatapia',
						imgSrc: require('@/assets/images/footer-assets/fb-white.svg'),
						text: 'dralarissatapia',
					},
				],
			};
		},
	};
</script>

<style lang="scss" scoped>
	a {
		color: $white;
		text-decoration: none;
	}

	a:visited {
		text-decoration: none;
	}

	#footer {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		background-image: url('~assets/images/footer-assets/footer-bg.svg');
		background-repeat: no-repeat;
		background-size: 100%;
		background-color: $red-01;
		color: $white;

		.contacts {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
			grid-column-gap: 32px;
			padding: 15vh 32px 5vh 32px;
			width: 70%;

			@media screen and (max-width: 480px) {
				padding-top: 8vh;
			}

			@media screen and (max-width: 1199px) {
				grid-template-columns: 1fr;
				grid-row-gap: 32px;
				width: 50%;
			}

			@media screen and (max-width: 767px) {
				width: 90%;
			}

			.social-contacts,
			.form-contact {
				h3 {
					font-size: 1.5rem;

					@media screen and (max-width: 480px) {
						font-size: 1.1rem;
					}

					font-weight: normal;
					margin-bottom: 16px;
				}
			}

			.social-contacts {
				h3,
				.contact-info {
					margin-bottom: 16px;
				}

				.contact-info {
					display: flex;
					font-size: 1.5rem;

					@media screen and (max-width: 480px) {
						font-size: 1.1rem;
					}

					.footer-icon {
						width: 2.5rem;
						height: 2.5rem;
						background-repeat: no-repeat;
						background-size: contain;
						margin-right: 0.75em;

						@media screen and (max-width: 480px) {
							width: 1.5rem;
							height: 1.5rem;
						}
					}
				}
			}

			.form-contact,
			.form__field {
				display: flex;
				flex-direction: column;
			}

			.form-contact {
				.form {
					display: flex;
					flex-direction: column;

					.form__field {
						margin-bottom: 16px;

						input,
						textarea {
							border-radius: 3px;
							border: 2px solid $light-red-03;
							margin-top: 6px;

							&:focus {
								outline-color: $red-01;
							}
						}

						textarea {
							resize: none;
						}
					}
				}
			}

			.submit {
				font-size: 0.85rem;
				border-radius: 3px;
				padding: 4px 8px;
				width: 120px;
				border: 2px solid $light-red-03;
				color: $red-01;
				align-self: flex-end;
				transition: background-color 0.3s linear;

				&:hover {
					cursor: pointer;
				}

				&:hover,
				&:focus {
					background-color: $light-red-03;
				}
			}
		}

		#made-with-love {
			padding: 2rem 0;
		}
	}
</style>
