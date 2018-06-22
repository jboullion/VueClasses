import Vue from 'vue'
import App from './App.vue'
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import ServerList from './components/ServerList.vue';
import ServerDetails from './components/ServerDetails.vue';
//import Server from './Server.vue';

Vue.component('app-header', Header);
Vue.component('app-footer', Footer);
Vue.component('app-server-list', ServerList);
Vue.component('app-server-details', ServerDetails);
//Vue.component('app-server', Server);

new Vue({
  el: '#app',
  render: h => h(App)
})
