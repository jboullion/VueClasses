<template>
    <div class="row">
        <form>
            <div class="col-sm-12 col-md-6 col-md-offset-3">
                <label>New Quote</label>
                <textarea class="form-control" rows="3" v-model="quote"></textarea>
            </div>
            <div class="col-sm-12 col-md-6 col-md-offset-3">
                <button class="btn btn-primary" @click.prevent="createNew">Create New</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                quote: ''
            }
        },
        methods: {
            createNew () {
                if(! this.quote.length) return; 
                this.$emit('quoteCreated', this.quote);
                this.quote = '';
            }
        }
    }
</script>

<style>

</style>
