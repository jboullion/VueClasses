<template>
    <div class="row">
        <div class="form-group col-6 col-sm-4 col-md-3">
            <label for="character-hp-current">Current HP {{ currentHp }}</label>
            <input 
                type="number" 
                class="form-control" 
                id="character-hp-current" 
                :value="currentHp" 
                @input="currentHpUpdate($event.target.value)">
        </div>
        <div class="form-group col-6 col-sm-4 col-md-3">
            <label for="character-hp-max">Max Hit Points</label>
            <input type="number" class="form-control" id="character-hp-max">
        </div>
        <div class="form-group col-6 col-sm-4 col-md-3">
            <label for="character-ac">AC</label>
            <input type="number" class="form-control" id="character-ac">
        </div>
        <div class="form-group col-6 col-sm-4 col-md-3">
            <label for="character-speed">Speed</label>
            <input type="number" class="form-control" id="character-speed">
        </div>
    </div>
</template>

<script>
    import { mapActions,mapGetters } from 'vuex';
    import * as types from '../../../store/types';

    export default {
        methods: {
            ...mapActions({
                currentHpUpdate: types.CURRENT_HP_UPDATE
            })
        },
        computed: {
            ...mapGetters({
                currentHp: types.CURRENT_HP
            })
        }
    }
</script>

<style>

</style>
