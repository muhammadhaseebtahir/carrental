import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "../../../component/loader";
import { Button, message } from "antd";
import axios from "axios";
import { useAuthContext } from "../../../context/AuthContext";

const initialState = {
  pickupDate: "",
  returnDate: "",
};

export default function ProductDetails() {
  const {isAuthenticated} = useAuthContext()
  const navigate = useNavigate();
  const location = useLocation();
  const { card } = location.state || {}; // safe access
  const [state, setState] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setState((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { pickupDate, returnDate } = state;
    if (!pickupDate || !returnDate) {
      message.error("Please select both pickup and return dates");
          return;
    }
    if(!isAuthenticated){
      message.error("You need to be logged in to make a booking");
      return;
    }
    setIsLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:8000/booking/create-booking",
        {
          pickupDate,
          returnDate,
          car: card._id,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      message.success("Booking successful");
      setIsLoading(false)
      setState(initialState);
      // navigate("/");
    } catch (err) {
      console.log(err.response?.data?.error || err.message);
      message.error(err.response?.data?.message || "Something went wrong");
      setIsLoading(false)
    }

  
  
  };

  return card ? (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 py-16 pb-64 dark:bg-gray-800">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-1 mb-6 text-gray-500 font-medium group"
      >
        <i className="ri-arrow-left-line group-hover:rotate-[360deg] transition-transform duration-700"></i>
        Back to All cars
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 ">
        {/* ************Lift side ****** */}
        <div className="lg:col-span-2">
          <div className="w-full h-1/2 bg-gray-400   rounded-xl overflow-hidden mb-6  shadow-md">
            <img
              src={card.image.url}
              alt="HeroCar"
              className="w-full h-full  object-cover "
            />
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="font-bold text-3xl text-gray-100">{card.brand}</h1>
              <p className="text-gray-500 text-xl">
                {card.model} . {card.year}{" "}
              </p>
            </div>
            <hr className="border border-gary-500 " />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4  mt-6">
            {[
              { icon: <i className="ri-group-line"></i>, text: "4 Seats" },
              { icon: <i className="ri-gas-station-line"></i>, text: "Disel" },
              { icon: <i className="ri-car-line "></i>, text: "Automatic" },
              {
                icon: <i className="ri-map-pin-line "></i>,
                text: "Los Angeles",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col  items-center bg-gray-200 p-4 rounded-lg"
              >
                {item.icon}
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          {/* ***********Description**************** */}
          <div>
            <p className="font-medium mb-3 text-xl pt-3 dark:text-gray-100">
              Description
            </p>
            <p className="text-gray-500">{card.description}</p>
          </div>
          {/* ******************Features******************** */}

          <div>
            <h1 className="text-xl font-medium mb-3 dark:text-gray-100">
              {" "}
              Features
            </h1>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                "360 Camera",
                "Bluetooth",
                "GPS",
                "Heated Seats",
                "Rear View Mirror",
              ].map((item, i) => (
                <li key={i} className="flex items-center text-gray-500">
                  <i className="ri-checkbox-circle-line mr-2"></i>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* ***********Righth side************ */}
        <form
          onSubmit={handleSubmit}
          className="shadow-lg  dark:border-gray-300 dark:border dark:bg-gray-800  h-max sticky top-20 rounded-xl p-6 space-y-6 text-gray-500"
        >
          <p className="flex items-center justify-between text-2xl text-gray-800 font-semibold"></p>
          ${card.rentPerDay}{" "}
          <span className="text-gray-400 font-normal dark:text-gray-200 ">
            Per day
          </span>
          <hr className="border dorder-gray-500 " />
          <div className="flex flex-col gap-2">
            <label htmlFor="pickup-date">Pickup Date</label>
            <input
              type="date"
              onChange={handleChange}
              name="pickupDate"
              value={state.pickupDate}
              required
              min={new Date().toISOString().split("T")[0]}
              className="border border-gray-500 outline-none   px-3 py-2 rounded-lg "
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="pickup-date">Return Date</label>
            <input
              type="date"
              onChange={handleChange}
              name="returnDate"
              value={state.returnDate}
              required
              className="border border-gray-500    px-3 py-2 rounded-lg  outline-none"
            />
          </div>
          <Button
            htmlType="submit"
            loading={isLoading}
            type="primary"
            className="w-full  py-3 font-medium rounded-lg "
          >
            Book Now
          </Button>
          <p className="text-gray-500 text-sm text-center">
            No credit card required to reserve
          </p>
        </form>
      </div>
    </div>
  ) : (
    <Loader />
  );
}
