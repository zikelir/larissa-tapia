<template>
    <div id="home-treatments">
               <div id="treatment-title">Conheça os tratamentos</div>
               <div id="treatment-list">
                  <div class="treatment-element" id="harmonizacao-facial"><div class="treatment-title">Harmonização Orofacial</div></div>
                  <div class="treatment-element" id="endodontia"><div class="treatment-title">Endodontia</div></div>
                  <div class="treatment-element" id="estetica-dental"><div class="treatment-title">Estética Dental</div></div>
                  <div class="treatment-element" id="invisalign"><div class="treatment-title">Aparelhos Estéticos</div></div>
                  <div class="treatment-element" id="dor-orofacial"><div class="treatment-title">Dor Orofacial</div></div>
                  <div class="treatment-element" id="laserterapia"><div class="treatment-title">Laserterapia</div></div>
                  <div class="treatment-element" id="implantes"><div class="treatment-title">Implantes</div></div>
                  <div class="treatment-element" id="clareamento"><div class="treatment-title">Clareamento</div></div>
               </div>
    </div>
</template>

<script>


export default {
  name: 'Treatments',
  components: {

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
