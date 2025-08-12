import React from 'react'
import { useAuthContext } from '../../../context/AuthContext'
import { Button } from 'antd'

export default function Home() {

const {handleLogout} = useAuthContext()

  return (
    <div className='min-h-screen dark:bg-slate-600'>
      <h1 className='text-white' >Home</h1>
      <Button onClick={handleLogout} > Logout </Button>
    </div>
  )
}
