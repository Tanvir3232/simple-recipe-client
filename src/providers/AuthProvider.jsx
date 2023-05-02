import React, { createContext } from 'react';
import app from '../firebase/firebase.config';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const user = {displayName: "Tanvir Ahmad"};
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
    const logOut = () =>{
        return signOut(auth);
    }
    const authInfo = {
        user,
        signUp,
        signIn,
        logOut,
        signInWithGoogle,
        signInWithGithub
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;