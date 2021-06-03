import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCFzCtHpkIqdkoctceHJA3QjFo2gVyp7Nc",
    authDomain: "to-do-app-2c2aa.firebaseapp.com",
    projectId: "to-do-app-2c2aa",
    storageBucket: "to-do-app-2c2aa.appspot.com",
    messagingSenderId: "882134354010",
    appId: "1:882134354010:web:ea560bae821a3866a8f063",
    measurementId: "G-F004E0LLPD"
  };

  if (!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
  } else {
      firebase.app();
  }

  export const auth = firebase.auth();

  export const firestore = firebase.firestore();


export const addPost = async(user, postData) => {
    firestore.collection("posts").add({
        owner: user.uid,
        ownerName: user.displayName,
        dateCreated: firebase.firestore.FieldValue.serverTimestamp(),
        text: postData
    })
}

export const getAllPosts = () => {
    return firestore.collection("posts").get();
}