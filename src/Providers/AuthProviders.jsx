import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from "../Firebase/firbase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProviders = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading ] = useState(true);

    const createUser =(email, passWord) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, passWord);

    }

    const signIn = (email, passWord) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, passWord);
    }

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            console.log("Current User : ", currentUser);
            setLoading(false);
        });
        return unsubscribe();
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn
    }
    
    return (
        <AuthContext.Provider value ={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;