import allNotes from '../data/notes.js';

const notesmodule = {
    state: {
        notes: allNotes
    },
    getters: {
        getAllNotes(state) {
            return state.notes;
        }
    }
}

export default notesmodule;