import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../base/firebase.init";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const registerUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signInUser = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signOutUser = () =>{
    return signOut(auth);
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
      console.log('Current user', currentUser)
      if(currentUser){
        setUser(currentUser)
        setLoading(false)
      }else{
        setUser(null)
      }
    }) 
    // unmount or cleanup function
    return () =>{
      unsubscribe()
    }
  },[])

  const authInfo = {
    registerUser,
    signInUser,
    user,
    signOutUser,
    loading
  }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;