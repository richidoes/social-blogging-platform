import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCOA54oTAk-1tyq6yL9xmo-kjAbhBJTaV4",
  authDomain: "nextric-4468f.firebaseapp.com",
  projectId: "nextric-4468f",
  storageBucket: "nextric-4468f.appspot.com",
  messagingSenderId: "655490471615",
  appId: "1:655490471615:web:839246aa1a21928dd6980a",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

/**`
 * Gets a users/{uid} document with username
 * @param  {string} username
 */
export async function getUserWithUsername(username: string) {
  const usersRef = firestore.collection("users");
  const query = usersRef.where("username", "==", username).limit(1);
  const userDoc = (await query.get()).docs[0];
  return userDoc;
}

/**`
 * Converts a firestore document to JSON
 * @param  {DocumentSnapshot} doc
 */
export function postToJSON(doc: { data: () => any }) {
  const data = doc.data();
  return {
    ...data,
    // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
    createdAt: data.createdAt.toMillis(),
    updatedAt: data.updatedAt.toMillis(),
  };
}

//Use this function to convert a Firestore timestamp to a number.
export const fromMillis = firebase.firestore.Timestamp.fromMillis;

export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
export const increment = firebase.firestore.FieldValue.increment;

// Storage exports
export const STATE_CHANGED = firebase.storage.TaskEvent.STATE_CHANGED;
