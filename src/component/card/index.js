import React from 'react'
import { UsergroupDeleteOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
export default function Card() {
  return (
     
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
  )
}
