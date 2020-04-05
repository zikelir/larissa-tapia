<template>
  <div id="app">
    <Header />
    <Homepage />
    <Footer />
  </div>
</template>

<script>
import Homepage from './components/homepage/Homepage.vue'
import Header from './components/header/Header.vue'
import Footer from './components/footer/Footer.vue'

export default {
  name: 'App',
  components: {
    Homepage,
    Header,
    Footer
  }
}
</script>

<style>
#app {
  margin: 0 !important;
  padding: 0 !important;
  max-width: 1600px;
  height: 100%;
  width: 100%;
  background-color: white;
}

a:visited {
  font-weight: bold;
  text-decoration: none;
}
/* h1 {
  font-family: "Century Gothic"
} */

body {
  font-family: "Nunito";
  margin: 0 !important;
  padding: 0 !important;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  width: 100%;
  overflow-x: hidden;
  background-color: #ededed;
  display: flex;
  justify-content: center;
  overflow-y: scroll;
}

</style>
