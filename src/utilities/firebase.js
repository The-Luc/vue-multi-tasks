import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAewClcHauABuocxTkZps2kRDLZyc_-aLQ',
  authDomain: 'multi-tasks.firebaseapp.com',
  projectId: 'multi-tasks',
  storageBucket: 'multi-tasks.appspot.com',
  messagingSenderId: '885517051545',
  appId: '1:885517051545:web:16da36d2eff0b09ea47a08',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
