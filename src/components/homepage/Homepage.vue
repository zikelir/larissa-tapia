<template>
    <div>
        <div class="home-container">
            <Intro/>
            <Treatments/>
            <Testimonials/>
            <Contacts />
        </div>
    </div>
</template>

<script>
import Intro from './intro/Intro.vue'
import Treatments from './treatments/Treatments.vue'
import Testimonials from './testimonials/Testimonials.vue'
import Contacts from './contacts/Contacts.vue'

export default {
  name: 'Homepage',
  components: {
     Intro,
     Treatments,
     Testimonials,
     Contacts
  }
}
</script>

<style>
.home-container {
    font-family: "Montserrat";
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
