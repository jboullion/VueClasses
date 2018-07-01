import * as types from '../types';

const state = {
    character: {
        currentHp: 10,
        maxHp: 20,
        name: 'Hain'
    }
};


const getters = {
    [types.CURRENT_HP]: state => {
        return state.character.currentHp;
    },
    [types.NAME]: state => {
        return state.character.name;
    },
};

const mutations = {
    [types.MUTATE_CURRENT_HP_UPDATE]: (state, payload) => {
        state.character.currentHp = payload;
    },
};

const actions = {
    [types.CURRENT_HP_UPDATE]: ({ commit }, payload) => {
        //HP muse be an integer so lets make sure we floor anything we get
        if(isNaN(payload)){
            payload = payload.replace(/\D/g,'');
        }
        
        commit(types.MUTATE_CURRENT_HP_UPDATE, payload);
    },
};

export default {
    state,
    mutations,
    actions,
    getters
}