import React, { useState } from "react";
import HeroCar from "../../../component/assest/hero.png";
import { SearchOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

export default function Hero() {
  const [pickupLocation, setPickupLocation] = useState("");

  return (
    <div className="h-auto flex flex-col items-center justify-center gap-10 md:gap-14 bg-slate-100 dark:bg-gray-900 overflow-hidden">
      
      {/* ---- Heading Animation ---- */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-4xl pt-10 md:text-5xl font-semibold tracking-tight text-gray-900 dark:text-slate-200"
      >
        Luxury cars on Rent
      </motion.h1>

      {/* ---- Form Animation ---- */}
      <motion.form
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="flex flex-col md:flex-row items-start md:items-center justify-between py-7 px-10 md:px-6 lg:px-10 rounded-lg 
                   bg-white dark:bg-gray-800 md:rounded-full w-full max-w-80 md:max-w-3xl lg:max-w-4xl shadow-lg gap-6"
      >
        {/* Pickup Location */}
        <div className="flex flex-col gap-2 items-start w-full">
          <select
            required
            value={pickupLocation}
            className="w-full border rounded-md px-3 py-2 outline-none focus:border-blue-500 
                       bg-white dark:bg-gray-700 dark:text-white dark:border-gray-600"
            onChange={(e) => setPickupLocation(e.target.value)}
          >
            <option value="">Pickup Location</option>
            <option value="New York">New York</option>
            <option value="Los Angles">Los Angles</option>
            <option value="Huston">Huston</option>
            <option value="Chicogo">Chicogo</option>
          </select>
          <p className="text-sm px-1 text-gray-500 dark:text-gray-400">
            {pickupLocation ? pickupLocation : "Please select your location."}
          </p>
        </div>

        {/* Pick-up Date */}
        <div className="flex flex-col gap-2 items-start w-full">
          <input
            type="date"
            className="w-full border rounded-md px-3 py-2 outline-none focus:border-blue-500 
                       bg-white dark:bg-gray-700 dark:text-white dark:border-gray-600"
          />
          <p className="text-gray-700 dark:text-gray-300">Pick-up Date</p>
        </div>

        {/* Return Date */}
        <div className="flex flex-col gap-2 items-start w-full">
          <input
            type="date"
            className="w-full border rounded-md px-3 py-2 outline-none focus:border-blue-500 
                       bg-white dark:bg-gray-700 dark:text-white dark:border-gray-600"
          />
          <p className="text-gray-700 dark:text-gray-300">Return Date</p>
        </div>

        {/* ---- Button Animation ---- */}
        <motion.button
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-1 px-20 md:px-9 py-3 rounded-full cursor-pointer 
                     bg-blue-500 hover:bg-blue-600 max-sm:mt-4 text-white"
        >
          <SearchOutlined /> Search
        </motion.button>
      </motion.form>

      {/* ---- Car Image Animation ---- */}
      <motion.img
        src={HeroCar}
        alt="Hero Car"
        className="max-h-72"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
      />
    </div>
  );
}



