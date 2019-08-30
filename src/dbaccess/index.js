const firebase = require('firebase');

// TODO - separera till egen fil, och lägg den filen på .gitignore
// Detta är typ min "app secret" som inte bör ligga publikt på GitHub
const firebaseConfig = {
    apiKey: "AIzaSyARvAAKn7cXdqN46S9VeoJBLdNTNUflwsA",
    authDomain: "german-practice-5ba79.firebaseapp.com",
    databaseURL: "https://german-practice-5ba79.firebaseio.com",
    projectId: "german-practice-5ba79",
    storageBucket: "",
    messagingSenderId: "1051338834714",
    appId: "1:1051338834714:web:c42643d0897edee0"
  };

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