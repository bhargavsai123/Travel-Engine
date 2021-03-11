
import * as firebase from 'firebase';
import 'firebase/firestore';

 var firebaseConfig = {
    apiKey: "AIzaSyB18lUQbWTFl1oNtuS6gWR-EAD-bRUO9N0",
    authDomain: "travel-engine-9282b.firebaseapp.com",
    projectId: "travel-engine-9282b",
    storageBucket: "travel-engine-9282b.appspot.com",
    messagingSenderId: "194096946245",
    appId: "1:194096946245:web:98f60b71b78b20cfc6172c"
  };

if (!firebase.apps.length) {
	// Initialize Firebase
	firebase.initializeApp(firebaseConfig);
}

export default firebase.firestore();