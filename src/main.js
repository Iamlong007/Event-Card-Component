import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import '@/assets/css/tailwind.css';
require('typeface-space-mono')
require("typeface-roboto");
require("typeface-playfair-display");
require("typeface-quicksand");
require('feather-icons');
import AOS from 'aos';
import 'aos/dist/aos.css';
import "animate.css";


Vue.config.productionTip = false

new Vue({
  created () {
    AOS.init()
  },
  render: h => h(App)
}).$mount('#app')
