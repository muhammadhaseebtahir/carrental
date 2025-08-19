import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cars from './cars'
import Mybookings from './myBooking'
import Home from './home'
import Header from '../../component/header'
// import Footer from '../../component/footer'

export default function index() {
  return (



    <>
    <Header/>
    <main>

    <Routes>
      <Route index element={<Home/>} />
      <Route path='/cars' element={<Cars/>} />
      <Route path='/my-bookings' element={<Mybookings/>} />
    </Routes>
    </main>
    {/* <Footer/> */}
    </>

  )
}
