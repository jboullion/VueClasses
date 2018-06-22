import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
    updateStatus(serverStatus) {
      this.$emit('serverStatusUpdated', serverStatus);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
