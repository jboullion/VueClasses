<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" id="header">
        <router-link class="navbar-brand" to="/" exact>Navbar</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link to="/character" class="nav-link" active-class="active">Info</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/skills" class="nav-link" active-class="active">Skills</router-link>
                </li>
            </ul>
            <!--
            <form class="form-inline">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
            </form>
            -->
        </div>
    </nav>
</template>

<script>

    export default {

    }
</script>

<style>
    #header { margin-bottom: 30px; }
</style>
