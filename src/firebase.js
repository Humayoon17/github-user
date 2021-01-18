import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBBjdR9xUvvStQPzVvyN0SnLsHnc5BrDUw',
  authDomain: 'github-user-app-cc6f5.firebaseapp.com',
  projectId: 'github-user-app-cc6f5',
  storageBucket: 'github-user-app-cc6f5.appspot.com',
  messagingSenderId: '871051486933',
  appId: '1:871051486933:web:5100f79060653a768ea45c',
};

/// initial firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const provider = new firebase.auth.GithubAuthProvider();

export default auth;
export { provider };
