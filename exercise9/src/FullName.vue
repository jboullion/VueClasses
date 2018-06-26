<template>
    <div>
        <div class="form-group">
            <label for="fname">First Name</label>
            <input
                    type="text"
                    id="fname"
                    class="form-control"
                    @input="changed()"
                    v-model.trim="name.fname">
        </div>
        <div class="form-group">
            <label for="lname">Last Name</label>
            <input
                    type="text"
                    id="lname"
                    class="form-control"
                    @input="changed()"
                    v-model.trim="name.lname">
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                name: {
                    fname: '',
                    lname: ''
                }
            }
        },
        props: ['value'],
        methods: {
            changed() {
                this.$emit('input', this.name);
            }
        }
    }
</script>

<style scoped>

</style>