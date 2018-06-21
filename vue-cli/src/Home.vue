<template>
  <div id="home">
    <app-server v-for="(server, s) in 5" v-bind:key="s" ></app-server>
  </div>
</template>

<script>
    import ServerStatus from './ServerStatus.vue';

    export default {
        components: { 
            'app-server': ServerStatus
        }
    }
</script>

<style>

</style>