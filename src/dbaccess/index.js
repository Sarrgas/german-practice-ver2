const firebase = require('firebase');
import firebaseConfig from './firebaseConfig';

var app = firebase.initializeApp(firebaseConfig);
const database = app.database();

function testDbWrite(newNote){
    testDbGet();
    database.ref('notes').push({
        id: 999, // TODO. Låt Firebase fixa IDn som löpnummer.
        title: newNote.title,
        text: newNote.text
    });
}

function testDbGet(){
    database.ref('notes').on('value', function(snapshot) {
        // eslint-disable-next-line no-console
        console.log(snapshot.val());
    });
}

export default testDbWrite;