import { async } from '@firebase/util'
import { signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import { useEffect } from 'react'
import { getRedirectResult } from 'firebase/auth'
import React from 'react'
import{authe} from'../firebase'
import Signupform from '../signupform'
import {auth,signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect} from'../firebase'


    const Signin =()=>{
        
        
        const logGoogle= async ()=>{
            const {user} =  await signInWithGooglePopup();
            const userDocRef=createUserDocumentFromAuth(user)
            
        }
       
  return (
    <div><h1>Sign In</h1>
    <button onClick={logGoogle}> Sign In With Google</button>
<Signupform/>
    </div>
  )
}

export default Signin