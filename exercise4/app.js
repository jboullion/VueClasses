new Vue({
  el: '#exercise',
  data: {
    effect: true,
    effectRunning: false,
    effectInterval: null,
    large: 'large',
    accent: 'accent',
    userClass: '',
    userBoolean: false,
    userStyle: '',
    progressTime: 0,
    progressRunning: false,
    progressInterval: null
  },
  computed: {
    applyClass: function() {
        return {
            userClass: this.userBoolean
        }
    }
  },
  methods: {
    startEffect: function() {
      var vueThis = this;
      
      if(this.effectRunning){
        clearInterval(this.effectInterval);
      }else{
        this.effectInterval = setInterval(function() {
          vueThis.effect = !vueThis.effect;
        }, 1000);
      }
      
      this.effectRunning = !this.effectRunning;
      
    },
    isUserBoolean: function() {

      if(this.userBoolean == 'true'){
        this.userBoolean = true;
      }else{
        this.userBoolean = false;
      }

    },
    startProgress: function() {
      var vueThis = this;

      if(this.progressRunning){
        clearInterval(this.progressInterval);
      }else{
        this.progressInterval = setInterval(function() {
          vueThis.progressTime++;
        }, 100);
      }
      
      this.progressRunning = !this.progressRunning;
    }
  }
});
