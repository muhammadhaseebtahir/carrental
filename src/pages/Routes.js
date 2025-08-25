import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Auth from "./auth"
import Frontend from "./frontend"
import Dashboard from "./dashboard"
import { useAuthContext } from "../context/AuthContext";
import PrivateRoute from "../component/privateRoute";
export default function Index(){
   
   const {isAuthenticated ,isAdmin} =useAuthContext()
   
   return (
<Routes>
    <Route path="/*" element={<Frontend/>} />
    <Route path="auth/*" element={!isAuthenticated ?<Auth/>: <Navigate to="/" /> } />
      <Route path="dashboard/*"  element={isAdmin && isAuthenticated ? <PrivateRoute Component={Dashboard}  /> : <Navigate  to="/" /> } />

</Routes>


    )

}