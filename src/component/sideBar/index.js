import React, { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { NavLink, useLocation } from "react-router-dom";
import { ownerMenuLinks } from "../assest/index";

export default function SideBar() {
  const { user } = useAuthContext();
  const location = useLocation();
  const [image, setImage] = useState(null);

  const updateImage = () => {
    if (image) {
      user.image = URL.createObjectURL(image); // demo ke liye, real case me API call
      setImage(null);
    }
  };

  return (
    <div className="relative h-screen flex flex-col items-center md:items-start pt-8 max-w-14 md:max-w-60 w-full border-r border-gray-300 text-sm">
      
      {/* Profile Image */}
      <div className="w-full flex justify-center ">
        <div className="group relative">
          <label htmlFor="image">
            {user.image || image ? (
              <img
                src={image ? URL.createObjectURL(image) : user.image}
                alt="profile"
                className="w-10 h-10 md:w-16 md:h-16 rounded-full object-cover"
              />
            ) : (
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-gray-200 flex items-center justify-center text-xl md:text-2xl text-gray-500">
                <i className="ri-user-line"></i>
              </div>
            )}

            <input
              type="file"
              id="image"
              hidden
              onChange={(e) => setImage(e.target.files[0])}
              name="image"
              accept="image/*"
            />

            <div className="absolute hidden top-0 right-0 left-0 bottom-0 bg-black/20 rounded-full group-hover:flex items-center justify-center cursor-pointer text-white">
              <i className="ri-camera-fill"></i>
            </div>
          </label>
        </div>
      </div>

      {/* Save button */}
      {image && (
        <div className="w-full flex justify-center md:justify-start">
          <button
            onClick={updateImage}
            className="mt-3 md:mt-4   flex items-center gap-1 px-2 md:px-3 py-1 bg-blue-100 text-blue-600 rounded-md text-xs md:text-sm"
          >
            Save <i className="ri-checkbox-circle-line text-lg"></i>
          </button>
        </div>
      )}

      {/* User Name */}
      <p className="mt-2 text-sm md:text-base max-md:hidden text-center md:text-center w-full px-2 md:px-6">
        {user.userName}
      </p>

      {/* Menu Links */}
      <div className="w-full mt-4 md:mt-6 flex flex-col items-center md:items-start gap-2 md:gap-0">
        {ownerMenuLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className={`relative flex items-center justify-center md:justify-start gap-2 
              w-12 md:w-full py-2 md:py-3 md:pl-6
              ${
                link.path === location.pathname
                  ? " text-gray-600 font-medium rounded-md md:rounded-none"
                  : "text-gray-600 hover:bg-gray-100 rounded-md md:rounded-none"
              }`}
          >
            <span className="text-lg md:text-xl flex-shrink-0">
              {link.path === location.pathname ? link.coloredIcon : link.icon}
            </span>
            <span className="hidden md:inline">{link.name}</span>
            {link.path === location.pathname && (
              <div className="hidden md:block bg-blue-500 w-1.5 h-8 rounded-lg right-0 absolute"></div>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
