import firebaseConfig from './firebaseConfig';
const firebase = require('firebase');

const app = firebase.initializeApp(firebaseConfig);
const database = app.database();

function dbAccessSetNotes(notes){
    database.ref('notes').set(notes);
}

function dbAccessGetNotes(){
    return database.ref('notes').once('value');
}

function dbAccessGetNouns(){
    return database.ref('nouns').once('value');
}

function dbAccessSetNouns(nouns){
    database.ref('nouns').set(nouns);
}

function dbAccessGetVerbs(){
    return database.ref('verbs').once('value');
}

function dbAccessSetVerbs(verbs){
    database.ref('verbs').set(verbs);
}

function dbAccessGetAdjectives(){
    return database.ref('adjectives').once('value');
}

function dbAccessSetAdjectives(adjectives){
    database.ref('adjectives').set(adjectives);
}

export { 
    dbAccessGetNotes, dbAccessSetNotes, 
    dbAccessGetNouns, dbAccessSetNouns, 
    dbAccessGetVerbs, dbAccessSetVerbs,
    dbAccessGetAdjectives, dbAccessSetAdjectives
};