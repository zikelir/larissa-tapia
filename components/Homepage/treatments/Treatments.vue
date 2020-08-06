<template>
	<div id="home-treatments">
		<div id="treatment-title">
			Conheça os tratamentos
		</div>
		<div id="treatment-list">
			<div
				id="harmonizacao-facial"
				class="treatment-element"
				@click="show('harmonizacao')"
				@keyup.enter="show('harmonizacao')"
			>
				<div class="treatment-title">
					Harmonização Orofacial
				</div>
			</div>
			<!-- <div class="treatment-element" id="endodontia"><div class="treatment-title">Endodontia</div></div> -->
			<div
				id="estetica-dental"
				class="treatment-element"
				@click="show('estetica')"
				@keyup.enter="show('estetica')"
			>
				<div class="treatment-title">
					Estética Dental
				</div>
			</div>
			<div
				id="dor-orofacial"
				class="treatment-element"
				@click="show('dtm')"
				@keyup.enter="show('dtm')"
			>
				<div class="treatment-title">
					DTM e Dores Orofaciais
				</div>
			</div>
			<div
				id="invisalign"
				class="treatment-element"
				@click="show('invisalign')"
				@keyup.enter="show('invisalign')"
			>
				<div class="treatment-title">
					Aparelho Invisível
				</div>
			</div>
			<div
				id="implantes"
				class="treatment-element"
				@click="show('implante')"
				@keyup.enter="show('implante')"
			>
				<div class="treatment-title">
					Implantes
				</div>
			</div>
			<div
				id="laserterapia"
				class="treatment-element"
				@click="show('laserterapia')"
				@keyup.enter="show('laserterapia')"
			>
				<div class="treatment-title">
					Laserterapia
				</div>
			</div>
			<!-- <div class="treatment-element" id="clareamento"><div class="treatment-title">Clareamento</div></div> -->
		</div>

		<modal
			name="harmonizacao"
			:adaptive="true"
			width="100%"
			height="100%"
		>
			<div class="treatment-modal">
				<div class="inner-modal">
					<div id="logo" class="logo-modal" />
					<div class="modal-title">
						{{ treatments.harmonizacao.title }}
					</div>
					<div class="modal-text">
						{{ treatments.harmonizacao.text }}
					</div>
					<button class="modal-close" @click="hide('harmonizacao')">
						voltar
					</button>
				</div>
			</div>
		</modal>
		<modal
			name="estetica"
			class="treatment-modal"
			:adaptive="true"
			width="100%"
			height="100%"
		>
			<div class="treatment-modal">
				<div class="inner-modal">
					<div id="logo" class="logo-modal" />
					<div class="modal-title">
						{{ treatments.estetica.title }}
					</div>
					<div class="modal-text">
						{{ treatments.estetica.text }}
					</div>
					<button class="modal-close" @click="hide('estetica')">
						voltar
					</button>
				</div>
			</div>
		</modal>
		<modal
			name="dtm"
			class="treatment-modal"
			:adaptive="true"
			width="100%"
			height="100%"
		>
			<div class="treatment-modal">
				<div class="inner-modal">
					<div id="logo" class="logo-modal" />
					<div class="modal-title">
						{{ treatments.dtm.title }}
					</div>
					<div class="modal-text">
						{{ treatments.dtm.text }}
					</div>
					<button class="modal-close" @click="hide('dtm')">
						voltar
					</button>
				</div>
			</div>
		</modal>
		<modal
			name="invisalign"
			class="treatment-modal"
			:adaptive="true"
			width="100%"
			height="100%"
		>
			<div class="treatment-modal">
				<div class="inner-modal">
					<div id="logo" class="logo-modal" />
					<div class="modal-title">
						{{ treatments.invisalign.title }}
					</div>
					<div class="modal-text">
						{{ treatments.invisalign.text }}
					</div>
					<button class="modal-close" @click="hide('invisalign')">
						voltar
					</button>
				</div>
			</div>
		</modal>
		<modal
			name="implante"
			class="treatment-modal"
			:adaptive="true"
			width="100%"
			height="100%"
		>
			<div class="treatment-modal">
				<div class="inner-modal">
					<div id="logo" class="logo-modal" />
					<div class="modal-title">
						{{ treatments.implante.title }}
					</div>
					<div class="modal-text">
						{{ treatments.implante.text }}
					</div>
					<button class="modal-close" @click="hide('implante')">
						voltar
					</button>
				</div>
			</div>
		</modal>
		<modal
			name="laserterapia"
			class="treatment-modal"
			:adaptive="true"
			width="100%"
			height="100%"
		>
			<div class="treatment-modal">
				<div class="inner-modal">
					<div id="logo" class="logo-modal" />
					<div class="modal-title">
						{{ treatments.laserterapia.title }}
					</div>
					<div class="modal-text">
						{{ treatments.laserterapia.text }}
					</div>
					<button class="modal-close" @click="hide('laserterapia')">
						voltar
					</button>
				</div>
			</div>
		</modal>
	</div>
