<template>
    <div id="home-treatments">
               <div id="treatment-title">Conheça os tratamentos</div>
               <div id="treatment-list">
                  <div class="treatment-element" id="harmonizacao-facial" v-on:click="show('harmonizacao')"><div class="treatment-title">Harmonização Orofacial</div></div>
                  <!-- <div class="treatment-element" id="endodontia"><div class="treatment-title">Endodontia</div></div> -->
                  <div class="treatment-element" id="estetica-dental" v-on:click="show('estetica')"><div class="treatment-title">Estética Dental</div></div>
                  <div class="treatment-element" id="dor-orofacial" v-on:click="show('dtm')"><div class="treatment-title">DTM e Dores Orofaciais</div></div>
                  <div class="treatment-element" id="invisalign" v-on:click="show('invisalign')"><div class="treatment-title">Aparelho Invisível</div></div>
                  <div class="treatment-element" id="implantes" v-on:click="show('implantes')"><div class="treatment-title">Implantes</div></div>
                  <div class="treatment-element" id="laserterapia" v-on:click="show('laserterapia')"><div class="treatment-title">Laserterapia</div></div>
                  <!-- <div class="treatment-element" id="clareamento"><div class="treatment-title">Clareamento</div></div> -->
               </div>

               <modal name="harmonizacao">
                     <h1>{{treatments.harmonizacao.title}}</h1>
                     <div>{{treatments.harmonizacao.text}}</div>
                    <button  v-on:click="hide()">close</button>
               </modal>
               <modal name="estetica">
                     <h1>{{treatments.estetica.title}}</h1>
                     <div>{{treatments.estetica.text}}</div>
                    <button  v-on:click="hide()">close</button>
               </modal>
               <modal name="dtm">
                     <h1>{{treatments.dtm.title}}</h1>
                     <div>{{treatments.dtm.text}}</div>
                    <button  v-on:click="hide()">close</button>
               </modal>
               <modal name="invisalign">
                     <h1>{{treatments.invisalign.title}}</h1>
                     <div>{{treatments.invisalign.text}}</div>
                    <button  v-on:click="hide()">close</button>
               </modal>
               <modal name="implante">
                     <h1>{{treatments.implante.title}}</h1>
                     <div>{{treatments.implante.text}}</div>
                    <button  v-on:click="hide()">close</button>
               </modal>
               <modal name="laserterapia">
                     <h1>{{treatments.laserterapia.title}}</h1>
                     <div>{{treatments.laserterapia.text}}</div>
                    <button  v-on:click="hide()">close</button>
               </modal>
    </div>
</template>

<script>


export default {
  name: 'Treatments',
     methods: {
          show (modalname) {
               this.$modal.show(modalname);
          },
          hide (modalname) {
               this.$modal.hide(modalname);
          }
     },
     data() {
          return {
               treatments: {
                    harmonizacao: {
                    title: "Harmonização orofacial ",
                    text: "O sucesso do momento! Fazemos uma minuciosa análise facial digital para identificar os pontos de desarmonia em sua face e então traçamos um plano de tratamento totalmente personalizado, contando com aplicações de toxina botulínica (famoso Botox), preenchimento com ácido hialurônico, fios de sustentação e bioestimuladores de colágeno como IPRF, Sculptra, Elance e Radiesse para alcançarmos uma face totalmente harmônica e rejuvenescida!"
               },
               estetica: {
               title: "Estética dental",
               text: "Por meio de protocolos restauradores de excelência, realizamos clareamento dental, facetas cerâmica, lentes de contato, onlays, inlays e coroas minimalistas, a fim de te presentear com aquele sorriso perfeito do jeito que você sempre sonhou!"  
               },
               dtm: {
                    title: "DTM e Dores orofaciais",
                    text: "Você sabia que enxaquecas, bruxismo, insônia, falta de concentração, irritabilidade, fraturas espontâneas de dentes e dores irradiadas em fundo de olho, coluna ou até mesmo zumbidos e estalidos no ouvido podem ser sintomas de DTM? E tudo isso é desencadeado pelo stress da rotina moderna! Temos o tratamento ideal para você dar adeus a todos esses sintomas desagradáveis! Tenha um vida mais leve e feliz!"
               },
               invisalign: {
                    title: "Aparelhos estéticos ",
                    text: "Que tal conseguir ver o resultado final do tratamento ortodôntico antes mesmo de colocar o aparelho? Pois é! Com o iTero, sistema de scaneamento digital, é possível! A partir daí conseguimos corrigir o alinhamento dos dentes com um aparelho totalmente estético, por meio de uma sequência de alinhadores transparentes, super confortáveis, que não interferem na sua fala e podem ser retirados nos momentos das refeições e higienização dos dentes! Essa é a tecnologia que só a Invisalign oferece! Com conforto, previsibilidade e segurança ! Agora é fácil ter um sorriso perfeito com dentes alinhados!"
               },
               implante: {
                    title: "Implante",
                    text: "Conseguimos devolver um único elemento dental perdido ou ainda reabilitar a boca inteira com implantes super estéticos e resistentes! Devolvendo auto-estima e conforto, além de prevenir futuros problemas sistêmicos causados pela ausência de dentes! "
               },
               laserterapia: {
                    title: "Laserterapia",
                    text: "Através de aplicações rápidas e totalmente indolores de laser de baixa potência, conseguimos controlar infeções, reduzir processos inflamatórios, curar lesões bucais como aftas e herpes, tratar dores faciais relacionadas aos músculos ou ATM. Revertemos quadros de parestesia e paralisias faciais, proporcionamos pós operatórios cirúrgicos muito mais rápidos e confortáveis. De maneira extremamente biológica e sem efeitos colaterais! Laser é vida! Apaixone-se você também! "
               }
               }
          }
     }
}
</script>

