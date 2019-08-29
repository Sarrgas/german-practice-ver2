import allNotes from '../data/notes.js';

const notesmodule = {
    state: {
        notes: allNotes
    },
    getters: {
        getAllNotes(state) {
            return state.notes;
        }
    },
    mutations: {
        addNote(state, note) {
            state.notes.push(note);
        }
    }
}

export default notesmodule;