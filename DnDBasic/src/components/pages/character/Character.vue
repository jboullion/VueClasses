<template>
    <div id="character">
        <app-character-info></app-character-info>
        <hr>
        <app-character-stats></app-character-stats>
    </div>
</template>

<script>
    import Info from './Info.vue';
    import Stats from './Stats.vue';

    export default {
        components: {
            appCharacterInfo: Info,
            appCharacterStats: Stats
        }
    }
</script>

<style>

</style>
