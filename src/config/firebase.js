import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAsR0Q5kPNYcWGSfqqS38sSiiDdmmympJc",
    authDomain: "pinhassavon-e129a.firebaseapp.com",
    databaseURL: "https://pinhassavon-e129a.firebaseio.com",
    projectId: "pinhassavon-e129a",
    storageBucket: "pinhassavon-e129a.appspot.com",
    messagingSenderId: "1025385323847",
    appId: "1:1025385323847:web:e2930a9f0b6177de288062",
    measurementId: "G-BLX049R6NJ"
};
try {
  firebase.initializeApp(firebaseConfig);
} catch(err){
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)}
}
const fire = firebase;
export default fire;
