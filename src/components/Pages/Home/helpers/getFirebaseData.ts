import { getDatabase } from 'firebase-admin/database';
import getFirebaseAdmin from './getFirebaseAdmin';

const getFirebaseData = async () => {
  const firebaseAdmin = getFirebaseAdmin();
  const db = getDatabase();

  const snapshot = await db.ref('/projects').once('value');
  const data = snapshot.val();

  return { firebaseAdmin, db, data };
};

export default getFirebaseData;
