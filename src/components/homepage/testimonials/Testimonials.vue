<template>
    <div id="home-testimonials">
               <div id="testimonial-title">E os depoimentos de nossos pacientes</div>
               <div id="testimonial-list">
                  <div class="testimonial-element" />
                  <div class="testimonial-element" />
                  <div class="testimonial-element" />
                  <div class="testimonial-element" />
               </div>
               <div id="testimonial-divider">
                  <div class="testimonial-next-arrow" />
               </div>
    </div>
</template>

<script>


export default {
  name: 'Testimonial',
  components: {

  }
}
</script>

<style>
#home-testimonials {
    font-family: "Montserrat"
}

/* mobile */
@media (max-width: 767px) {
     #testimonial-title {
         box-sizing: border-box;
         color: #670C1B;
         font-size: 2em;
         display: flex;
         justify-content: center;
         padding: 1em 2em;
         text-align: center;
     }

     #testimonial-list {
         box-sizing: border-box;
         display: flex;
         flex-direction: row;
         min-width: 100%;
         flex-wrap: nowrap;
         flex: 1;
         flex-shrink: initial;
         overflow: auto;
        white-space: nowrap;
     }

     .testimonial-element {
         box-sizing: border-box;
         display: flex;
         min-width: 12em;
         height: 16em;
         background-position: center;
         background-size: contain;
         background-repeat: no-repeat;
         content: '';
         margin: 0 1em 1em 1em;
         background-image: url('../../../assets/home-assets/testimonial.png');
     }


     #testimonial-divider {
         width: 100%;
         justify-content: center;
         align-items: center;
         display: flex;
     }

    .testimonial-next-arrow {
        box-sizing: border-box;
        background-image: url("../../../assets/home-assets/next-arrow-red.svg");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        content: '';
        width: 4em;
        height: 4em;
     }
}

/* tablet */
@media (min-width: 768px) {
    #testimonial-title {
         box-sizing: border-box;
         color: #670C1B;
         font-size: 2.5em;
         display: flex;
         justify-content: center;
         padding: 1em 2em;
         text-align: center;
     }

     #testimonial-list {
         box-sizing: border-box;
         display: flex;
         flex-direction: row;
         min-width: 100%;
         flex-wrap: nowrap;
         flex: 1;
         flex-shrink: initial;
         overflow: auto;
        white-space: nowrap;
        justify-content: space-between;
     }

     .testimonial-element {
         box-sizing: border-box;
         display: flex;
         min-width: 12em;
         height: 16em;
         background-position: center;
         background-size: contain;
         background-repeat: no-repeat;
         content: '';
         margin: 0 1em 1em 1em;
         background-image: url('../../../assets/home-assets/testimonial.png');
     }


    #testimonial-divider {
         width: 100%;
         justify-content: center;
         align-items: center;
         display: flex;
    }

    .testimonial-next-arrow {
        box-sizing: border-box;
        background-image: url("../../../assets/home-assets/next-arrow-red.svg");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        content: '';
        width: 4em;
        height: 4em;
     }
}

/* web */
@media (min-width: 1440px) {
   #testimonial-title {
         box-sizing: border-box;
         color: #670C1B;
         font-size: 3.5em;
         display: flex;
         justify-content: center;
         padding: 1em 2em;
         text-align: center;
     }

     #testimonial-list {
         box-sizing: border-box;
         display: flex;
         flex-direction: row;
         min-width: 100%;
         flex-wrap: wrap;
         justify-content: space-between;
     }

     .testimonial-element {
         box-sizing: border-box;
         display: flex;
         min-width: 20em;
         height: 24em;
         background-position: center;
         background-size: contain;
         background-repeat: no-repeat;
         content: '';
         margin: 0 1em 1em 1em;
         background-image: url('../../../assets/home-assets/testimonial.png');
     }


    #testimonial-divider {
         width: 100%;
         justify-content: center;
         align-items: center;
         display: flex;
    }
         
    .testimonial-next-arrow {
        box-sizing: border-box;
        background-image: url("../../../assets/home-assets/next-arrow-red.svg");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        content: '';
        width: 6em;
        height: 6em;
        margin-bottom: 2em;
     }
}


</style>
