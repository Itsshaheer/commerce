import React, {useState} from 'react'
import Forminput from './form-input'
import Button from './button'
import './signin.scss'
import { signInWithGooglePopup, createUserDocumentFromAuth, signinAuthUserWithEmailAndPassword } from './firebase'
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
    console.log(formfields)
    const resetformfields=()=>{
        setformfields(defaultformfield)
    }
    const handlesubmit= async(event) =>{
        event.preventDefault()
       
     try { const response= await signinAuthUserWithEmailAndPassword(email,password)
        console.log(response)
        resetformfields()
     } catch (error) { 
        switch (error.code) {
            case 'auth/wrong-password':
            alert('incoreect password')
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
        <h2> Already have an account?</h2>
        <h1>Sign In with Email And Password</h1>
    <form onSubmit={handlesubmit}>
     

       
        <Forminput
        label='email' type='email' required  onChange={handlechange} name='email' value={email}/>
        
        <Forminput
        label='password' type='password' required  onChange={handlechange} name='password' value={password}/>
       
        <Button  type='submit'>Sign in</Button>  
      <div className='move'> <Button  type='button' buttonType='google' onClick={logGoogle}>Google sign in</Button> </div> 
       
    </form>
    
    </div>
  )
}

export default Signin