import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged,FacebookAuthProvider, createUserWithEmailAndPassword    } from "firebase/auth";

const useFirebase = () => {
    const [users, setUsers] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const auth = getAuth();
    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }
    const handleSignUp = e =>{
        e.preventDefault()
        if (password.length < 6) {
            setError('password must be 6 character')
            return
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            const user = result.user;
        })
        
    }
    const signInGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // The signed-in user info.
                setUsers(result.user);
                // ...
            })
    }
    const signInFacebook = () => {
        const facebookProvider = new FacebookAuthProvider();
        signInWithPopup(auth, facebookProvider)
            .then((result) => {
                // The signed-in user info.
                setUsers(result.user);
                // ...
            })
    }
    useEffect(() =>{
        const unsubscribed = onAuthStateChanged(auth,  (user) => {
            if (user) {
              setUsers(users)
            } else {
              setUsers({})
            }
          })
          return () => unsubscribed;
    },[])
    const logOut = () =>{
        signOut(auth)
        .then(()=>{})
    }

    return {
        users,
        error,
        signInGoogle,
        signInFacebook,
        handleEmail,
        handlePassword,
        handleSignUp,
        logOut
    }
};

export default useFirebase;