</template>

<script>
	export default {
		name: 'Treatments',
		data() {
			return {
				treatments: {
					harmonizacao: {
						title: 'Harmonização orofacial ',
						text:
							'O sucesso do momento! Fazemos uma minuciosa análise facial digital para identificar os pontos de desarmonia em sua face e então traçamos um plano de tratamento totalmente personalizado, contando com aplicações de toxina botulínica (famoso Botox), preenchimento com ácido hialurônico, fios de sustentação e bioestimuladores de colágeno como IPRF, Sculptra, Elance e Radiesse para alcançarmos uma face totalmente harmônica e rejuvenescida!',
					},
					estetica: {
						title: 'Estética dental',
						text:
							'Por meio de protocolos restauradores de excelência, realizamos clareamento dental, facetas cerâmica, lentes de contato, onlays, inlays e coroas minimalistas, a fim de te presentear com aquele sorriso perfeito do jeito que você sempre sonhou!',
					},
					dtm: {
						title: 'DTM e Dores orofaciais',
						text:
							'Você sabia que enxaquecas, bruxismo, insônia, falta de concentração, irritabilidade, fraturas espontâneas de dentes e dores irradiadas em fundo de olho, coluna ou até mesmo zumbidos e estalidos no ouvido podem ser sintomas de DTM? E tudo isso é desencadeado pelo stress da rotina moderna! Temos o tratamento ideal para você dar adeus a todos esses sintomas desagradáveis! Tenha um vida mais leve e feliz!',
					},
					invisalign: {
						title: 'Aparelhos estéticos ',
						text:
							'Que tal conseguir ver o resultado final do tratamento ortodôntico antes mesmo de colocar o aparelho? Pois é! Com o iTero, sistema de scaneamento digital, é possível! A partir daí conseguimos corrigir o alinhamento dos dentes com um aparelho totalmente estético, por meio de uma sequência de alinhadores transparentes, super confortáveis, que não interferem na sua fala e podem ser retirados nos momentos das refeições e higienização dos dentes! Essa é a tecnologia que só a Invisalign oferece! Com conforto, previsibilidade e segurança ! Agora é fácil ter um sorriso perfeito com dentes alinhados!',
					},
					implante: {
						title: 'Implante',
						text:
							'Conseguimos devolver um único elemento dental perdido ou ainda reabilitar a boca inteira com implantes super estéticos e resistentes! Devolvendo auto-estima e conforto, além de prevenir futuros problemas sistêmicos causados pela ausência de dentes! ',
					},
					laserterapia: {
						title: 'Laserterapia',
						text:
							'Através de aplicações rápidas e totalmente indolores de laser de baixa potência, conseguimos controlar infeções, reduzir processos inflamatórios, curar lesões bucais como aftas e herpes, tratar dores faciais relacionadas aos músculos ou ATM. Revertemos quadros de parestesia e paralisias faciais, proporcionamos pós operatórios cirúrgicos muito mais rápidos e confortáveis. De maneira extremamente biológica e sem efeitos colaterais! Laser é vida! Apaixone-se você também! ',
					},
				},
			};
		},
		methods: {
			show(modalname) {
				this.$modal.show(modalname);
			},
			hide(modalname) {
				this.$modal.hide(modalname);
			},
		},
	};
</script>

