import CharacterInfo from './components/pages/character/Info.vue';
import CharacterSkills from './components/pages/character/SkillList.vue';

/*
const CharacterInfo = resolve => {
    require.ensure(['./components/pages/character/Info.vue'], () => {
        resolve(require('./components/pages/character/Info.vue'));
    }, 'user');
};

const CharacterSkills = resolve => {
    require.ensure(['./components/pages/character/SkillList.vue'], () => {
        resolve(require('./components/pages/character/SkillList.vue'));
    }, 'user');
};
*/


export const routes = [
    {
        path: '', name: 'home', components: {
            default: CharacterInfo
        }
    },
    {
        path: '/character', components: {
            default: CharacterInfo
        }
    },
    {
        path: '/skills', components: {
            default: CharacterSkills
        }
    },
    {path: '*', redirect: '/'}
    /*
    children: [
        {path: '', component: UserStart},
        {
            path: ':id', component: UserDetail, beforeEnter: (to, from, next) => {
            console.log('inside route setup');
            next();
        }
        },
        {path: ':id/edit', component: UserEdit, name: 'userEdit'}
    ]
    },*/
    //{path: '/redirect-me', redirect: {name: 'home'}},
    
];