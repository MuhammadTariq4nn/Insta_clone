import { createContext, useState, useEffect, useContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword,
    signInWithEmailAndPassword,GoogleAuthProvider ,
    signInWithPopup,
} from "firebase/auth";

// web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCk5_kxiF1niEWYnqd5stFr58RmGCy47Q8",
    authDomain: "instacloneauth-edcfa.firebaseapp.com",
    projectId: "instacloneauth-edcfa",
    storageBucket: "instacloneauth-edcfa.appspot.com",
    messagingSenderId: "503972703957",
    appId: "1:503972703957:web:0da5cf4411b699dcd03c5c"
  };

const app=initializeApp(firebaseConfig)
const auth=getAuth(app)
const provider = new GoogleAuthProvider();

const contextData=createContext("");

export const ContextDataProvider=(props)=>{
    const [user,setUser]=useState(null);
    function newUser(email,password){
        createUserWithEmailAndPassword(auth,email,password)
    .then((user)=>{
       console.log(user)
    })
    .catch((error)=>{
        console.log(error)
    })
    }
    

    // signInExistingUser
    function signInExistingUser(email,password){
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          setUser(user)
          console.log(user)
          // ...
        })
        .catch((error) => {
          console.log(error)
        });
    }

    //SignIn with Google
    function signInWithGoogle(){
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            console.log("done")
            setUser(user)
            // ...
          }).catch((error) => {

            console.log(error)
          });
    }
    return(
        <>
         <contextData.Provider value={{newUser,signInExistingUser,signInWithGoogle,user}}>
            {props.children}
         </contextData.Provider>
        </>
    )
}


export const useData=()=>{
    return useContext(contextData)
}