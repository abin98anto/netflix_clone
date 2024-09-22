import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth/web-extension";
import { addDoc, collection, getFirestore } from "firebase/firestore/lite";
import { FirebaseError } from "firebase/app";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRE_API_KEY,
  authDomain: import.meta.env.VITE_FIRE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIRE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIRE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIRE_MSG_ID,
  appId: import.meta.env.VITE_FIRE_APP_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name: string, email: string, password: string) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: 'local',
            email
        });
    } catch (error) {
        if (error instanceof FirebaseError) { 
            console.log(error);
            toast.error(error.code.split('/')[1].split('-').join(' '));
        } else {
            console.log("Unknown error occurred:", error);
            toast.error("An unknown error occurred.");
        }
    }
}

const login = async (email: string, password: string) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        if (error instanceof FirebaseError) {
            console.log(error);
            toast.error(error.code.split('/')[1].split('-').join(' '));
        } else {
            console.log("Unknown error occurred:", error);
            toast.error("An unknown error occurred.");
        }
    }
}

const logout = () => {
    signOut(auth);
}


export {auth,db,login,signup, logout}