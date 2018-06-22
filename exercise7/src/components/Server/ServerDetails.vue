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
                required: true,
                default: {
                    id: 1,
                    name: 'Server 1',
                    status: 'OFFLINE'
                }
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
        created() {
            eventBus.$on('serverUpdated', (updatedServer) => {
                this.server = updatedServer;
            })
        }
    }
</script>

<style>

</style>
