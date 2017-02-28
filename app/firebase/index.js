import firebase from 'firebase';

// Initialize Firebase
try {
    var config = {
        apiKey: "AIzaSyASVwRH7echHSqyqPAb9l9u_jrTOXZAZA0",
        authDomain: "alson-todo-app.firebaseapp.com",
        databaseURL: "https://alson-todo-app.firebaseio.com",
        storageBucket: "alson-todo-app.appspot.com",
        messagingSenderId: "630632701542"
    };
    firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;