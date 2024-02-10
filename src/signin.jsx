import React, {useState, useContext} from 'react'
import Forminput from './form-input'
import Button from './button'
import './signin.scss'

import { signInWithGooglePopup, createUserDocumentFromAuth, signinAuthUserWithEmailAndPassword } from './firebase'
import { Link } from 'react-router-dom'
const defaultformfield= {
    
    email:'',
    password:'',
    
}
const logGoogle= async ()=>{
    const {user} =  await signInWithGooglePopup();
    await createUserDocumentFromAuth(user)
    
}

function Signin() {
    const [formfields,setformfields]=useState(defaultformfield)
    const {email,password,}=formfields
    
    
    const resetformfields=()=>{
        setformfields(defaultformfield)
    }
    const signInWithGooglePopup= async()=>{
         await signInWithGooglePopup()
        
        
    }
    const handlesubmit= async(event) =>{
        event.preventDefault()
       
     try { const {user}= await signinAuthUserWithEmailAndPassword(email,password)
    
        
        resetformfields()
     } catch (error) { 
        switch (error.code) {
            case 'auth/wrong-password':
            alert('incorrect password')
            break;
            case 'auth/user-not-found':
            alert('invalid email')
            break
            default:
                console.log(error)
        }
        }
    }
       

    const handlechange= (event)=>{
        const {name, value}=event.target
        setformfields({...formfields,[name]:value})
    
    }  
  return (  
    <div className='sign-up-container'>
    
        <h1 className='text-3xl text-center mt-6 font-bold'>Sign In with Email And Password</h1>
    <form onSubmit={handlesubmit}>
     

       
        <Forminput
        label='Email' type='email' required  onChange={handlechange} name='email' value={email}/>
        
        <Forminput
        label='Password' type='password' required  onChange={handlechange} name='password' value={password}/>
       
        <Button className="w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" type='submit'> Sign in</Button>  
      <div className='move'> <button className=' w-full mb-6 bg-transparent hover:bg-red-700 text-red-700 font-semibold hover:text-black py-2 px-4 border border-red-500 hover:border-transparent rounded' type='button'  onClick={logGoogle}>Google Sign In</button> </div> 
      
    </form>
        <button className='bg-transparent bg-black  font-semibold text-black py-2 px-4 border border-black hover:border-transparent rounded hover:bg-slate-500'>
        <Link to='/auth'> Already have an account? </Link> </button>
    </div>
  )
}

export default Signin