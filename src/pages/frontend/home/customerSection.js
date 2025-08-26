import React from "react";
import { motion } from "framer-motion";
import { Rate } from 'antd';

import reviewCard from "../../../component/assest/reviewcard.png";

export default function CustomerSection() {
  return (
    <div className="bg-white dark:bg-gray-900 overflow-hidden px-4">
      <h1 className=" pt-10 md:pt-20 text-center font-bold  text-4xl dark:text-gray-300">
        What Our Customers Say
      </h1>
      <p className="mx-auto text-center text-gray-500 mt-3 max-w-full md:max-w-2xl">
        Discover why discerning travelers choose StayVenture for their luxury
        accommodations around the world.
      </p>
{/* *******************Review card***************** */}
      <div className="flex flex-wrap justify-center items-center gap-6 pt-6">
        <motion.div 
         whileHover={{y:-8}}
         transition={{duration:0.3,ease:"easeOut"}}
        className="review-card p-5  max-w-xl md:max-w-xs space-y-3 shadow-lg rounded-lg bg-white dark:bg-gray-800">
          <div className="flex items-center">
            <div className="crad-image p-3">
              <img src={reviewCard} alt="Reviewcard" className="w-14" />
            </div>
            <div className="card-tittle">
              <p className="text-xl font-semibold dark:text-white">Emma Rodriguez</p>
              <p className="text-gray-500">Barcelona, Spain</p>
            </div>
          </div>
          <div className="p-3">
            <Rate disabled defaultValue={5} />
          <p className="text-gray-500 pb-3">
            "I've rented cars from various companies, but the experience with
            CarRental was exceptional."
          </p>
          </div>
        </motion.div>
        <div className="review-card p-5  max-w-xl md:max-w-xs space-y-3 shadow-lg rounded-lg bg-white dark:bg-gray-800">
          <div className="flex items-center">
            <div className="crad-image p-3">
              <img src={reviewCard} alt="Reviewcard" className="w-14" />
            </div>
            <div className="card-tittle">
              <p className="text-xl font-semibold dark:text-white">Emma Rodriguez</p>
              <p className="text-gray-500">Barcelona, Spain</p>
            </div>
          </div>
          <div className="p-3">
            <Rate disabled defaultValue={5} />
          <p className="text-gray-500 pb-3">
            "I've rented cars from various companies, but the experience with
            CarRental was exceptional."
          </p>
          </div>
        </div>
        <div className="review-card p-5  max-w-xl md:max-w-xs space-y-3 shadow-lg rounded-lg bg-white dark:bg-gray-800">
          <div className="flex items-center">
            <div className="crad-image p-3">
              <img src={reviewCard} alt="Reviewcard" className="w-14" />
            </div>
            <div className="card-tittle">
              <p className="text-xl font-semibold dark:text-white">Emma Rodriguez</p>
              <p className="text-gray-500">Barcelona, Spain</p>
            </div>
          </div>
          <div className="p-3">
            <Rate disabled defaultValue={5} />
          <p className="text-gray-500 pb-3">
            "I've rented cars from various companies, but the experience with
            CarRental was exceptional."
          </p>
          </div>
        </div>
      </div>



<div className="h-[80vh] flex flex-col items-center justify-center gap-3 px-4">
  <motion.h1
  initial={{opacity:0,y:50}}
  whileInView={{opacity: 1, y: 0}}
  viewport={{ once: false, amount: 0.2 }}
   transition={{ duration: 0.7, ease: "easeOut" }}
  className="text-4xl font-bold text-gray-900 dark:text-gray-200 text-center">
    Never Miss a Deal!
  </motion.h1>
  <motion.p
    initial={{opacity:0,y:50}}
  whileInView={{opacity: 1, y: 0}}
  viewport={{ once: false, amount: 0.2 }}
   transition={{ duration: 0.7, ease: "easeOut" }}
  className="text-gray-500 text-center max-w-xl">
    Subscribe to get the latest offers, new arrivals, and exclusive discounts
  </motion.p>

  <motion.div
    initial={{opacity:0,y:50}}
  whileInView={{opacity: 1, y: 0}}
  viewport={{ once: false, amount: 0.2 }}
   transition={{ duration: 0.7, ease: "easeOut" }}
  className="subscribe w-full max-w-2xl flex pt-8">
    <input
      type="text"
      placeholder="Enter your email id"
      className="flex-1 p-3 text-gray-700 outline-none border border-gray-300 rounded-l-lg"
    />
    <button className="bg-blue-600 text-white px-6 rounded-r-lg hover:bg-blue-700 transition-colors">
      Subscribe
    </button>
  </motion.div>
</div>

    </div>
  );
}


