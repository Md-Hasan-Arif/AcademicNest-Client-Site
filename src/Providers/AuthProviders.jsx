import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword,  onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../Firebase/firbase.config";


export const AuthContext = createContext(null);
// const auth = getAuth(app);

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

    const logOut = () =>{
        setLoading(true)
        setUser(null)
        return signOut(auth)
        .finally(()=>setLoading(false))
    }

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, currentUser =>{
           if(currentUser) {
            setUser(currentUser)
            console.log("Current User : ", currentUser);
            setLoading(false);
           }
        });
        return ()=>{
          unsubscribe();

        } ;
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut
    }
  
    return (
        <AuthContext.Provider value ={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;

