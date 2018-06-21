<template>
  <div class="server">

    <h1>Server Name: {{ servername }}</h1>
    <hr />
    <button @click="changeStatus">Change Name</button>
  </div>
</template>

<script>
    export default {
        data () {
            return { 
                servername: 'Alpha'
            }
        },
        methods: {
            changeStatus() {
                this.servername = 'Omega';
            }
        }
    }
</script>

<style>

</style>