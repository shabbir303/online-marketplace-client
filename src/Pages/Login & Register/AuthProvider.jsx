import {  GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../Hooks/firebase.config";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    
    const googleSignIn = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider )
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setUser(user);
            console.log("user present");
            setLoading(false);
            
        })
        return () => {
            return unsubscribe()
        }
    }, [])

    const allInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        googleSignIn,
    }
    return (
        <AuthContext.Provider value={allInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;