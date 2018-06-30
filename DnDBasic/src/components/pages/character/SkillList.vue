<template>
    <div class="row">
        <div class="col-md-5">
            <ul class="list-group">
                <app-skill v-for="n in 10" :key="n"></app-skill>
            </ul>
        </div>
        <div class="col-md-7">
            <app-skill-detail></app-skill-detail>
        </div>
    </div>
</template>

<script>
    import Skill from './Skill.vue';
    import SkillDetail from './SkillDetail.vue';

    export default {
        components: {
            appSkill: Skill,
            appSkillDetail: SkillDetail,
        }
    }
</script>

<style>

</style>
