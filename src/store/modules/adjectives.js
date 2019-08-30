import { dbAccessGetAdjectives, dbAccessSetAdjectives } from "../../dbaccess";

const adjectivemodule = {
    state: {
        adjectives: []
    },
    getters: {
        getAdjectivesCount(state){
            return state.adjectives.length;
        },
        getSessionAdjectives: (state) => (ids) => {
            return state.adjectives.filter(adj => ids.includes(parseInt(adj.id)));
        },
        getNextAdjectiveId(state){
            return state.adjectives.length + 1;
        }
    },
    mutations: {
        addAdjective(state, adjective) {
            state.adjectives.push(adjective);
        },
        setAdjectives(state, adjectives){
            state.adjectives = adjectives;
        }
    },
    actions: {
        init({commit}){
            dbAccessGetAdjectives().then(function(snapshot){
                commit('setAdjectives', snapshot.val());
            });
        },
        addAdjective({commit, state}, adjective){
            commit('addAdjective', adjective);
            dbAccessSetAdjectives(state.adjectives);
        }
    }
}

export default adjectivemodule;