import allNouns from '../data/nouns.js';

const nounmodule = {
    state: {
        nouns: allNouns
    },
    mutations: {
        addNoun(state, noun) {
            state.nouns.push(noun);
        }
    },
    getters: {
        nounCount(state){
            return state.nouns.length;
        },
        sessionNouns: (state) => (ids) => {
            return state.nouns.filter(noun => ids.includes(noun.id));
        }
    }
} 

export default nounmodule;