<style lang="scss">
	#home-treatments {
		font-family: 'Montserrat';
	}

	/* mobile */
	@media (min-width: 0px) {
		#treatment-title {
			color: $red-01;
			font-size: 2em;
			display: flex;
			justify-content: center;
			padding: 1.5em 0 1em 0;
			text-align: center;
		}

		#treatment-list {
			display: flex;
			flex-direction: row;
			min-width: 100%;
			flex-wrap: nowrap;
			flex: 1;
			flex-shrink: initial;
			overflow: auto;
			white-space: nowrap;
			padding: 0 0 2em 0;
		}

		.treatment-element {
			min-width: 16em;
			height: 16em;
			background-position: center;
			background-size: contain;
			background-repeat: no-repeat;
			content: '';
			margin: 0 2em 0 1em;
			display: flex;
			align-items: flex-end;
			justify-content: center;
			color: $white;
			font-family: 'Montserrat';
			font-size: 1em;
		}

		.treatment-title {
			background-color: $red-01;
			padding: 0.5em 1em;
			text-align: center;
			width: 100%;
			border-radius: 40px;
		}

		#harmonizacao-facial {
			background-image: url('~assets/images/home-assets/harmonizacao-facial.png');
		}

		#invisalign {
			background-image: url('~assets/images/home-assets/invisalign.png');
		}

		#dor-orofacial {
			background-image: url('~assets/images/home-assets/dor-orofacial.png');
		}

		#endodontia {
			background-image: url('~assets/images/home-assets/endodontia.png');
		}

		#laserterapia {
			background-image: url('~assets/images/home-assets/laserterapia.png');
		}

		#implantes {
			background-image: url('~assets/images/home-assets/implantes.png');
		}

		#estetica-dental {
			background-image: url('~assets/images/home-assets/estetica-dental.png');
		}

		#clareamento {
			background-image: url('~assets/images/home-assets/clareamento.png');
		}

		.treatment-modal {
			width: 100%;
			height: 100%;
			flex-direction: column;
			background-color: $light-red-02;
			color: $white;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.inner-modal {
			width: 100%;
			height: 100%;
			color: $red-01;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
		}

		.logo-modal {
			margin: 0 !important;
		}

		.modal-title {
			font-weight: 400;
			font-size: 32px;
			margin-bottom: 32px;
			text-align: left;
			padding-bottom: 64px;
			border-bottom: 8px solid #670c1b;
			border-radius: 50%;
		}

		.modal-text {
			font-size: 20px;
			width: 80%;
			line-height: 1.6;
			text-align: center;
			margin-bottom: 40px;
		}

		.modal-close {
			min-width: 120px;
			padding: 8px;
			border-radius: 4px;
			font-size: 24px;
			border: none;
			background-color: $red-01;
			color: $white;
			box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
			cursor: pointer;
		}

		.modal-close:hover {
			min-width: 120px;
			padding: 8px;
			border-radius: 4px;
			font-size: 24px;
			border: none;
			color: $white;
			background: #470812;
			box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.35);
		}
	}

	/* tablet */
	@media (min-width: 768px) {
		#treatment-title {
			color: $red-01;
			font-size: 2.5em;
			display: flex;
			justify-content: center;
			padding: 1em 0 1em 0;
			text-align: center;
		}

		#treatment-list {
			display: flex;
			flex-direction: row;
			min-width: 100%;
			flex-wrap: nowrap;
			flex: 1;
			flex-shrink: initial;
			overflow: auto;
			white-space: nowrap;
			padding: 0 0 2em 0;
			justify-content: space-between;
		}

		.treatment-element {
			min-width: 16em;
			height: 16em;
			background-position: center;
			background-size: contain;
			background-repeat: no-repeat;
			content: '';
			margin: 0 1em 0 1em;
			display: flex;
			align-items: flex-end;
			justify-content: center;
			color: $white;
			font-family: 'Montserrat';
			font-size: 1em;
		}

		.treatment-title {
			background-color: $red-01;
			padding: 0.5em 1em;
			text-align: center;
			width: 100%;
			border-radius: 40px;
		}

		#harmonizacao-facial {
			background-image: url('~assets/images/home-assets/harmonizacao-facial.png');
		}

		#invisalign {
			background-image: url('~assets/images/home-assets/invisalign.png');
		}

		#dor-orofacial {
			background-image: url('~assets/images/home-assets/dor-orofacial.png');
		}

		#endodontia {
			background-image: url('~assets/images/home-assets/endodontia.png');
		}

		#laserterapia {
			background-image: url('~assets/images/home-assets/laserterapia.png');
		}

		#implantes {
			background-image: url('~assets/images/home-assets/implantes.png');
		}

		#estetica-dental {
			background-image: url('~assets/images/home-assets/estetica-dental.png');
		}

		#clareamento {
			background-image: url('~assets/images/home-assets/clareamento.png');
		}

		.treatment-modal {
			width: 100%;
			height: 100%;
			flex-direction: column;
			background-color: $light-red-02;
			color: $white;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.inner-modal {
			width: 100%;
			height: 100%;
			color: $red-01;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
		}

		.logo-modal {
			margin: 0 !important;
		}

		.modal-title {
			font-weight: 400;
			font-size: 32px;
			margin-bottom: 32px;
			text-align: left;
			padding-bottom: 64px;
			border-bottom: 8px solid #670c1b;
			border-radius: 50%;
		}

		.modal-text {
			font-size: 24px;
			width: 80%;
			line-height: 1.6;
			text-align: center;
			margin-bottom: 40px;
		}

		.modal-close {
			min-width: 120px;
			padding: 8px;
			border-radius: 4px;
			font-size: 24px;
			border: none;
			background-color: $red-01;
			color: $white;
			box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
			cursor: pointer;
		}

		.modal-close:hover {
			min-width: 120px;
			padding: 8px;
			border-radius: 4px;
			font-size: 24px;
			border: none;
			color: $white;
			background: #470812;
			box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.35);
		}
	}

	/* web */
	@media (min-width: 1440px) {
		#treatment-title {
			color: $red-01;
			font-size: 3.5em;
			display: flex;
			justify-content: center;
			padding: 1em 0 1em 0;
			text-align: center;
		}

		#treatment-list {
			display: flex;
			flex-direction: row;
			min-width: 100%;
			flex-wrap: wrap;
			justify-content: space-between;
			flex: 1;
			flex-shrink: initial;
			overflow: auto;
			padding: 0 0 2em 0;
		}

		.treatment-element {
			min-width: 33%;
			background-position: center;
			background-size: contain;
			background-repeat: no-repeat;
			content: '';
			margin: 0 0em 2em 0em;
			display: flex;
			align-items: flex-end;
			justify-content: center;
			color: $white;
			font-family: 'Montserrat';
			font-size: 1.2em;
		}

		.treatment-title {
			background-color: $red-01;
			padding: 0.5em 1em;
			text-align: center;
			width: 60%;
			border-radius: 40px;
		}

		#harmonizacao-facial {
			background-image: url('~assets/images/home-assets/harmonizacao-facial.png');
		}

		#invisalign {
			background-image: url('~assets/images/home-assets/invisalign.png');
		}

		#dor-orofacial {
			background-image: url('~assets/images/home-assets/dor-orofacial.png');
		}

		#endodontia {
			background-image: url('~assets/images/home-assets/endodontia.png');
		}

		#laserterapia {
			background-image: url('~assets/images/home-assets/laserterapia.png');
		}

		#implantes {
			background-image: url('~assets/images/home-assets/implantes.png');
		}

		#estetica-dental {
			background-image: url('~assets/images/home-assets/estetica-dental.png');
		}

		#clareamento {
			background-image: url('~assets/images/home-assets/clareamento.png');
		}

		.treatment-modal {
			width: 100%;
			height: 100%;
			flex-direction: column;
			background-color: $light-red-02;
			color: $white;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.inner-modal {
			width: 100%;
			height: 100%;
			color: $red-01;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
		}

		.logo-modal {
			margin: 0 !important;
		}

		.modal-title {
			font-weight: 400;
			font-size: 48px;
			margin-bottom: 32px;
			text-align: left;
			padding-bottom: 64px;
			border-bottom: 8px solid #670c1b;
			border-radius: 50%;
		}

		.modal-text {
			font-size: 24px;
			width: 40%;
			line-height: 1.6;
			text-align: center;
			margin-bottom: 40px;
		}

		.modal-close {
			min-width: 120px;
			padding: 8px;
			border-radius: 4px;
			font-size: 24px;
			border: none;
			background-color: $red-01;
			color: $white;
			box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
			cursor: pointer;
		}

		.modal-close:hover {
			min-width: 120px;
			padding: 8px;
			border-radius: 4px;
			font-size: 24px;
			border: none;
			color: $white;
			background: #470812;
			box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.35);
		}
	}
</style>
