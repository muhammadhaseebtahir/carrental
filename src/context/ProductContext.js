import React, { createContext, useContext, useState ,useEffect} from 'react'

import {message} from "antd" 
import axios from "axios"


const productContext= createContext();




export default function ProductContextProvider({children}) {


    const [product,setProduct]= useState([])


      const fetchData = async () => {
    
    try {
      const res = await axios.get(
        "http://localhost:8000/dashboard/getProducts",      
      );
      setProduct(res.data.data);
    } catch (err) {
      console.log("error", err);
      message.error(err.response?.data?.message || "Something went wrong");
    }
   
  };
  useEffect(() => {
    fetchData();
  }, []);



  return (
    <productContext.Provider value={{product,fetchData,setProduct}}>
      {children}
    </productContext.Provider>
  )
}



export  const useProductContext = ()=>useContext(productContext);