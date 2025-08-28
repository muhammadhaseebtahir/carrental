import React from "react";

export default function Home() {
  const dashboardCard = [
    { title: "Totals Cars", value: 8, icon: <i className="ri-car-line"></i> },
    {
      title: "Total Bookings",
      value: 4,
      icon: <i className="ri-file-list-2-line"></i>,
    },
    { title: "Pending", value: 4, icon: <i className="ri-alert-line"></i> },
    {
      title: "Conformed",
      value: 0,
      icon: <i className="ri-file-list-2-line"></i>,
    },
  ];

  return (
    <div className="px-4 pt-10 md:px-10 flex-1 w-full">
      <h1 className="text-3xl font-semibold ">Admin Dashboard</h1>
      <p className=" text-gray-500 pt-2">
        Monitor overall platform performance including total cars, bookings,
        revenue, and recent activities
      </p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 max-w-3xl ">
        {dashboardCard.map((item, index) => (
          <div
            key={index}
            className="flex gap-2 items-center justify-between p-5 rounded-md border border-gray-300 "
          >
            <div>
              <h1 className="text-xs text-gray-500 ">{item.title}</h1>
              <p className="text-lg font-semibold">{item.value}</p>
            </div>
            <div className="flex items-center justify-center w-10 h010 rounded-full bg-blue-600/10">
              <p className="p-2 text-blue-600"> {item.icon}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap items-start gap-6 w-full">
        {/* ****************Recent Booking************ */}
        <div className="p-4 md:p-6 border border-gray-400 rounded-md max-w-lg w-full">
          <h1 className="text-lg font-medium">Recent Bookings</h1>
          <p className="text-gray ">Latest customer bookings</p>
          {/* {recentBooking.map((item,i)=>( */}
          <div className="mt-4 flex items-center justify-between ">
            <div className="flex gap-3" >
                          <div className="hidden md:flex items-center justify-center px-3 py-2 rounded-full bg-blue-100">
              <i className="ri-file-list-2-line text-lg  text-blue-500"></i>
            </div>
            <div>
              <p>BMW X5</p>
              <p className="text-sm text-gray-500 ">12-10-2025</p>
              
            </div>
</div>

            <div className="flex items-center gap-2 font-medium">
              <p className="text-sm text-gary-500 "> $120</p>
              <p className="px-3 py-0.5 border text-sm border-gray-400 rounded-full">
                Complete
              </p>
            </div>
          </div>
          {/* //  ))}  */}
        </div>

        {/* *************Monthly revenue*********** */}

        <div className="p-4 md:p-6 border border-gray-400 rounded-md w-full md:max-w-xs">
          <p className="text-lg font-medium ">Monthly Revenue</p>
          <p className="text-gray-500">Revenue for current month</p>
          <p className="text-3xl mt-6 font-semibold text-blue-500">$1234</p>
        </div>
      </div>
    </div>
  );
}
