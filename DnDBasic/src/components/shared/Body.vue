<template>
    <div class="container" id="body">
        <router-view></router-view>
    </div>
</template>

<script>
    import Info from '../pages/character/Info.vue';

    export default {
        components: {
            appCharacterInfo: Info
        }
    }
</script>

<style>

</style>