<style>
#home-treatments {
    font-family: "Montserrat";
     background-color: #FFEDF0;
}

/* mobile */
@media (min-width: 0px) {
     #treatment-title {
         color: #670C1B;
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
        padding:  0 0 2em 0; 
     }

     .treatment-element {
         min-width: 12em;
         height: 14em;
         background-position: center;
         background-size: contain;
         background-repeat: no-repeat;
         content: '';
         margin: 0 2em 0 1em;
         display: flex;
         align-items: flex-end;
         justify-content: center;
         color: white;
         font-family: "Montserrat";
         font-size: 1em;
     }

     .treatment-title {
          background-color: #670C1B;
          padding: .5em 1em;
          text-align: center;
          width: 100%;
          border-radius: 40px;
     }
    
    #harmonizacao-facial {
         background-image: url('../../../assets/home-assets/harmonizacao-facial.png');
    }

    #invisalign {
         background-image: url('../../../assets/home-assets/invisalign.png');
    }

    #dor-orofacial {
         background-image: url('../../../assets/home-assets/dor-orofacial.png');
    }

    #endodontia {
         background-image: url('../../../assets/home-assets/endodontia.png');
    }

    #laserterapia {
         background-image: url('../../../assets/home-assets/laserterapia.png');
    }

    #implantes {
         background-image: url('../../../assets/home-assets/implantes.png');
    }

    #estetica-dental {
         background-image: url('../../../assets/home-assets/estetica-dental.png');
    }

    
    #clareamento {
         background-image: url('../../../assets/home-assets/clareamento.png');
    }
}

/* tablet */
@media (min-width: 768px) {
    #treatment-title {
         color: #670C1B;
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
        padding:  0 0 2em 0; 
        justify-content: space-between;
     }

     .treatment-element {
         min-width: 12em;
         height: 14em;
         background-position: center;
         background-size: contain;
         background-repeat: no-repeat;
         content: '';
         margin: 0 1em 0 1em;
         display: flex;
         align-items: flex-end;
         justify-content: center;
         color: white;
         font-family: "Montserrat";
         font-size: 1em;
     }

     .treatment-title {
          background-color: #670C1B;
          padding: .5em 1em;
          text-align: center;
          width: 100%;
          border-radius: 40px;
     }
    
    #harmonizacao-facial {
         background-image: url('../../../assets/home-assets/harmonizacao-facial.png');
    }

    #invisalign {
         background-image: url('../../../assets/home-assets/invisalign.png');
    }

    #dor-orofacial {
         background-image: url('../../../assets/home-assets/dor-orofacial.png');
    }

    #endodontia {
         background-image: url('../../../assets/home-assets/endodontia.png');
    }
    
    #laserterapia {
         background-image: url('../../../assets/home-assets/laserterapia.png');
    }

    #implantes {
         background-image: url('../../../assets/home-assets/implantes.png');
    }

    #estetica-dental {
         background-image: url('../../../assets/home-assets/estetica-dental.png');
    }

    
    #clareamento {
         background-image: url('../../../assets/home-assets/clareamento.png');
    }
}

/* web */
@media (min-width: 1440px) {
   #treatment-title {
         color: #670C1B;
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
         padding:  0 0 2em 0; 
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
         color: white;
         font-family: "Montserrat";
         font-size: 1.2em;
     }

     .treatment-title {
          background-color: #670C1B;
          padding: .5em 1em;
          text-align: center;
          width: 60%;
          border-radius: 40px;
     }
    
    #harmonizacao-facial {
         background-image: url('../../../assets/home-assets/harmonizacao-facial.png');
    }

    #invisalign {
         background-image: url('../../../assets/home-assets/invisalign.png');
    }

    #dor-orofacial {
         background-image: url('../../../assets/home-assets/dor-orofacial.png');
    }

    #endodontia {
         background-image: url('../../../assets/home-assets/endodontia.png');
    }
    
    #laserterapia {
         background-image: url('../../../assets/home-assets/laserterapia.png');
    }

    #implantes {
         background-image: url('../../../assets/home-assets/implantes.png');
    }

    #estetica-dental {
         background-image: url('../../../assets/home-assets/estetica-dental.png');
    }

    
    #clareamento {
         background-image: url('../../../assets/home-assets/clareamento.png');
    }
}


</style>
