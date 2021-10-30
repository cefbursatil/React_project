import firebase from "firebase"

import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyAZSxvzRj6HGVbKdnDhpyzIiNtJzni_W7g",
    authDomain: "proyecto-react-coder-47d34.firebaseapp.com",
    projectId: "proyecto-react-coder-47d34",
    storageBucket: "proyecto-react-coder-47d34.appspot.com",
    messagingSenderId: "757502168910",
    appId: "1:757502168910:web:7c3a045e96f957fde4181f"
  };


const app = firebase.initializeApp(firebaseConfig)


// export function getFirebase(){
//     return app
// }

export function getFirestore(){    
    return firebase.firestore(app)
}
