import { createContext, useState, useEffect } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener, } from "../firebase";
export const Usercontext= createContext({
    currentUser:null, setCurrentUser: ()=> null,
})
export const UserProvider= ({children}) =>{
    const [currentUser,setCurrentUser]=useState(null)
    const value={currentUser,setCurrentUser}

useEffect(()=>{
const unsubscribe= onAuthStateChangedListener((user)=>{
    if (user){
        createUserDocumentFromAuth(user)
    }
    setCurrentUser(user)
   
});
return unsubscribe
},[])
    return <Usercontext.Provider value={value}>
        {children}
    </Usercontext.Provider>
}