import Vue from 'vue';
import Vuex from 'vuex';

//modules
import character from './modules/character';
//import user from './modules/user';

//global
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        
    },
    getters,
    mutations,
    actions,
    modules: { 
        character
    }
});