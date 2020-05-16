import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAnime from 'vue-animejs';
import App from './App.vue'
require('vue2-animate/dist/vue2-animate.min.css')


Vue.config.productionTip = false
Vue.use(VueRouter)
var VueScrollTo = require('vue-scrollto')
Vue.use(VueScrollTo)
Vue.use(VueAnime)


// You can also pass in the default options
Vue.use(VueScrollTo, {
  container: "body",
  duration: 250,
  easing: "ease-in",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

new Vue({
  render: h => h(App),
}).$mount('#app')
