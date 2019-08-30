import {dbAccessGetNouns, dbAccessInsertNoun} from '../../dbaccess'

const nounmodule = {
    state: {
        nouns: []
    },
    getters: {
        getNounCount(state){
            return state.nouns.length;
        },
        getSessionNouns: (state) => (ids) => {
            return state.nouns.filter(noun => ids.includes(parseInt(noun.id)));
        },
        getNextNounId(state){
            return state.nouns.length + 1;
        }
    },
    mutations: {
        addNoun(state, noun) {
            state.nouns.push(noun);
        },
        setNouns(state, nouns) {
            state.nouns = nouns;
        }
    },
    actions: {
        init({commit}){
            dbAccessGetNouns().then(function(snapshot) {
                commit('setNouns', snapshot.val())
            });
        },
        addNoun({commit}, noun){
            commit('addNoun', noun);
            dbAccessInsertNoun(noun);
        }
    }
} 

export default nounmodule;