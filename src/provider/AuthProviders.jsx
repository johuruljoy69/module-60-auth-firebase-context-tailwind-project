import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();


const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // Register function
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // sign in Function
    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle =() =>{
        return signInWithPopup(auth, googleAuthProvider);
    }

    const logOut = () =>{
        signOut(auth);
        return;
    }

    // observe auth state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('auth state change', currentUser);
            setUser(currentUser)
            setLoading(false);
        } )
        return () => {
            unsubscribe();
        }
    }, [])


    const authInfo ={
        user,
        loading,
        createUser,
        signIn,
        logOut,
        signInWithGoogle
    }

    return (
        <AuthContext.Provider value={authInfo}>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProviders;