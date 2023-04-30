import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const[user,setUser]=useState('Munna')
    const authInfo = {
        user,
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
