import { useEffect, useState } from "react";
import { createContext } from "react";


import { addCollectionAndDocuments } from "../firebase";
import { getCategoriesAndDocuments } from "../firebase";



export const CategoriesContext= createContext({
    categoriesMap:[],
})

export const CategoriesProvider = ({children}) =>{
    const [categoriesMap,setCategoriesMap]= useState({})
    useEffect(()=>{
        const  getCategoriesMap= async ()=> {
            const categoryMap= await getCategoriesAndDocuments()
            
            setCategoriesMap(categoryMap)
        }
        getCategoriesMap()
       
    }, [])
    const value={categoriesMap}
    return (
       <CategoriesContext.Provider value={value}> {children} </CategoriesContext.Provider>
    )
}
