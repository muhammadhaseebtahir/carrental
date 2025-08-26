import React from "react";

import { ArrowRightOutlined } from "@ant-design/icons";

import banerCar from "../../../component/assest/banner-car.png";
import { cardData } from "../../../component/assest";

import { motion } from "framer-motion";
import Card from "../../../component/card";

export default function FeaturedVechial() {
  return (
    <div className="bg-white dark:bg-gray-900 overflow-hidden ">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center text-gray-900 dark:text-slate-100 pt-10 text-4xl md:text-5xl font-bold"
      >
        Featured Vehicles
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-sm p-5 pb-10 text-center pt-3 text-gray-700  dark:text-slate-200"
      >
        Explore our selection of premium vehicles available for your next
        adventure.
      </motion.p>

      {/* *************Card ******************* */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }} // 👈 animate when in view
        viewport={{ once: false, amount: 0.1 }} // 👈 only once, 20% visible hone par
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
        className="flex flex-wrap gap-6  items-center justify-center "
      >
        {cardData.slice(0, 6).map((item, i) => (
          <Card card={item} key={i}  />
        ))}
      </motion.div>
      <div className="text-center my-10 ">
        <button className=" border border-gray-400 rounded-lg px-5 py-2 dark:text-gray-300 hover:bg-gray-50 hover:border-slate-300">
          Explore all cars <ArrowRightOutlined className="pl-2" />
        </button>
      </div>

      {/* **********************Banner Section********************* */}

      <motion.div
        initial={{ opacity: 0, y: 100 }} // 👈 shuru me neeche aur hidden
        whileInView={{ opacity: 1, y: 0 }} // 👈 jab viewport me aaye to upar aa jaye
        viewport={{ once: true, amount: 0.2 }} // 👈 ek hi dafa animate hoga (20% visible hone par trigger)
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mx-auto w-full overflow-hidden flex flex-col md:flex-row justify-between items-center  md:gap-0 p-7 md:p-10  md:max-w-6xl bg-gradient-to-r  from-blue-600 to-blue-300 rounded-xl   "
      >
        <div className="left-side space-y-5">
          <h1 className="text-3xl font-semibold text-white">
            Do You Own a Luxury Car?
          </h1>
          <p className="text-white max-w-full md:max-w-lg">
            Monetize your vehicle effortlessly by listing it on CarRental. We
            take care of insurance, driver verification and secure payments — so
            you can earn passive income, stress-free.
          </p>
          <button className="px-4 py-2 rounded-lg bg-white text-blue-500 hover:bg-gray-200 hover:scale-105 transition-all">
            List your car
          </button>
        </div>
        <div className="right-side mt-4 md:mt-0">
          <motion.img
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            src={banerCar}
            alt={banerCar}
            className="max-w-sm"
          />
        </div>
      </motion.div>
    </div>
  );
}


