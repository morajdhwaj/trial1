/* eslint-disable arrow-body-style */
/* eslint-disable react/button-has-type */

import React, {Children, createContext, useEffect, useState } from 'react'
import { getToDB } from './PouchDB';

export const GlobalInfoVAr = createContext();

 export const ContextAPI = () => {
    const [inputList, setInputList]= useState([]);
    

    const getToDBfun = () => {
        const data = getToDB ()
        setInputList (data.rows);
    }
     const value = React.useMemo(
        ()=> ({getToDBfun,inputList})
     ,[inputList.length]) ;

     useEffect (()=>{
        getToDBfun();
     },[]);



  return (
    <GlobalInfoVAr  value={value}>{Children}</GlobalInfoVAr>
    
  )
};

  