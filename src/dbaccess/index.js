import firebaseConfig from './firebaseConfig';
const firebase = require('firebase');

const app = firebase.initializeApp(firebaseConfig);
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

function dbAccessGetVerbs(){
    return database.ref('verbs').once('value');
}

function dbAccessInsertVerb(verb){
    database.ref('verbs').push({
        id: verb.id,
        german: verb.german,
        swedish: verb.swedish,
        ich: verb.ich,
        du: verb.du,
        ersiees: verb.ersiees,
        wir: verb.wir,
        ihr: verb.ihr,
        sie: verb.sie
    });
}

export { 
    dbAccessGetNotes, dbAccessInsertNote, 
    dbAccessGetNouns, dbAccessInsertNoun, 
    dbAccessGetVerbs, dbAccessInsertVerb
};