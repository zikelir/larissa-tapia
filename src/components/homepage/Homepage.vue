<template>
    <div>
        <div class="home-container">
            <div id="home-welcome">
                <div class="welcome-name">Larissa tapia</div>
                <div class="welcome-spec">Especialista em Dentística</div>
                <div class="welcome-phrase">Deixe o seu sorriso mudar o mundo, mas não deixe o mundo mudar seu sorriso.</div>
                <div class="welcome-next-arrow" />
            </div>

            <div id="">

            </div>

            <div>

            </div>
        </div>
    </div>
</template>

<script>


export default {
  name: 'Homepage',
  components: {
  }
}
</script>

<style>
.home-container {
    font-family: "Nunito"
}

/* mobile */
@media (max-width: 375px) {
     #home-welcome {
        box-sizing: border-box;
        background: linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url("../../assets/home-assets/home-intro-image-mobile.png");
        /* background-image: url("../../assets/home-assets/home-intro-image.png"); */
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        width: 100%;
        height: 667px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;  
        color: #fff;
        padding: 2.5em;
     }

     .welcome-name {
        margin-top: 2.5em;
        font-size: 3em;
     }

     .welcome-spec {
        margin-top: .5em;
        font-size: 1.5em;
        padding: 0 25%;
     }
     
     .welcome-phrase {
        margin-top: 1em;
        font-size: 1.5em;
        padding: 0 10%;
     }

     .welcome-next-arrow {
        box-sizing: border-box;
        background-image: url("../../assets/home-assets/next-arrow.svg");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        content: '';
        width: 4em;
        height: 4em;
        margin-top: 4em;
     }
}

/* tablet */
@media (max-width: 768px) {
    #home-welcome {
        box-sizing: border-box;
        background: linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url("../../assets/home-assets/home-intro-image-tablet.png");
        /* background-image: url("../../assets/home-assets/home-intro-image.png"); */
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        width: 100%;
        height: 667px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;  
        color: #fff;
        padding: 2.5em;
     }

     .welcome-name {
        margin-top: 2.5em;
        font-size: 3em;
     }

     .welcome-spec {
        margin-top: .5em;
        font-size: 1.5em;
        padding: 0 25%;
     }
     
     .welcome-phrase {
        margin-top: 1em;
        font-size: 1.5em;
        padding: 0 10%;
     }

     .welcome-next-arrow {
        box-sizing: border-box;
        background-image: url("../../assets/home-assets/next-arrow.svg");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        content: '';
        width: 4em;
        height: 4em;
        margin-top: 4em;
     }
}

/* web */
@media (min-width: 769px) {

}


</style>
