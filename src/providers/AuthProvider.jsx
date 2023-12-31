import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const signUp = (email,password) =>{
        setLoading(true);
       return createUserWithEmailAndPassword(auth,email,password);
    }
    const signIn = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const signInWithGoogle = ()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }
    const signInWithGithub = () => {
        setLoading(true);
        return signInWithPopup(auth,githubProvider);
    }
    const updateProfileInfo = (name,photoUrl) =>{
       return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:photoUrl
        })
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false);
        });
        return ()=>{
            unsubscribe();
        }
    },[])
    const logOut = () =>{
        return signOut(auth);
    }
    const authInfo = {
        user,
        signUp,
        signIn,
        logOut,
        signInWithGoogle,
        signInWithGithub,
        updateProfileInfo,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;