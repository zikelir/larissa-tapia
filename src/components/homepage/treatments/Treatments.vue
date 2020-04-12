<template>
    <div id="home-treatments">
               <div id="treatment-title">Conheça os tratamentos</div>
               <div id="treatment-list">
                  <div class="treatment-element" id="harmonizacao-facial"><div class="treatment-title">Harmonização Facial</div></div>
                  <div class="treatment-element" id="dor-orofacial"><div class="treatment-title">Dor Orofacial</div></div>
                  <div class="treatment-element" id="invisalign"><div class="treatment-title">Invisalign</div></div>
                  <div class="treatment-element" id="endodontia"><div class="treatment-title">Endodontia</div></div>
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
    font-family: "Roboto"
}

/* mobile */
@media (min-width: 0px) {
     #treatment-title {
         color: #670C1B;
         font-size: 1.5em;
         font-weight: bold;
         display: flex;
         justify-content: center;
         padding: 1.5em 0 1em 0;
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
         font-weight: bold;
         color: white;
         font-family: "Roboto";
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
}

/* tablet */
@media (min-width: 768px) {
    #treatment-title {
         color: #670C1B;
         font-size: 1.5em;
         font-weight: bold;
         display: flex;
         justify-content: center;
         padding: 1.5em 0 1em 0;
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
         font-weight: bold;
         color: white;
         font-family: "Roboto";
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
}

/* web */
@media (min-width: 1440px) {
   #treatment-title {
         color: #670C1B;
         font-size: 2em;
         font-weight: bold;
         display: flex;
         justify-content: center;
         padding: 1.5em 0 1.5em 0;
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
         min-width: 15em;
         height: 20em;
         background-position: center;
         background-size: contain;
         background-repeat: no-repeat;
         content: '';
         margin: 0 2em 0 2em;
         display: flex;
         align-items: flex-end;
         justify-content: center;
         font-weight: bold;
         color: white;
         font-family: "Roboto";
         font-size: 1.2em;
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
}


</style>
