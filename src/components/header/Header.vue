<template>
    <div id="header">
      <div id="sandwich-menu"></div>
      <div id="logo"></div>
      <div id="page-links">
        <a class="header-link" v-scroll-to="'#home-welcome'" style="border-bottom: 4px solid #670C1B">Home</a>
        <a class="header-link" v-scroll-to="'#home-treatments'">Tratamentos</a>
        <!-- <a class="header-link" href="">Equipe</a> -->
        <!-- <a class="header-link" href="">Consultório</a> -->
        <!-- <a class="header-link" href="">Avaliação</a> -->
        <a class="header-link" href="">Contato</a>
      </div>
      <div id="social-media-icons-header">
        <a id="zap" class="social-media-icon" href="https://wa.me/5521979347722/?text=hello" target="#"/>
        <a id="face" class="social-media-icon" href="http://facebook.com/dralarissatapia" target="#"/>
        <a id="insta" class="social-media-icon" href="http://instagram.com/dralarissatapia" target="#"/>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Header',
  components: {}
}
</script>

<style>

/* mobile */
@media (max-width: 767px) {
  #header {
    display: flex;
    align-content: center;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 140px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    position: fixed;
    background-color: white;
  }

  #sandwich-menu {
    height: 24px;
    min-width: 24px;
    margin: 0 1em;
    background-image: url("../../assets/header-assets/sandwich-menu.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    content: '';
  }

  #page-links {
    display: none;
  }

  #logo {
    background-image: url("../../assets/header-assets/logo.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    content: '';
    min-width: 140px;
    height: 120px;
  }

  #social-media-icons-header {
    display: flex;
    margin: 0 1em;
    flex-direction: column;
  }

  .social-media-icon {
    height: 24px;
    width: 24px;
    background-size: contain;
    background-repeat: no-repeat;
    content: '';
    cursor: pointer;
  }

  #zap {
    background-image: url("../../assets/header-assets/zap.svg");
    margin-right: 1em;
  }

  #face {
    background-image: url("../../assets/header-assets/face.svg");
      margin-right: 1em;
      margin-top: .5em;
  }
  
  #insta {
    background-image: url("../../assets/header-assets/insta.svg");
    margin-top: .5em;
  }
    
}
/* tablet */
@media (min-width: 768px) {
  #header {
    display: flex;
    align-content: center;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 140px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    position: fixed;
    background-color: white;
  }

  #sandwich-menu {
    height: 32px;
    min-width: 32px;
    margin: 0 1em;
    background-image: url("../../assets/header-assets/sandwich-menu.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    content: '';
  }

  #page-links {
    display: none;
  }

  #logo {
    background-image: url("../../assets/header-assets/logo.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    content: '';
    min-width: 160px;
    height: 180px;
  }

  #social-media-icons-header {
    display: flex;
    margin: 0 1em;
    flex-direction: row;
  }

  .social-media-icon {
    height: 32px;
    width: 32px;
    background-size: contain;
    background-repeat: no-repeat;
    content: '';
    cursor: pointer;
  }

  #zap {
    background-image: url("../../assets/header-assets/zap.svg");
    margin-right: 1em;
  }

  #face {
    background-image: url("../../assets/header-assets/face.svg");
      margin-right: 1em;
  }
  
  #insta {
    background-image: url("../../assets/header-assets/insta.svg");
  }
    
}

@media (min-width: 1440px) {
  #header {
    display: flex;
    align-content: center;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 160px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    position: fixed;
    background-color: white;
    max-width: 1600px;
  }

  #sandwich-menu {
    height: 34px;
    min-width: 40px;
    margin: 0 1em;
    background-image: url("../../assets/header-assets/sandwich-menu.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    content: '';
    display: none;
  }

  #logo {
    background-image: url("../../assets/header-assets/logo.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    content: '';
    margin-left: 40px;
    min-width: 10em;
    height: 10em;
  }

  #page-links {
    display: flex;
    margin-left: 2.5em;
  }

  .header-link {
    margin-left: 1em;
    color: #670C1B;
    text-decoration: none;
    font-size: 1.5em;
    padding-bottom: 4px;
    cursor: pointer;
  }

  .header-link:hover {
    font-weight: bold;
  }

  .header-link:first-child {
    margin-left: 0;
  }

  #social-media-icons-header {
    display: flex;
    margin: 0 2.5em 0 0;
    flex-direction: row;
  }

  .social-media-icon {
    height: 2.5em;
    width: 2.5em;
    background-size: contain;
    background-repeat: no-repeat;
    content: '';
    cursor: pointer;
  }

  #zap {
    background-image: url("../../assets/header-assets/zap.svg");
    margin-right: 1.5em;
  }

  #face {
    background-image: url("../../assets/header-assets/face.svg");
    margin-right: 1.5em;
  }
  
  #insta {
    background-image: url("../../assets/header-assets/insta.svg");
  }
    
}



</style>
