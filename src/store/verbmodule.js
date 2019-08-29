import allVerbs from '../data/verbs.js';

const verbmodule = {
    state: {
        verbs: allVerbs
    },
    mutations: {
        addVerb(state, verb){
            state.verbs.push(verb);
        }
    },
    getters: {
        verbCount(state){
            return state.verbs.length;
        },
        sessionVerbs: (state) => (ids) => {
            return state.verbs.filter(verb => ids.includes(verb.id));
        }
    }
} 

export default verbmodule;