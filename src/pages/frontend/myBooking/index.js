import React from "react";

import { cardData } from "../../../component/assest/index";
import CarProduct from "../../../component/assest/car.webp";
export default function Mybookings() {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 max-w-6xl text-sm 2xl:px-48 mb-20 ">
      <div className="flex flex-col items-center md:items-start justify-center pt-20 pb-10 ">
        <h1 className="text-3xl font-semibold text-gray-800">My Bookings</h1>
        <p className="text-gray-500 ">View and manage your all car bookings</p>
      </div>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 border border-gray-500 rounded-lg first:my-12">
          {/* ********Car Image and info******** */}
          <div className="md:col-span-1">
            <div className="rounded-md overflow-hidden mb-3">
              <img
                src={CarProduct}
                alt={CarProduct}
                className="w-full h-auto object-cover aspect-video"
              />
            </div>
            <p className="font-bold ">{cardData[0].title}</p>
            <p className="text-gray-500">{cardData[0].model} . New York</p>
          </div>
          {/* ***************Booking info*************** */}
          <div className="md:col-span-2">
            <div className="flex items center gap-2">
              <p className="px-3 py-1.5 bg-light rounded ">Booking # 1</p>
              <p
                className={`px-3 py-1.5 rounded-full bg-green-400/15 text-green-600   `}
              >
                {" "}
                Complete{" "}
              </p>
            </div>
            <div className="flex items-start mt-3 gap-2">
              <i className="ri-calendar-schedule-line text-blue-500"></i>
              <div>
                <p className="text-gray-500">Rental Period</p>
                <p>12-08-2025 to 18-08-2025 </p>
              </div>
            </div>
            <div className="flex items-start mt-3 gap-2">
              <i className="ri-map-pin-line text-blue-500"></i>
              <div>
                <p className="text-gray-500">Pickup Location</p>
                <p>New York </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-1 flex  flex-col justify-between gap-6">
            <div className="text-sm text-gray-500 text-right">
              <p>Total Price</p>
              <h1 className="text-2xl font-semibold text-blue-500">$ 199</h1>
              <p>Booked on </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 border border-gray-500 rounded-lg first:mt-12">
          {/* ********Car Image and info******** */}
          <div className="md:col-span-1">
            <div className="rounded-md overflow-hidden mb-3">
              <img
                src={CarProduct}
                alt={CarProduct}
                className="w-full h-auto object-cover aspect-video"
              />
            </div>
            <p className="font-bold ">{cardData[0].title}</p>
            <p className="text-gray-500">{cardData[0].model} . New York</p>
          </div>
          {/* ***************Booking info*************** */}
          <div className="md:col-span-2">
            <div className="flex items center gap-2">
              <p className="px-3 py-1.5 bg-light rounded ">Booking # 1</p>
              <p
                className={`px-3 py-1.5 rounded-full bg-green-400/15 text-green-600   `}
              >
                {" "}
                Complete{" "}
              </p>
            </div>
            <div className="flex items-start mt-3 gap-2">
              <i className="ri-calendar-schedule-line text-blue-500"></i>
              <div>
                <p className="text-gray-500">Rental Period</p>
                <p>12-08-2025 to 18-08-2025 </p>
              </div>
            </div>
            <div className="flex items-start mt-3 gap-2">
              <i className="ri-map-pin-line text-blue-500"></i>
              <div>
                <p className="text-gray-500">Pickup Location</p>
                <p>New York </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-1 flex  flex-col justify-between gap-6">
            <div className="text-sm text-gray-500 text-right">
              <p>Total Price</p>
              <h1 className="text-2xl font-semibold text-blue-500">$ 199</h1>
              <p>Booked on </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
