import React, {useState, useContext} from 'react'
import Forminput from './form-input'

import Button from './button'
import './signupform.scss'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signinAuthUserWithEmailAndPassword } from './firebase'
import { Link } from 'react-router-dom'
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
      
        <h1 className='text-3xl text-center mt-6 font-bold'>Sign Up with Email And Password</h1>
    <form onSubmit={handlesubmit}>
        <Forminput
        label='Display Name'
     type='text' required onChange={handlechange} name='displayName' value={displayName}/>

       
        <Forminput
        label='Email' type='email' required  onChange={handlechange} name='email' value={email}/>
        
        <Forminput
        label='Password' type='password' required  onChange={handlechange} name='password' value={password}/>
        <Forminput
        label='Confirm Password' type='password' required  onChange={handlechange} name='confirmpassword' value={confirmpassword}/>
        <button className=' w-full mb-6 bg-transparent hover:bg-red-700 text-red-700 font-semibold hover:text-black py-2 px-4 border border-red-500 hover:border-transparent rounded'  type='submit'>Sign Up</button>
        <button className=' w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'> 
    <a className='w-full mb-6'href="/signin">Don't Have An Account ?</a> </button>
    </form>
    
    </div>
  )
}

export default Signupform