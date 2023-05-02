import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const signUp = (email,password) =>{
       return createUserWithEmailAndPassword(auth,email,password);
    }
    const signIn = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password);
    }
    const signInWithGoogle = ()=>{
        return signInWithPopup(auth,googleProvider);
    }
    const signInWithGithub = () => {
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
        updateProfileInfo
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;