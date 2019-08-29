import allNouns from '../data/nouns.js';

const nounmodule = {
    state: {
        nouns: allNouns
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