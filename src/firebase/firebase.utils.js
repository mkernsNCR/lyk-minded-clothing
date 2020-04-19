import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyDh0T2SOZbuSoKl4Qh8XCjMKbbJaD-vmoA',
	authDomain: 'lyk-db.firebaseapp.com',
	databaseURL: 'https://lyk-db.firebaseio.com',
	projectId: 'lyk-db',
	storageBucket: 'lyk-db.appspot.com',
	messagingSenderId: '629114361616',
	appId: '1:629114361616:web:21cc38f02b002184e8f795',
	measurementId: 'G-QQY2Z9RQ0V'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
