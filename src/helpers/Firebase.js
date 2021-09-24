import firebase from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import 'firebase/auth';
import 'firebase/database';


import { firebaseConfig } from 'constants/defaultValues';

const app = firebase.initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
const auth = firebase.auth();
const database = firebase.database();

export { auth, database, analytics };
