<template>
    <div id="footer">
      <div id="social-media-icons">
        <div>+55 19 97654-6644</div>
        <div>+55 19 32131936</div>
        <div>dralarissatapia</div>
        <div>dralarissatapia</div>
      </div>
      <div>Made with ❤ by pvselano</div>
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
    padding: 2.5em 0;
    color: #fff;
  }

  #social-media-icons {
    display: flex;
    flex-direction: column;
  }
    
}
/* tablet */
@media (min-width: 768px) {
  #footer {
    display: flex;
    align-content: center;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 80px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
    
}

@media (min-width: 769px) {
  #footer {
    display: flex;
    align-content: center;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 80px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  
}



</style>
