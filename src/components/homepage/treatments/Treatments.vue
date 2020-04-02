<template>
    <div id="home-treatments">
               <div id="treatment-title">Conheça os tratamentos</div>
               <div id="treatment-list">
                  <div class="treatment-element" id="harmonizacao-facial"/>
                  <div class="treatment-element" id="invisalign"/>
                  <div class="treatment-element" id="dor-orofacial"/>
                  <div class="treatment-element" id="endodontia"/>
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
    font-family: "Nunito"
}

/* mobile */
@media (max-width: 375px) {
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
         margin: 0 1em 0 1em;
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
@media (max-width: 768px) {
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
         margin: 0 1em 0 1em;
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
@media (min-width: 769px) {
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
         min-width: 18em;
         height: 20em;
         background-position: center;
         background-size: contain;
         background-repeat: no-repeat;
         content: '';
         margin: 0 2em 0 2em;
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
