// firebaseAdmin.js
import admin from 'firebase-admin';
import fs from 'fs';

const serviceAccount = JSON.parse(
  fs.readFileSync(new URL('./ngo-connect-d5fc4-firebase-adminsdk-fbsvc-0d7b725336.json', import.meta.url))
);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
export default db;
