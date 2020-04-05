<template>
    <div id="footer">
      <div id="social-media-icons-footer">
        <div id="footer-phones">
          <div class="footer-social-media-row"><div id="zap-footer-icon" />+55 19 97654-6644</div>
          <div class="footer-social-media-row"><div id="phone-footer-icon" />+55 19 32131936</div>
        </div>
        <div id="footer-medias">
          <div class="footer-social-media-row"><div id="insta-footer-icon" />dralarissatapia</div>
          <div class="footer-social-media-row"><div id="face-footer-icon" />dralarissatapia</div>
        </div>
      </div>
      <div id="made-with-love">Made with ❤ by pvselano</div>
    </div>
</template>

<script>
export default {
  name: 'Footer',
  components: {}
}
</script>

<style>

/* mobile */
@media (max-width: 767px) {
  #footer {
    display: flex;
    align-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-image: url("../../assets/footer-assets/footer-bg.svg");
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;
  }
  
  #social-media-icons-footer {
    display: flex;
    flex-direction: column;
    margin-top: 6em;
  }

  .footer-social-media-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 1.5em;
    margin-top: 1em;
  }

  #footer-phones {
    display: flex;
    flex-direction: column;
  }

  #zap-footer-icon {
    width: 1.5em;
    height: 1.5em;
    background-image: url('../../assets/footer-assets/zap-white.svg');
    content: '';
    background-repeat: no-repeat;
    background-size: contain;
    margin-right: .5em;
  }

  #phone-footer-icon {
    width: 1.5em;
    height: 1.5em;
    background-image: url('../../assets/footer-assets/phone-white.svg');
    content: '';
    background-repeat: no-repeat;
    background-size: contain;
    margin-right: .5em;
  }

  #footer-medias {
    display: flex;
    flex-direction: column;
  }

  #insta-footer-icon {
    width: 1.5em;
    height: 1.5em;
    background-image: url('../../assets/footer-assets/insta-white.svg');
    content: '';
    background-repeat: no-repeat;
    background-size: contain;
    margin-right: .5em;
  }

  #face-footer-icon {
    width: 1.5em;
    height: 1.5em;
    background-image: url('../../assets/footer-assets/fb-white.svg');
    content: '';
    background-repeat: no-repeat;
    background-size: contain;
    margin-right: .5em;
  }

  #made-with-love {
    padding: 2em 0;
  }

}
/* tablet */
@media (min-width: 768px) {
  #footer {
    display: flex;
    align-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-image: url("../../assets/footer-assets/footer-bg.svg");
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;
  }
  
  #social-media-icons-footer {
    display: flex;
    flex-direction: row;
    margin: 6em 2em 0em 2em;
    width: 100%;
    justify-content: space-around;
  }

  .footer-social-media-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 1.5em;
    margin: 3em 1em 2em 1em;
  }

  #footer-phones {
    display: flex;
    flex-direction: row;
  }

  #zap-footer-icon {
    width: 1.5em;
    height: 1.5em;
    background-image: url('../../assets/footer-assets/zap-white.svg');
    content: '';
    background-repeat: no-repeat;
    background-size: contain;
    margin-right: .5em;
  }

  #phone-footer-icon {
    width: 1.5em;
    height: 1.5em;
    background-image: url('../../assets/footer-assets/phone-white.svg');
    content: '';
    background-repeat: no-repeat;
    background-size: contain;
    margin-right: .5em;
  }

  #footer-medias {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  #insta-footer-icon {
    width: 1.5em;
    height: 1.5em;
    background-image: url('../../assets/footer-assets/insta-white.svg');
    content: '';
    background-repeat: no-repeat;
    background-size: contain;
    margin-right: .5em;
  }

  #face-footer-icon {
    width: 1.5em;
    height: 1.5em;
    background-image: url('../../assets/footer-assets/fb-white.svg');
    content: '';
    background-repeat: no-repeat;
    background-size: contain;
    margin-right: .5em;
  }

  #made-with-love {
    padding: 2em 0;
  }
    
}

@media (min-width: 1440px) {
  #footer {
    display: flex;
    align-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-image: url("../../assets/footer-assets/footer-bg.svg");
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;
  }
  
  #social-media-icons-footer {
    display: flex;
    flex-direction: row;
    margin: 6em 2em 0em 2em;
    width: 100%;
    justify-content: space-around;
  }

  .footer-social-media-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 1.5em;
    margin: 3em 1em 2em 1em;
  }

  #footer-phones {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 50%;
  }

  #zap-footer-icon {
    width: 1.5em;
    height: 1.5em;
    background-image: url('../../assets/footer-assets/zap-white.svg');
    content: '';
    background-repeat: no-repeat;
    background-size: contain;
    margin-right: .5em;
  }

  #phone-footer-icon {
    width: 1.5em;
    height: 1.5em;
    background-image: url('../../assets/footer-assets/phone-white.svg');
    content: '';
    background-repeat: no-repeat;
    background-size: contain;
    margin-right: .5em;
  }

  #footer-medias {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 50%;
  }

  #insta-footer-icon {
    width: 1.5em;
    height: 1.5em;
    background-image: url('../../assets/footer-assets/insta-white.svg');
    content: '';
    background-repeat: no-repeat;
    background-size: contain;
    margin-right: .5em;
  }

  #face-footer-icon {
    width: 1.5em;
    height: 1.5em;
    background-image: url('../../assets/footer-assets/fb-white.svg');
    content: '';
    background-repeat: no-repeat;
    background-size: contain;
    margin-right: .5em;
  }

  #made-with-love {
    padding: 2em 0;
  }
  
}



</style>
