const firebase = require('firebase');
import firebaseConfig from './firebaseConfig';

var app = firebase.initializeApp(firebaseConfig);
const database = app.database();

function dbAccessInsertNote(newNote){
    database.ref('notes').push({
        id: newNote.id,
        title: newNote.title,
        text: newNote.text
    });
}

function dbAccessGetNotes(){
    return database.ref('notes').once('value');
}

export { dbAccessGetNotes, dbAccessInsertNote };