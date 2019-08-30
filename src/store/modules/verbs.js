import {dbAccessGetVerbs, dbAccessInsertVerb} from '../../dbaccess'

const verbmodule = {
    state: {
        verbs: []
    },
    getters: {
        getVerbCount(state){
            return state.verbs.length;
        },
        getSessionVerbs: (state) => (ids) => {
            return state.verbs.filter(verb => ids.includes(parseInt(verb.id)));
        },
        getNextVerbId(state){
            return state.verbs.length + 1;
        }
    },
    mutations: {
        addVerb(state, verb){
            state.verbs.push(verb);
        },
        setVerbs(state, verbs){
            state.verbs = verbs;
        }
    },
    actions: {
        init({commit}) {
            dbAccessGetVerbs().then(function(snapshot) {
                commit('setVerbs', snapshot.val());
            });
        },
        addVerb({commit}, verb) {
            commit('addVerb', verb);
            dbAccessInsertVerb(verb);
        }
    }
} 

export default verbmodule;