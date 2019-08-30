import {dbAccessGetNotes, dbAccessSetNotes} from '../../dbaccess';

const notesmodule = {
    state: {
        notes: []
    },
    getters: {
        getAllNotes(state) {
            return state.notes;
        },
        getNoteCount(state) {
            return state.notes.length;
        },
        getNextNoteId(state) {
            return state.notes.length + 1;
        }
    },
    mutations: {
        addNote(state, note) {
            state.notes.push(note);
        },
        setNotes(state, notes) {
            state.notes = notes;
        }
    },
    actions: {
        init({commit}){
            dbAccessGetNotes().then(function(snapshot) {
                commit('setNotes', snapshot.val());
            });
        },
        addNote({commit, state}, note){
            commit('addNote', note);
            dbAccessSetNotes(state.notes);
        }
    }
}

export default notesmodule;