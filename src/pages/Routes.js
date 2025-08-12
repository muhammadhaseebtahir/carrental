import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Auth from "./auth"
import Frontend from "./frontend"
import { useAuthContext } from "../context/AuthContext";
export default function Index(){
   
   const {isAuthenticated} =useAuthContext()
   
   return (
<Routes>
    <Route path="/*" element={<Frontend/>} />
    <Route path="auth/*" element={!isAuthenticated ?<Auth/>: <Navigate to="/" /> } />
</Routes>


    )

}