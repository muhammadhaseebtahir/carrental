import React from "react";

import { UsergroupDeleteOutlined ,ArrowRightOutlined} from "@ant-design/icons";
import HeroCar from "../../../component/assest/car.webp";
import { motion } from "framer-motion";

export default function FeaturedVechial() {
  return (
    <div className="h-auto dark:bg-gray-900 ">
      <h1 className="text-center text-gray-900 dark:text-slate-100 pt-10 text-4xl md:text-5xl font-bold">
        Featured Vehicles
      </h1>
      <p className="text-sm p-5 pb-10 text-center pt-3 text-gray-700  dark:text-slate-200">
        Explore our selection of premium vehicles available for your next
        adventure.
      </p>

      {/* *************Card ******************* */}
      <motion.div 
      initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}   // 👈 animate when in view
  viewport={{ once: true, amount: 0.1 }} // 👈 only once, 20% visible hone par
  transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
      className="flex flex-wrap gap-6  items-center justify-center ">
        <motion.div 
         whileHover={{ y:-8}} // 👈 hover par 10px upar uth jaye
       transition={{ duration: 0.3, ease: "easeOut" }}
        className="card max-w-sm    sm:max-w-[18rem] md:max-w-[22rem] relative   shadow-xl rounded-xl     bg-white dark:bg-gray-800 overflow-hidden">
          <motion.img
            whileHover={{ scale:1.05}} // 👈 hover par 10px upar uth jaye
       transition={{ duration: 0.3, ease: "easeOut" }}
          src={HeroCar} alt="heroCar" />
          <p className="absolute top-3 left-3 px-3 py-1 rounded-full z-10 text-xs bg-blue-500 text-white">
    Available now
  </p>
          <p className="absolute bottom-[150px] right-4 px-3 py-2 rounded-xl font-bold z-10  bg-black text-white">
    $130/ <span className="text-gray-300" >day</span>
  </p>

          <div className="card-body flex flex-col gap-1 p-4">
            <div className="text-gray-800 dark:text-gray-300">
              <p className="car-title font-bold ">BMW X5</p>
              <p>SUV . 2006</p>
            </div>
            <div className="flex  gap-2 text-gray-500 ">
              <p className="w-2/3">
                {" "}
                <UsergroupDeleteOutlined className="pr-2" /> 4 Seats
              </p>
              <p className="w-2/3 ">
                <i className="ri-gas-station-line pr-2"></i> Hybrid
              </p>
            </div>
            <div className="flex  gap-2 text-gray-500 ">
              <p className="w-2/3">
                <i className="ri-car-line pr-2"></i> Semi- Automatic
              </p>
              <p className="w-2/3">
                {" "}
                <i className="ri-map-pin-line pr-2"></i> New York
              </p>
            </div>
          </div>
        </motion.div>
        <div className="card  max-w-sm sm:max-w-[18rem] md:max-w-[22rem]  shadow-xl rounded-xl bg-white dark:bg-gray-800 overflow-hidden">
          <img src={HeroCar} alt="heroCar" />
          <div className="card-body flex flex-col gap-1 p-4">
            <div className="text-gray-800 dark:text-gray-300">
              <p className="car-title font-bold ">BMW X5</p>
              <p>SUV . 2006</p>
            </div>
            <div className="flex  gap-2 text-gray-500 ">
              <p className="w-2/3">
                {" "}
                <UsergroupDeleteOutlined className="pr-2" /> 4 Seats
              </p>
              <p className="w-2/3 ">
                <i className="ri-gas-station-line pr-2"></i> Hybrid
              </p>
            </div>
            <div className="flex  gap-2 text-gray-500 ">
              <p className="w-2/3">
                <i className="ri-car-line pr-2"></i> Semi- Automatic
              </p>
              <p className="w-2/3">
                {" "}
                <i className="ri-map-pin-line pr-2"></i> New York
              </p>
            </div>
          </div>
        </div>
        <div className="card max-w-sm sm:max-w-[18rem] md:max-w-[22rem]  shadow-xl rounded-lg bg-white dark:bg-gray-800 overflow-hidden">
          <img src={HeroCar} alt="heroCar" />
          <div className="card-body flex flex-col gap-1 p-4">
            <div className="text-gray-800 dark:text-gray-300">
              <p className="car-title font-bold ">BMW X5</p>
              <p>SUV . 2006</p>
            </div>
            <div className="flex  gap-2 text-gray-500 ">
              <p className="w-2/3">
                {" "}
                <UsergroupDeleteOutlined className="pr-2" /> 4 Seats
              </p>
              <p className="w-2/3 ">
                <i className="ri-gas-station-line pr-2"></i> Hybrid
              </p>
            </div>
            <div className="flex  gap-2 text-gray-500 ">
              <p className="w-2/3">
                <i className="ri-car-line pr-2"></i> Semi- Automatic
              </p>
              <p className="w-2/3">
                {" "}
                <i className="ri-map-pin-line pr-2"></i> New York
              </p>
            </div>
          </div>
        </div>
        <div className="card max-w-sm sm:max-w-[18rem] md:max-w-[22rem] shadow-xl rounded-lg bg-white dark:bg-gray-800 overflow-hidden">
          <img src={HeroCar} alt="heroCar" />
          <div className="card-body flex flex-col gap-1 p-4">
            <div className="text-gray-800 dark:text-gray-300">
              <p className="car-title font-bold ">BMW X5</p>
              <p>SUV . 2006</p>
            </div>
            <div className="flex  gap-2 text-gray-500 ">
              <p className="w-2/3">
                {" "}
                <UsergroupDeleteOutlined className="pr-2" /> 4 Seats
              </p>
              <p className="w-2/3 ">
                <i className="ri-gas-station-line pr-2"></i> Hybrid
              </p>
            </div>
            <div className="flex  gap-2 text-gray-500 ">
              <p className="w-2/3">
                <i className="ri-car-line pr-2"></i> Semi- Automatic
              </p>
              <p className="w-2/3">
                {" "}
                <i className="ri-map-pin-line pr-2"></i> New York
              </p>
            </div>
          </div>
        </div>
        <div className="card max-w-sm sm:max-w-[18rem] md:max-w-[22rem] shadow-xl rounded-lg bg-white dark:bg-gray-800 overflow-hidden">
          <img src={HeroCar} alt="heroCar" />
          <div className="card-body flex flex-col gap-1 p-4">
            <div className="text-gray-800 dark:text-gray-300">
              <p className="car-title font-bold ">BMW X5</p>
              <p>SUV . 2006</p>
            </div>
            <div className="flex  gap-2 text-gray-500 ">
              <p className="w-2/3">
                {" "}
                <UsergroupDeleteOutlined className="pr-2" /> 4 Seats
              </p>
              <p className="w-2/3 ">
                <i className="ri-gas-station-line pr-2"></i> Hybrid
              </p>
            </div>
            <div className="flex  gap-2 text-gray-500 ">
              <p className="w-2/3">
                <i className="ri-car-line pr-2"></i> Semi- Automatic
              </p>
              <p className="w-2/3">
                {" "}
                <i className="ri-map-pin-line pr-2"></i> New York
              </p>
            </div>
          </div>
        </div>
        <div className="card max-w-sm sm:max-w-[18rem] md:max-w-[22rem] shadow-xl rounded-lg bg-white dark:bg-gray-800 overflow-hidden">
          <img src={HeroCar} alt="heroCar" />
          <div className="card-body flex flex-col gap-1 p-4">
            <div className="text-gray-800 dark:text-gray-300">
              <p className="car-title font-bold ">BMW X5</p>
              <p>SUV . 2006</p>
            </div>
            <div className="flex  gap-2 text-gray-500 ">
              <p className="w-2/3">
                {" "}
                <UsergroupDeleteOutlined className="pr-2" /> 4 Seats
              </p>
              <p className="w-2/3 ">
                <i className="ri-gas-station-line pr-2"></i> Hybrid
              </p>
            </div>
            <div className="flex  gap-2 text-gray-500 ">
              <p className="w-2/3">
                <i className="ri-car-line pr-2"></i> Semi- Automatic
              </p>
              <p className="w-2/3">
                {" "}
                <i className="ri-map-pin-line pr-2"></i> New York
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="text-center my-10 ">
        
         <button className=" border border-gray-400 rounded-lg px-5 py-2 dark:text-gray-300 hover:bg-gray-100 hover:border-slate-300">Explore all cars <ArrowRightOutlined className="pl-2" /></button>
      </div>
    </div>
  );
}
