<template>
    <div class="col-xs-12 col-sm-6">
        <app-server v-for="(server, s) in servers" :server="server"></app-server>
    </div>
</template>

<script>
    import Server from './Server.vue';

    export default {
        components: {
            'app-server': Server,
        },
        data () {
            return {
                servers: [
                    {id: 1, name: 'Server 1', status: 'primary'},
                    {id: 2, name: 'Server 2', status: 'info'},
                    {id: 3, name: 'Server 3', status: 'danger'}
                ]
            }
        }
    }

</script>

<style>

</style>
