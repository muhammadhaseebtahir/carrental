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
      // yahan aap context ya backend API call se image update karo
      user.image = URL.createObjectURL(image);
      setImage(null);
    }
  };

  return (
    <div className="relative min-h-screen md:flex flex-col items-center pt-8 max-w-14 md:max-w-60 w-full border-r border-gray-300 text-sm">
      
      {/* Profile Image */}
      <div className="group relative">
        <label htmlFor="image">
          {user.image || image ? (
            <img
              src={image ? URL.createObjectURL(image) : user.image}
              alt="profile"
              className="w-14 h-14 rounded-full object-cover"
            />
          ) : (
            <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center text-2xl text-gray-500">
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

      {/* Save button */}
      {image && (
        <button
          onClick={updateImage}
          className="absolute top-24 flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-600 rounded-md text-sm"
        >
          Save <i className="ri-checkbox-circle-line text-lg"></i>
        </button>
      )}

      {/* User Name */}
      <p className="mt-2 text-base max-md:hidden">{user.userName}</p>

      {/* Menu Links */}
      <div className="w-full mt-6">
        {ownerMenuLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className={`relative flex items-center gap-2 w-full py-3 pl-4 
              ${
                link.path === location.pathname
                  ? "bg-purple-500 text-white font-medium"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
          >
            <span>
              {link.path === location.pathname ? link.coloredIcon : link.icon}
            </span>
            <span>{link.name}</span>
            {link.path === location.pathname && (
              <div className="bg-purple-500 w-1.5 h-8 rounded-lg right-0 absolute"></div>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
