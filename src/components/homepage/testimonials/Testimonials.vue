<template>
    <div id="home-testimonials">
               <div id="testimonial-title">E os depoimentos de nossos pacientes</div>
               <div id="testimonial-list">
                  <div class="testimonial-element" />
                  <div class="testimonial-element" />
                  <div class="testimonial-element" />
                  <div class="testimonial-element" />
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
    font-family: "Nunito"
}

/* mobile */
@media (max-width: 375px) {
     #testimonial-title {
         box-sizing: border-box;
         color: #670C1B;
         font-size: 1.5em;
         font-weight: bold;
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
}

/* tablet */
@media (max-width: 768px) {
    #testimonial-title {
         box-sizing: border-box;
         color: #670C1B;
         font-size: 1.5em;
         font-weight: bold;
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
}

/* web */
@media (min-width: 769px) {
   #testimonial-title {
         box-sizing: border-box;
         color: #670C1B;
         font-size: 1.5em;
         font-weight: bold;
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
}


</style>
