<template>
    <div>
        <div id="contacts-welcome">
            <div id="contacts-call">
               <div class="schedule-today">Agende hoje a avaliação!</div>
               <div class="contact-numbers">
                  <div class="contact-number"><div id="contact-zap" />+55 19 97654-6644</div>
                  <div class="contact-number"><div id="contact-phone" />+55 19 3213-1936</div>
               </div>
               <div class="located-in-call">Estamos localizados na</div>
            </div>
            <div id="location">
               <div>
                  <iframe
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.6799031827195!2d-47.07373998503466!3d-22.88828008502119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c61b9508de13%3A0x720a402aa6fef35a!2sRua%20Frei%20Manoel%20da%20Ressurrei%C3%A7%C3%A3o%2C%20974%20-%20Jardim%20Guanabara%2C%20Campinas%20-%20SP%2C%2013073-221!5e0!3m2!1spt-BR!2sbr!4v1586022677012!5m2!1spt-BR!2sbr"
                  frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0" id="home-map">
                  </iframe>
                  </div>
               <div>Rua Frei Manoel da Ressurreição, 974 - Jardim Guanabara, Campinas - SP, 13073-221</div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
  name: 'contacts',
  components: {
  }
}
</script>

<style>
.home-container {
    font-family: "Nunito"
}

/* mobile */
@media (max-width: 767px) {
   #contacts-welcome {
      box-sizing: border-box;
      background: linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url("../../../assets/home-assets/contact-bg.png");
      background-repeat: no-repeat;
      max-width: 100%;
      height: 667px;
      display: flex;
      flex-direction: column;
      color: #fff;
      padding: 0 !important;
   }

   #contacts-call {
      display: flex;
      flex-direction: column;

   }

   .schedule-today {
      display: flex;
      font-weight: bold;
      font-size: 1.5em;
      padding: 2em 0 1em 0;
      justify-content: center;
   }

   #home-map {
      width: 100%;
      height: 400px;
   }

   .contact-numbers {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      width: 100%;
   }

   .contact-number {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 1em;
   }

   .contact-number:nth-child(2) {
      margin-right: 9px;
   }

   #contact-zap {
      width: 1.5em;
      height: 1.5em;
      background-repeat: no-repeat;
      background-size: cover;
      content: '';
      background-image: url('../../../assets/home-assets/zap-white.svg');
      margin-right: .5em;
   } 

   #contact-phone {
      width: 1.5em;
      height: 1.5em;
      background-repeat: no-repeat;
      background-size: cover;
      content: '';
      background-image: url('../../../assets/home-assets/phone-white.svg');
      margin-right: .5em;
   }

   .located-in-call {
      display: flex;
      font-weight: 300;
      justify-content: center;
      margin: 2em 0 1em 0;
      font-size: 1.5em;
   }
}

/* tablet */
@media (min-width: 768px) {
    #contacts-welcome {
        box-sizing: border-box;
        background: linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url("../../../assets/home-assets/contact-bg.png");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        max-width: 100%;
        height: 667px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;  
        color: #fff;
        padding: 2.5em;
     }

     
}

/* web */
@media (min-width: 769px) {
   #contacts-welcome {
        box-sizing: border-box;
        background: linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url("../../../assets/home-assets/contact-bg.png");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        max-width: 100%;
        height: 663x;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;  
        color: #fff;
        padding: 2.5em;
     }

     
}


</style>
