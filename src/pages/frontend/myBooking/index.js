import React, { useEffect, useState } from "react";
import { Spin } from "antd";
import axios from "axios";
import { useAuthContext } from "../../../context/AuthContext";

export default function Mybookings() {
  const { isAuthenticated } = useAuthContext();
  const [getUserBooking, setGetUserBooking] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchUserBookings = async () => {
      if (!isAuthenticated) return;

      setIsLoading(true);
      try {
        const res = await axios.get(
          "https://car-rental-backend-drab.vercel.app/booking/user-bookings",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setGetUserBooking(res.data.bookings);
      } catch (error) {
        console.error("Error fetching user bookings:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserBookings();
  }, [isAuthenticated]);

  return (
    <div className="w-full dark:bg-gray-800">
      <div className="px-6 md:px-16 lg:px-24 xl:px-32 max-w-6xl text-sm 2xl:px-48 pb-20">
        <div className="flex flex-col items-center md:items-start justify-center pt-20 pb-10">
          <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">
            My Bookings
          </h1>
          <p className="text-gray-500">
            View and manage your all car bookings
          </p>
        </div>

        <div className="p-6 border border-gray-500 rounded-lg my-12">
          {/* ---- CASE 1: Not logged in ---- */}
          {!isAuthenticated && (
            <p className="text-center text-gray-500">
              Please login to view your bookings.
            </p>
          )}

          {/* ---- CASE 2: Loading ---- */}
          {isAuthenticated && isLoading && (
            <div className="flex justify-center items-center py-10">
              <Spin tip="Loading your bookings..." size="large" />
            </div>
          )}

          {/* ---- CASE 3: No bookings ---- */}
          {isAuthenticated && !isLoading && getUserBooking.length === 0 && (
            <p className="text-center text-gray-500">No bookings found.</p>
          )}

          {/* ---- CASE 4: Show bookings ---- */}
          {isAuthenticated &&
            !isLoading &&
            getUserBooking.length > 0 &&
            getUserBooking.map((item, i) => (
              <div
                key={item._id}
                className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 p-4 border-b border-gray-400 last:border-b-0"
              >
                {/* ********Car Image and info******** */}
                <div className="md:col-span-1">
                  <div className="rounded-md overflow-hidden mb-3">
                    <img
                      src={item.car?.image?.url}
                      alt={item.car?.brand}
                      className="w-full h-auto object-cover aspect-video"
                    />
                  </div>
                  <p className="font-bold text-gray-900 dark:text-gray-100">
                    {item.car?.brand}
                  </p>
                  <p className="text-gray-500">
                    {item.car?.model} • {item.car?.location}
                  </p>
                </div>

                {/* ***************Booking info*************** */}
                <div className="md:col-span-2">
                  <div className="flex items-center gap-2">
                    <p className="px-3 py-1.5 bg-gray-200 rounded">
                      Booking #{i + 1}
                    </p>
                    <p
                      className={`px-3 py-1.5 rounded-full ${
                        item.status === "confirmed"
                          ? "bg-green-400/15 text-green-600"
                          : item.status === "cancelled"
                          ? "bg-red-400/15 text-red-600"
                          : "bg-yellow-400/15 text-yellow-600"
                      }`}
                    >
                      {item.status}
                    </p>
                  </div>

                  <div className="flex items-start mt-3 gap-2">
                    <i className="ri-calendar-schedule-line text-blue-500"></i>
                    <div>
                      <p className="dark:text-gray-100">Rental Period</p>
                      <p className="dark:text-gray-400">
                        {new Date(item.pickupDate).toLocaleDateString()} to{" "}
                        {new Date(item.returnDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start mt-3 gap-2">
                    <i className="ri-map-pin-line text-blue-500"></i>
                    <div>
                      <p className="dark:text-gray-100">Pickup Location</p>
                      <p className="text-gray-400">{item.car?.location}</p>
                    </div>
                  </div>
                </div>

                {/* ***************Price & Date*************** */}
                <div className="md:col-span-1 flex flex-col justify-between gap-6">
                  <div className="text-sm text-gray-500 text-right">
                    <p>Total Price</p>
                    <h1 className="text-2xl font-semibold text-blue-500">
                      ${item.price}
                    </h1>
                    <p>
                      Booked on {new Date(item.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
