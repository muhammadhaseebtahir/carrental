import React, { useState } from 'react'
import { useAuthContext } from '../../context/AuthContext'
import { Outlet, useLocation } from 'react-router-dom'
import haseeb from "../../component/assest/haseeb.png"
import Index from './Routes'
import DashboardHeader from '../../component/dashboardHeader'
import SideBar from '../../component/sideBar'

export default function Layout() {
    const {user} = useAuthContext()
    const location = useLocation()
    const [image,setImage]= useState('')

    


  return (
    
   <div className='flex flex-col'>
    <DashboardHeader/>
    <div className="flex">
      <SideBar/>
      <Outlet/>
    </div>
   
   </div>
    
  )
}
