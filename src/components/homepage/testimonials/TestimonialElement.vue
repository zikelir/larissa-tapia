<template>
    <div id="testimonial-card">
      <div class="testimonial-img-container">
        <img :src="require(`@/assets/home-assets/testimonials-photos/${testimonial.img}`)" alt class="testmonial-photo" />
      </div>
      <div class="testmonial-personal-info">
        <div class="testmonial-name">{{testimonial.name}}</div>
        <div>{{testimonial.age}} anos</div>
        <div>{{testimonial.job}}</div>
      </div>
      <p class="testmonial-text">"{{testimonial.testimonial}}"</p>
      <!-- <div class="read-more-testmonial">Ler mais +</div> -->
    </div>
</template>

<script>


export default {
  name: 'TestimonialElement',
  components: {

  },
  props: ['testimonial']
}
</script>

<style>
#home-testimonials {
    font-family: "Montserrat"
}

/* mobile */
@media (max-width: 767px) {
     #testimonial-card {
       width: 320px;
       box-sizing: border-box;
       display: flex;
       flex-direction: column;
       margin-right: 1em;
       border-radius: 4px;
       background-color: #FFF5F7;
       margin-left: 1em;
     }

     .testimonial-img-container {
       display: flex;
       justify-content: center;
       border: 8px solid #FFCCD4;
       background-color: #FFEDF0;
       border-radius: 4px 4px 0 0;
     }

     .testmonial-photo {
       background-repeat: no-repeat;
       background-size: cover;
       width: 100%;
       height: 240px;
     }

    .testmonial-personal-info {
      border-top: none;
      background-color: #FFEDF0;
      color: #670C1B;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 16px;
      line-height: 1.6;
    }

    .testmonial-name {
      font-weight: 500;
    }

    .testmonial-text {
      display: flex;
      padding: 0em 1em 0 1em;
      white-space: pre-line;
      line-height: 1.4;
    }

    .read-more-testmonial {
      font-weight: bold;
      text-align: center;
      color: #670C1B;
      margin: 1em 0 1.5em 0;
      font-size: 12px;
    }
}

/* tablet */
@media (min-width: 768px) {
    #testimonial-card {
       width: 320px;
       box-sizing: border-box;
       display: flex;
       flex-direction: column;
       margin-right: 1em;
       border-radius: 4px;
       background-color: #FFF5F7;
       margin-left: 1em;
     }

     .testimonial-img-container {
       display: flex;
       justify-content: center;
       border: 8px solid #FFCCD4;
       background-color: #FFEDF0;
       border-radius: 4px 4px 0 0;
     }

     .testmonial-photo {
       background-repeat: no-repeat;
       background-size: cover;
       width: 100%;
       height: 240px;
     }

    .testmonial-personal-info {
      border-top: none;
      background-color: #FFEDF0;
      color: #670C1B;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 16px;
      line-height: 1.6;
    }

    .testmonial-name {
      font-weight: 500;
    }

    .testmonial-text {
      display: flex;
      padding: 0em 1em 0 1em;
      white-space: pre-line;
      line-height: 1.4;
    }

    .read-more-testmonial {
      font-weight: bold;
      text-align: center;
      color: #670C1B;
      margin: 1em 0 1.5em 0;
      font-size: 12px;
    }
}

/* web */
@media (min-width: 1440px) {
   #testimonial-card {
       width: 320px;
       box-sizing: border-box;
       display: flex;
       flex-direction: column;
       margin-right: 1em;
       border-radius: 4px;
       background-color: #FFF5F7;
       margin-left: 1em;
       margin-top: 1em;
     }

     .testimonial-img-container {
       display: flex;
       justify-content: center;
       border: 8px solid #FFCCD4;
       background-color: #FFEDF0;
       border-radius: 4px 4px 0 0;
     }

     .testmonial-photo {
       background-repeat: no-repeat;
       background-size: cover;
       width: 100%;
       height: 240px;
     }

    .testmonial-personal-info {
      border-top: none;
      background-color: #FFEDF0;
      color: #670C1B;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 16px;
      line-height: 1.6;
    }

    .testmonial-name {
      font-weight: 500;
    }

    .testmonial-text {
      display: flex;
      padding: 0em 1em 0 1em;
      white-space: pre-line;
      line-height: 1.4;
    }

    .read-more-testmonial {
      font-weight: bold;
      text-align: center;
      color: #670C1B;
      margin: 1em 0 1.5em 0;
      font-size: 12px;
    }
}


</style>
