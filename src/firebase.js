import firebase from 'firebase/compat/app'

const firebaseConfig = {
    apiKey: "AIzaSyAW89KXxu7ehzpJRNiotHpwZv8uA2pLNYw",
    authDomain: "lucky-beings.firebaseapp.com",
    projectId: "lucky-beings",
    storageBucket: "lucky-beings.appspot.com",
    messagingSenderId: "866025755973",
    appId: "1:866025755973:web:aeff024ba948bb5f505a2c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;