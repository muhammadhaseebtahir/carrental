import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import { Link } from 'react-router-dom';

export default function DashboardHeader() {
    const {user} = useAuthContext()
    console.log("user",user);
    
  return (
    <div className='flex items-center justify-between px-6 md:px-10 py-4 text-gray-500 border-b border-gray-300 transition-all relative'>
   <Link to="/dashboard" className='text-2xl font-bold' >
     Car<span className='text-blue-500 ' >Rental</span>
   </Link>
   <p>Welcome, <span className='first-letter:uppercase'> {user.userName} </span> </p>
    </div>
  )
}
