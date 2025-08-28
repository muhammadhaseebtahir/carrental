import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import AddCars from "./AddCars";
import ManageBookings from "./ManageBookings";
import ManageCar from "./ManageCars";
// import DashboardHeader from "../../component/dashboardHeader";

export default function Index() {
  return (
    <>
      {/* <DashboardHeader /> */}

      <Routes>
        <Route index element={<Home />} />
        <Route path="/add-car" element={<AddCars/>}  />
        <Route path="/manage-car" element={<ManageCar/>} />
        <Route path="/manage-bookings" element={<ManageBookings/>} />
      </Routes>
    </>
  );
}
