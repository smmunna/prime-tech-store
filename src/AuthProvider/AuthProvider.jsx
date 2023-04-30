import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const[user,setUser]=useState('Munna')

    // Signin with Google Account;
    const googleSignIn = ()=>{
        signInWithPopup(auth,provider)
        .then(result=>{
            const user = result.user;
            console.log(user)
        })
        .catch(error=>{
            console.log("Error ",error.message);
        })
    }

    const authInfo = {
        user,
        googleSignIn,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
}

export default AuthProvider;
