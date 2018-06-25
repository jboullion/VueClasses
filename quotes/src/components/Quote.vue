<template>
    <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="panel panel-default">
            <div class="panel-body">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
    .panel-body { cursor: pointer;  font-family: 'Permanent Marker', cursive; font-size: 20px; }
    .panel-body:hover { background-color: #eecccc; }
</style>
