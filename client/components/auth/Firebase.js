
import * as firebase from 'firebase';
import {
    FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN,
    FIREBASE_DATABASE_URL,
    FIREBASE_STORAGE_BUCKET,
} from 'react-native-dotenv';

firebase.initializeApp({
    apiKey: FIREBASE_API_KEY,
    authDomain: FIREBASE_AUTH_DOMAIN,
    databaseUrl: FIREBASE_DATABASE_URL,
    storageBucket: FIREBASE_STORAGE_BUCKET,
});

export default firebase;