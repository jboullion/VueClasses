import Vue from 'vue'
import App from './App.vue'

Vue.filter('to-lowercase', function(value) {
    return value.toLowerCase();
});

Vue.filter('appendLength', function(value) {
    return value +'('+value.length+')';
});

Vue.mixin({
    computed: {
        cmpStrReverse() {
            return this.reverseMe.split("").reverse().join("") +'('+this.reverseMe.length+')';
        }
    }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
