import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./auth"
import Frontend from "./frontend"
export default function Index(){
    return (
<Routes>
    <Route path="/*" element={<Frontend/>} />
    <Route path="auth/*" element={<Auth/>} />
</Routes>


    )

}