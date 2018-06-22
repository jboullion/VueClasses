<template>
    <div class="col-xs-12 col-sm-6">
        <p>{{ getDetails() }}</p>
    </div>

</template>

<script>
    import { eventBus } from '../../main';

    export default {
        props: {
            server: {
                type: Object,
                required: true
            }
        },
        data () {
            return {
                
            }
        },
        methods: {
            getDetails(){
                return 'Server #'+this.server.id+', Status: '+this.server.status;
            }
        },
        watch: {
           
        }
    }
</script>

<style>

</style>
