<template>
    <li class="list-group-item">{{ name }}</li>
</template>

<script>

    export default {
        data() {
            return {
                name: 'Skill: ' + (Math.random() * 10 )
            }
        }
    }
</script>

<style>

</style>
