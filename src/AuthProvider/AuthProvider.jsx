import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useEffect } from 'react';

export const AuthContext = createContext(null);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // Signin with Google Account;
    const googleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                setUser(user);
            })
            .catch(error => {
                console.log("Error ", error.message);
            })
    }

    const googleLogout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        googleSignIn,
        googleLogout,
        loading,
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
