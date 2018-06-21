import Vue from 'vue'
import Home from './Home.vue';
import App from './App.vue'

Vue.component('app-home', Home);

new Vue({
  el: '#app',
  render: h => h(App)
})
