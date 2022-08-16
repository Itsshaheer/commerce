// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider,createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth'
import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmbkXDTV7urZe_wYz1iN6_u2xj-vCrrRY",
  authDomain: "ecommerce-110a4.firebaseapp.com",
  projectId: "ecommerce-110a4",
  storageBucket: "ecommerce-110a4.appspot.com",
  messagingSenderId: "959211395029",
  appId: "1:959211395029:web:77bc6a7492087620c08f5c"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider= new GoogleAuthProvider()
provider.setCustomParameters({
    prompt:'select_account'
})
export const auth=getAuth()
export const signInWithGooglePopup= () =>signInWithPopup(auth,provider)
export const signInWithGoogleRedirect= ()=> signInWithRedirect(auth,provider)
export const authe=getAuth(firebaseApp)
export const db = getFirestore()
  export const  createUserDocumentFromAuth= async (userAuth,additionalinfo={}) =>{
    if(!userAuth) return
    const userDocRef=doc(db,'users', userAuth.uid)
    console.log(userDocRef)
    const userSnapshot= await getDoc(userDocRef)
    console.log(userSnapshot)
    console.log(userSnapshot.exists())
    if(!userSnapshot.exists()){
        const {displayName,email}= userAuth
        const createdAt= new Date()
    
    try{
        await setDoc(userDocRef,{
            displayName, email,createdAt,...additionalinfo
        })
    } catch (error){
        console.log(error)}

} return userDocRef
}
export const  createAuthUserWithEmailAndPassword= async(email,password)=>{
    if(!email || !password) return
   return await createUserWithEmailAndPassword(auth,email,password)
}
export const  signinAuthUserWithEmailAndPassword= async(email,password)=>{
    if(!email || !password) return
   return await signInWithEmailAndPassword(auth,email,password)
}
