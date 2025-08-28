import React from 'react'
import { useAuthContext } from '../../context/AuthContext'

import DashboardHeader from '../../component/dashboardHeader'
import SideBar from '../../component/sideBar'
import Index from './Routes'

export default function Layout() {
  const { user } = useAuthContext()

  return (
    <div className="flex flex-col min-h-screen">
      <DashboardHeader user={user} />
      <div className="flex flex-1">
        <div className=" md:w-60">
          <SideBar />
        </div>
        <div className="flex-1  ">
          <Index />
        </div>
      </div>
    </div>
  )
}
