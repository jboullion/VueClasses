new Vue({
    el: '#exercise',
    data: {
        value: 0,
        threshold: 37
    },
    watch: {
        result: function(value) {
            var vue = this;
            console.log('reseting');
            setTimeout(function() {    
                vue.value = 0;
            }, 5000);
        }
    },
    computed: {
        result: function() {
            console.log('computing');
            return this.value > this.threshold?'done':'not there yet';
        }
    }
});