<template>
    <div id="DnD">
        <app-header></app-header>
        <app-body></app-body>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from './components/shared/Header.vue';
    import Body from './components/shared/Body.vue';
    import Footer from './components/shared/Footer.vue';

    export default {
        components: {
            appHeader: Header,
            appBody: Body,
            appFooter: Footer
        }
    }
</script>

<style>

</style>
