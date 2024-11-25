import { createContext, useEffect, useState } from "react"
import auth from './../firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";


export const OurContext = createContext(null)

const AuthContext = ({children}) => {
const [user,setUser] = useState('null')


// create new user 
const signUp = (email,password) => {
   return createUserWithEmailAndPassword(auth, email, password)
}
// Adding User 
const signIn = (email,password) => {
   return signInWithEmailAndPassword(auth, email, password)
}
// Varification 
const verify = () => {
   return sendEmailVerification(auth.currentUser)
}
// Google Login 
const GoogleLogin = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
}

useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (user) => {
console.log('user in the auth state', user)
        setUser(user)

    return () =>{
        unSubscribe()
    }

    })
},[])
























const authInfo = {
    user, signUp,signIn,verify,GoogleLogin
}

  return (
    <OurContext.Provider value={authInfo}>
      {children}
    </OurContext.Provider>
  )
}

export default AuthContext
