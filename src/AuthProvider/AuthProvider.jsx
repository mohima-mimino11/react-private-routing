import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../base/firebase.init";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const registerUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signInUser = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password)
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
      console.log('Current user', currentUser)
      if(currentUser){
        setUser(currentUser)
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
    name: 'nodi er sagor',
    registerUser,
    signInUser,
    user
  }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;