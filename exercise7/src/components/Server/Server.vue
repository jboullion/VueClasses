<template>
    <div class="panel" :class="['panel-' + server.status]">
        <div class="panel-heading">
            <h3 class="panel-title">{{ server.name }}</h3>
        </div>
        <div class="panel-body">
            <button type="button" class="btn btn-primary" @click="updateStatus('primary')">Primary</button>
            <button type="button" class="btn btn-info" @click="updateStatus('info')">Info</button>
            <button type="button" class="btn btn-danger" @click="updateStatus('danger')">Danger</button>
        </div>
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
            updateStatus(newStatus) {
                this.server.status = newStatus;
                eventBus.$emit('serverUpdated', this.server);
            }
        },
        watch: {
           
        }
    }
</script>

<style>

</style>
