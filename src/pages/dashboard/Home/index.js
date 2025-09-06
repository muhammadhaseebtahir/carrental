import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import axios from "axios";

// 🔹 Skeleton box component
const SkeletonBox = ({ className }) => (
  <div className={`bg-gray-300 animate-pulse rounded ${className}`}></div>
);

export default function Home() {
  const navigate = useNavigate();
  const [getData, setGetData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const dashboardCard = [
    { title: "Totals Cars", value: getData.totalsCars, icon: <i className="ri-car-line"></i> },
    { title: "Total Bookings", value: getData.totalBooking, icon: <i className="ri-file-list-2-line"></i> },
    { title: "Pending", value: getData.pendingBooking, icon: <i className="ri-alert-line"></i> },
    { title: "Confirmed", value: getData.completeBooking, icon: <i className="ri-check-double-line"></i> },
  ];

  const fetchData = async () => {
    try {
      const res = await axios.get("https://car-rental-backend-drab.vercel.app/booking/dashboard-data", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      const { DashboardData } = res.data;
      setGetData(DashboardData);
      setIsLoading(false);
    } catch (error) {
      console.log(error.response?.data.message || error.message);
      message.error(error.response?.data?.message || "Something went wrong");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="px-4 pt-10 md:px-10 flex-1 w-full">
      {/* Back button */}
      <button
        className="text-blue-500 cursor-pointer pb-2"
        onClick={() => navigate("/")}
      >
        <i className="ri-arrow-left-line"></i> Go to Home
      </button>

      {/* Title */}
      <h1 className="text-3xl font-semibold">Admin Dashboard</h1>
      <p className="text-gray-500 pt-2">
        Monitor overall platform performance including total cars, bookings,
        revenue, and recent activities
      </p>

      {/* Dashboard cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 max-w-3xl ">
        {isLoading
          ? Array(4)
              .fill("")
              .map((_, i) => (
                <div
                  key={i}
                  className="flex gap-2 items-center justify-between p-5 rounded-md border border-gray-300"
                >
                  <div>
                    <SkeletonBox className="h-4 w-20 mb-2" />
                    <SkeletonBox className="h-6 w-10" />
                  </div>
                  <SkeletonBox className="h-10 w-10 rounded-full" />
                </div>
              ))
          : dashboardCard.map((item, index) => (
              <div
                key={index}
                className="flex gap-2 items-center justify-between p-5 rounded-md border border-gray-300"
              >
                <div>
                  <h1 className="text-xs text-gray-500">{item.title}</h1>
                  <p className="text-lg font-semibold">{item.value}</p>
                </div>
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600/10">
                  <p className="p-2 text-blue-600">{item.icon}</p>
                </div>
              </div>
            ))}
      </div>

      <div className="flex flex-wrap items-start gap-6 w-full">
        {/* ****************Recent Booking************ */}
        <div className="p-4 md:p-6 border border-gray-400 rounded-md max-w-lg w-full">
          <h1 className="text-lg font-medium">Recent Bookings</h1>
          <p className="text-gray">Latest customer bookings</p>

          {isLoading
            ? Array(3)
                .fill("")
                .map((_, i) => (
                  <div key={i} className="mt-4 flex items-center justify-between">
                    <div className="flex gap-3">
                      <SkeletonBox className="h-10 w-10 rounded-full" />
                      <div>
                        <SkeletonBox className="h-4 w-32 mb-2" />
                        <SkeletonBox className="h-3 w-20" />
                      </div>
                    </div>
                    <SkeletonBox className="h-5 w-16 rounded-full" />
                  </div>
                ))
            : getData?.recentBooking?.map((item, i) => (
                <div key={i} className="mt-4 flex items-center justify-between">
                  <div className="flex gap-3">
                    <div className="hidden md:flex items-center justify-center px-3 py-2 rounded-full bg-blue-100">
                      <i className="ri-file-list-2-line text-lg text-blue-500"></i>
                    </div>
                    <div>
                      <p>
                        {item.car?.brand} {item.car?.model}
                      </p>
                      <p className="text-sm text-gray-500">
                        {new Date(item.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 font-medium">
                    <p className="text-sm text-gray-500"> ${item.price}</p>
                    <p
                      className={`px-3 py-0.5 border text-sm rounded-full ${
                        item.status === "confirmed"
                          ? "border-green-500 text-green-600"
                          : item.status === "pending"
                          ? "border-yellow-500 text-yellow-600"
                          : "border-red-500 text-red-600"
                      }`}
                    >
                      {item.status}
                    </p>
                  </div>
                </div>
              ))}
        </div>

        {/* *************Monthly revenue*********** */}
        <div className="p-4 md:p-6 border border-gray-400 rounded-md w-full md:max-w-xs">
          <p className="text-lg font-medium">Monthly Revenue</p>
          <p className="text-gray-500">Revenue for current month</p>

          {isLoading ? (
            <SkeletonBox className="h-8 w-24 mt-6" />
          ) : (
            <p className="text-3xl mt-6 font-semibold text-blue-500">
              ${getData.monthlyRevenue}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
