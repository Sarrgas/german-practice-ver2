import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import verbmodule from './verbmodule.js';
import nounmodule from './nounmodule.js';
import notesmodule from './notesmodule.js';

export default new Vuex.Store({
    modules: {
        verbs: verbmodule,
        nouns: nounmodule,
        notes: notesmodule
    }
});