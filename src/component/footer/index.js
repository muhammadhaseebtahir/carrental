import React from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function Footer() {
  const location= useLocation()
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className={`px-6 md:px-16 lg:px-24 xl:px-32 pt-14 text-gray-500 ${location.pathname.startsWith("/product-details") ? "dark:bg-gray-800 dark:border-t dark:border-gray-200 " : "dark:bg-gray-900 dark:border-t dark:border-gray-200"}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
    >
      {/* Top Sections */}
      <div className="flex flex-wrap items-start justify-between gap-10 pb-6 border-b border-gray-400 dark:border-gray-500">
        {/* Brand */}
        <motion.div
          className="w-full max-w-80 space-y-3"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold dark:text-gray-300">
            Car<span className="text-blue-500">Rental</span>
          </h1>
          <p className="tex-sm">
            Premium car rental service with a wide selection of luxury and
            everyday vehicles for all your driving needs.
          </p>
          <div className="flex gap-3 text-gray-500">
            <i className="ri-facebook-fill text-2xl "></i>
            <i className="ri-instagram-line text-2xl "></i>
            <i className="ri-twitter-line text-2xl "></i>
            <i className="ri-mail-line text-2xl "></i>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
          <p className="text-lg text-gray-800 dark:text-gray-100">Quick Links</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            <li>Home</li>
            <li>Broswer Cars</li>
            <li>List your Cars</li>
            <li>About us</li>
          </ul>
        </motion.div>

        {/* Resources */}
        <motion.div variants={fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
          <p className="text-lg text-gray-800 dark:text-gray-100">Resources</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            <li>Help Center</li>
            <li>Term of services</li>
            <li>Privacy Policy</li>
            <li>Insurance</li>
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div variants={fadeUp} transition={{ duration: 0.6, delay: 0.3 }}>
          <p className="text-lg text-gray-800 dark:text-gray-100">Contact</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            <li>1234 Luxry Drive</li>
            <li>San Francisco, CA 94107</li>
            <li>+92 3294217903</li>
            <li>Info@gmail.com</li>
          </ul>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        className="flex flex-col md:flex-row gap-2 items-center justify-between py-5"
        variants={fadeUp}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <p>
          © {new Date().getFullYear()}{" "}
          <a href="https://prebuiltui.com">PrebuiltUI</a>. All rights reserved.
        </p>
        <ul className="flex items-center gap-4">
          <li>Privacy</li>
          <li>|</li>
          <li>Terms</li>
          <li>|</li>
          <li>Sitemap</li>
        </ul>
      </motion.div>
    </motion.div>
  );
}
