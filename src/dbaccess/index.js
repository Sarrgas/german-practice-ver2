const firebase = require('firebase');
import firebaseConfig from './firebaseConfig';

var app = firebase.initializeApp(firebaseConfig);
const database = app.database();

function dbAccessInsertNote(note){
    database.ref('notes').push({
        id: note.id,
        title: note.title,
        text: note.text
    });
}

function dbAccessGetNotes(){
    return database.ref('notes').once('value');
}

function dbAccessGetNouns(){
    return database.ref('nouns').once('value');
}

function dbAccessInsertNoun(noun){
    database.ref('nouns').push({
        id: noun.id,
        german: noun.german,
        swedish: noun.swedish,
        plural: noun.plural,
        the: noun.the
    });
}

export { dbAccessGetNotes, dbAccessInsertNote, dbAccessGetNouns, dbAccessInsertNoun};