import {dbAccessGetNouns, dbAccessSetNouns} from '../../dbaccess'

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
                commit('setNouns', snapshot.val());
            });
        },
        addNoun({commit, state}, noun){
            commit('addNoun', noun);
            dbAccessSetNouns(state.nouns);
        }
    }
} 

export default nounmodule;