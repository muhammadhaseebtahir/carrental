import { message } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function ManageBookings() {
  const [getAdminBooking,setGetAdminBooking] = useState([])

  console.log("getAdminBooking",getAdminBooking);
  

  useEffect(()=>{

const fetchData =async()=>{
  try{
    const res = await axios.get("http://localhost:8000/booking/admin-bookings",{
      headers:{
        Authorization:`Bearer ${localStorage.getItem("token")}`
      }
    })
    setGetAdminBooking(res.data.Bookings)

  }catch(err){
    console.log(err.response?.data?.error);
    message.error(err.response?.data.message)
    
  }
}

fetchData()
  },[])

  
  return (
    <div className=''>
      
    </div>
  )
}
