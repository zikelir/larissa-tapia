<template>
    <div>
        <div class="home-container">
            <Intro/>
            <Treatments/>
            <Testimonials/>
        </div>
    </div>
</template>

<script>
import Intro from './intro/Intro.vue'
import Treatments from './treatments/Treatments.vue'
import Testimonials from './testimonials/Testimonials.vue'

export default {
  name: 'Homepage',
  components: {
     Intro,
     Treatments,
     Testimonials
  }
}
</script>

<style>
.home-container {
    font-family: "Nunito"
}

/* mobile */
@media (max-width: 375px) {
     
}

/* tablet */
@media (max-width: 768px) {
    
}

/* web */
@media (min-width: 769px) {
   
}


</style>
