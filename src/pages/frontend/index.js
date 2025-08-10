import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cars from './cars'
import Mybookings from './myBooking'
import Home from './home'

export default function index() {
  return (
    <Routes>
      <Route index element={<Home/>} />
      <Route path='/cars' element={<Cars/>} />
      <Route path='/my-bookings' element={<Mybookings/>} />
    </Routes>
  )
}
