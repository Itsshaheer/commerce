import React, {useState, useContext} from 'react'
import Forminput from './form-input'

import Button from './button'
import './signupform.scss'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signinAuthUserWithEmailAndPassword } from './firebase'
const defaultformfield= {
    displayName:'',
    email:'',
    password:'',
    confirmpassword:''
}


function Signupform() {
    const [formfields,setformfields]=useState(defaultformfield)
    const {displayName,email,password,confirmpassword}=formfields
 
    
    console.log(formfields)
    const resetformfields=()=>{
        setformfields(defaultformfield)
    }
    const handlesubmit= async(event) =>{
        event.preventDefault()
        if(password !== confirmpassword){
            alert('passwords not matching')
            return
        }
        try{
            const {user}= await createAuthUserWithEmailAndPassword(email,password)
         
            await createUserDocumentFromAuth(user,{displayName})
            resetformfields()

        } catch(error){
            
            if(error.code==='auth/email-already-in-use'){
                alert('cant create user email in use')
            } else{
                console.log('error creating user',error)
            }
        }
    }
    const handlechange= (event)=>{
        const {name, value}=event.target
        setformfields({...formfields,[name]:value})
    
    }
  return (
    <div className='sign-up-container'>
        <h2> Dont have an account?</h2>
        <h1>Sign Up with Email And Password</h1>
    <form onSubmit={handlesubmit}>
        <Forminput
        label='Display Name'
     type='text' required onChange={handlechange} name='displayName' value={displayName}/>

       
        <Forminput
        label='email' type='email' required  onChange={handlechange} name='email' value={email}/>
        
        <Forminput
        label='password' type='password' required  onChange={handlechange} name='password' value={password}/>
        <Forminput
        label='confirmpassword' type='password' required  onChange={handlechange} name='confirmpassword' value={confirmpassword}/>
        <Button  type='submit'>Sign Up</Button>

    </form>
    
    </div>
  )
}

export default Signupform