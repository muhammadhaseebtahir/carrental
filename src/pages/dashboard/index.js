import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import { Outlet } from 'react-router-dom'
import DashboardHeader from '../../component/dashboardHeader'
import SideBar from '../../component/sideBar'

export default function Layout() {
  const { user } = useAuthContext()

  return (
    <div className="flex flex-col min-h-screen">
      <DashboardHeader user={user} />
      <div className="flex flex-1">
        <div className="w-64">
          <SideBar />
        </div>
        <div className="flex-1 p-4">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
