import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import verbmodule from './modules/verbs.js';
import nounmodule from './modules/nouns.js';
import notesmodule from './modules/notes.js';
import adjectivesmodule from './modules/adjectives.js';

export default new Vuex.Store({
    modules: {
        verbs: verbmodule,
        nouns: nounmodule,
        adjectivesmodule,
        notes: notesmodule
    }
});