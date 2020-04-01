<template>
    <div>
        <div class="home-container">
            <Intro/>
            <Treatments/>
        </div>
    </div>
</template>

<script>
import Intro from './intro/Intro.vue'
import Treatments from './treatments/Treatments.vue'

export default {
  name: 'Homepage',
  components: {
     Intro,
     Treatments
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
