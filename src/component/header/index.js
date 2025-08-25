import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import {
  SearchOutlined,
  CloseOutlined,
  MenuOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Space, Input } from "antd";
import { useAuthContext } from "../../context/AuthContext";

export default function Header() {
  const location = useLocation();
  const { isAuthenticated, isAdmin, handleLogout } = useAuthContext();

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="sticky top-0 w-full z-50 border-b border-gray-300 dark:border-gray-700"
    >
      <div
        className={`flex items-center justify-between py-4 px-6 md:px-16 lg:px-24 xl:px-32 transition-all ${
          location.pathname === "/"
            ? "bg-slate-100 dark:bg-gray-800 dark:text-white"
            : "bg-white dark:bg-gray-900 dark:text-gray-100"
        }`}
      >
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold text-black dark:text-white hover:scale-110 transition duration-1000 transform hover:-rotate-2"
        >
          Car<span className="text-blue-600">Rental</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4 sm:gap-8">
          <Link
            to="/"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600"
          >
            Home
          </Link>
          <Link
            to="/my-bookings"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600"
          >
            My Bookins
          </Link>
          <Link
            to="/cars"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600"
          >
            Cars
          </Link>

          {/* Search */}
          <div className="hidden lg:flex items-center text-sm gap-2 rounded-full border border-gray-500 dark:border-gray-400 max-w-56 px-3">
            <input
              className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500 dark:placeholder-gray-400 text-black dark:text-white"
              placeholder="Search Product"
            />
            <SearchOutlined className="text-gray-600 dark:text-gray-300" />
          </div>

          {/* Auth Buttons */}
          <div>
            {!isAuthenticated ? (
              <Link to="/auth/login">
                <Button type="primary" className="px-4 py-2">
                  Login
                </Button>
              </Link>
            ) : !isAdmin ? (
              <Button
                type="primary"
                className="px-4 py-4"
                onClick={handleLogout}
              >
                Logout
              </Button>
            ) : (
              <Space>
                <Link to="/dashboard" >
                <Button className="px-4 py-4 bg-slate-50 dark:bg-gray-700 dark:text-white">
                  Dashboard
                </Button>
                </Link>
                <Button
                  type="primary"
                  className="px-4 py-4"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </Space>
            )}
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-xl text-blue-600"
        >
          {menuOpen ? <CloseOutlined /> : <MenuOutlined />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed right-0 top-0 h-full w-64 bg-white dark:bg-gray-900 dark:text-white shadow-lg z-50 transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 border-b border-gray-300 dark:border-gray-700 flex items-center justify-between">
          <h3 className="text-lg font-bold text-blue-600">Menu</h3>
          <button onClick={() => setMenuOpen(false)} className="text-xl">
            <CloseOutlined />
          </button>
        </div>

        <div className="p-4">
          <Input
            type="text"
            placeholder="Search....."
            className="w-full border dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400  p-2 pl-3 text-sm mb-4 bg-transparent dark:bg-gray-800 dark:text-white"
          />

          <nav className="space-y-4">
            <Link to="/" className="block hover:text-blue-600">
              Home
            </Link>
            <Link to="/my-bookings" className="block hover:text-blue-600">
              My Bookings
            </Link>
            <Link to="/cars" className="block hover:text-blue-600">
              Cars
            </Link>
          </nav>

          {/* Mobile Auth */}
          {!isAuthenticated ? (
            <Link to="/auth/login">
              <button
                onClick={() => setMenuOpen(false)}
                className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-500 flex items-center justify-center gap-2 mt-2"
              >
                <UserOutlined /> Login
              </button>
            </Link>
          ) : !isAdmin ? (
            <button
              className="w-full bg-blue-500 text-white rounded-md hover:bg-blue-700 py-2"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <div className="space-y-3 mt-3">
              <Link  to="/dashboard" >
              <button className="w-full bg-blue-500 text-white rounded-md hover:bg-blue-700 py-2"
             
              >
                Dashboard
              </button>
              </Link>
              <button
                className="w-full bg-blue-500 text-white rounded-md hover:bg-blue-700 py-2"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.header>
  );
}
