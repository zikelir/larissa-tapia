<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Header />
    <Homepage />
  </div>
</template>

<script>
import Homepage from './components/homepage/Homepage.vue'
import Header from './components/header/Header.vue'

export default {
  name: 'App',
  components: {
    Homepage,
    Header,
  }
}
</script>

<style>
#app {
  margin: 0 !important;
  padding: 0 !important;
  width: 100%;
  height: 100%;
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
}

</style>
