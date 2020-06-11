<template>
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
			<textarea id="message" name="message" rows="5" />
		</label>
		<button type="submit" class="submit">
			Enviar
		</button>
	</form>
</template>

<script>
	export default {
		name: 'Form',
	};
</script>

<style lang="scss" scoped>
	.form {
		display: flex;
		flex-direction: column;

		.form__field {
			display: flex;
			flex-direction: column;
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
</style>
