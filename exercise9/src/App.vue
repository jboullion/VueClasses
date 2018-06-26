<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->
                    
                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                    <app-full-name v-model="userData.name"></app-full-name>

                    <div class="form-group">
                        <label for="email">Email</label>
                        <input
                                type="text"
                                id="email"
                                class="form-control"
                                v-model.trim="userData.email">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                                type="password"
                                id="password"
                                class="form-control"
                                v-model="userData.password">
                    </div>
                   <label for="storeDataY">
                        <input
                                type="radio"
                                id="storeDataY"
                                value="Yes"
                                v-model="userData.store"> Yes
                    </label>
                    <label for="storeDataN">
                        <input
                                type="radio"
                                id="storeDataN"
                                value="No"
                                v-model="userData.store"> No
                    </label>
                
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->
                    <button
                            class="btn btn-primary"
                            @click.prevent="submit()"
                            >Submit!
                    </button>
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ userData.name.fname }} {{ userData.name.lname }}</p>
                        <p>Email: {{ userData.email }}</p>
                        <p>Password: {{ userData.password }}</p>
                        <p>Store in Database?: {{ userData.store }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FullName from './FullName.vue';

    export default {
        components: {
            'app-full-name': FullName
        },
        data() {
            return {
                userData: {
                    email: '',
                    password: '',
                    name: {
                        fname: '',
                        lname: '',
                    },
                    store: 'No',
                },
                isSubmitted: false
            }
        },
        methods: {
            submit (){
                this.isSubmitted = true;
            }
        }
    }
</script>

<style>
</style>
