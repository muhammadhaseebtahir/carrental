import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './login'
import Register from './register'
import ForgotPassword from './forgotPassword'

export default function index() {
  return (
    <Routes>
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/forgot-password' element={<ForgotPassword/>} />
    </Routes>
  )
}
