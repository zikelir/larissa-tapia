<template>
	<div>
		<div class="home-container">
			<Intro />
			<Treatments />
			<div class="form-wrapper">
				<div class="form-contact">
					<h3>Em caso de dúvida entre em contato conosco</h3>
					<Form />
				</div>
			</div>
			<Testimonials />
			<Contacts />
		</div>
	</div>
</template>

<script>
	import Intro from './intro/Intro.vue';
	import Treatments from './treatments/Treatments.vue';
	import Testimonials from './testimonials/Testimonials.vue';
	import Contacts from './contacts/Contacts.vue';
	import Form from '@/components/Form/Form.vue';

	export default {
		name: 'Homepage',
		components: {
			Intro,
			Treatments,
			Testimonials,
			Contacts,
			Form,
		},
	};
</script>

<style lang="scss" scoped>
	.home-container {
		font-family: 'Montserrat';

		.form-wrapper {
			min-height: 85vh;
			background-color: $red-02;
			background-image: url('~assets/images/home-assets/form-background-shape.svg'),
				url('~assets/images/home-assets/form-background-shape.svg'),
				url('~assets/images/home-assets/form-background-shape.svg');
			background-repeat: no-repeat, no-repeat, no-repeat;
			background-position: -10% 20%, 35% 110%, 110% 10%;
			background-size: 20%, 30%, 25%;

			.form-contact {
				display: flex;
				flex-direction: column;
				margin: 0 auto;
				padding: 48px;
				max-width: calc(800px - 48px);

				h3 {
					text-align: center;
					color: $white;
					font-size: 2.5rem;
					font-weight: normal;
					line-height: 1.15;
					margin-bottom: 2.5rem;
				}
			}
		}
	}
</style>
