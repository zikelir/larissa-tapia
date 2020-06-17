<template>
	<form class="form">
		<label :for="`name-${formId}`" class="form__field">
			Nome
			<input :id="`name-${formId}`" type="text">
		</label>

		<label :for="`email-${formId}`" class="form__field">
			E-mail
			<input :id="`email-${formId}`" type="text">
		</label>

		<label :for="`tel-${formId}`" class="form__field">
			Telefone
			<input :id="`tel-${formId}`" type="text">
		</label>

		<label :for="`message-${formId}`" class="form__field">
			Motivo do Contato
			<textarea :id="`message-${formId}`" name="message" rows="5" />
		</label>
		<button type="submit" class="submit">
			Enviar
		</button>
	</form>
</template>

<script>
	import VueTypes from 'vue-types';

	export default {
		name: 'Form',
		props: {
			formId: VueTypes.string.isRequired,
		},
	};
</script>

<style lang="scss" scoped>
	.form {
		display: flex;
		flex-direction: column;
		color: $white;

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
