new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            showAlert: function() {
                alert('Alert Showing!');
            },
            updateValue: function() {
                this.value = event.target.value;
            }
        }
    });