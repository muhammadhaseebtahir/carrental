import React, { useState } from "react";
import { Button, message } from "antd";
import axios from "axios";

const initialState = {
  brand: "",
  model: "",
  year: "",
  pricePerDay: "",
  category: "",
  transmission: "",
  fuel_type: "",
  seating_capacity: "",
  location: "",
  description: "",
};

export default function AddCars() {
  const [state, setState] = useState(initialState);
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setState((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    let {
      brand,
      model,
      year,
      pricePerDay,
      category,
      transmission,
      fuel_type,
      seating_capacity,
      location,
      description,
    } = state;

    // ✅ trim only string fields
    brand = brand.trim();
    model = model.trim();
    category = category.trim();
    transmission = transmission.trim();
    fuel_type = fuel_type.trim();
    location = location.trim();
    description = description.trim();

    // ✅ convert numbers
    year = Number(year);
    pricePerDay = Number(pricePerDay);
    seating_capacity = Number(seating_capacity);

    // Basic validation
    if (
      !brand ||
      !model ||
      !year ||
      !pricePerDay ||
      !category ||
      !transmission ||
      !fuel_type ||
      !seating_capacity ||
      !location ||
      !description
    ) {
      return message.error("Please fill all the inputs.");
    }

    // Price validation
    if (isNaN(pricePerDay) || pricePerDay <= 0) {
      return message.error("Price must be a positive number.");
    }

    // Image validation
    if (!image) {
      return message.error("Please select an image.");
    }

    setIsLoading(true);

    try {
      const formData = new FormData();
      const product = {
        brand,
        model,
        year,
        pricePerDay,
        category,
        transmission,
        fuel_type,
        seating_capacity,
        location,
        description,
      };

      formData.append("product", JSON.stringify(product));
      formData.append("image", image);

      await axios.post("http://localhost:8000/dashboard/addproduct", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setIsLoading(false);
      message.success("Car added successfully");
      setState(initialState);
      setImage(null);
    } catch (err) {
      console.error("Error:", err);
      message.error(err.response?.data?.message || "Error adding car. Please try again.");
      setIsLoading(false);    
    } 
  };

  return (
    <div className="px-4 py-10 md:px-10 flex-1">
      <h1 className="text-3xl font-semibold">Add New Car</h1>
      <p className="text-gray-400 pt-1">
        Fill in details to list a new car for booking, including pricing,
        availability, and car specifications.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5  text-sm mt-6 max-w-xl"
      >
        {/* ************* Upload Image ************* */}
        <div className="flex items-center gap-2 w-full">
          <label
            htmlFor="car-image"
            className="cursor-pointer bg-gray-200 rounded-lg "
          >
            {image ? (
              <div className="h-16 w-16 rounded-lg overflow-hidden">
                <img
                  src={URL.createObjectURL(image)}
                  alt="car"
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="h-16 w-16 flex items-center justify-center">
                <i className="ri-chat-upload-line text-2xl text-gray-400"></i>
              </div>
            )}
            <input
              type="file"
              hidden
              id="car-image"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </label>
          <p className="text-sm text-gray-500 pl-3">
            Upload a picture of your car
          </p>
        </div>

        {/* Brand and Model */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col w-full">
            <label>Brand</label>
            <input
              type="text"
              placeholder="e.g. BMW, Mercedes, Audi..."
              required
              value={state.brand}
              name="brand"
              className="px-3 py-2 border border-gray-400 rounded-md outline-none"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col w-full">
            <label>Model</label>
            <input
              type="text"
              placeholder="e.g. X5, E-Class, M4..."
              required
              value={state.model}
              name="model"
              className="px-3 py-2 border border-gray-400 rounded-md outline-none"
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Year, Price, Category */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="flex flex-col w-full">
            <label>Year</label>
            <input
              type="number"
              placeholder="2025"
              required
              value={state.year}
              name="year"
              className="px-3 py-2 border border-gray-400 rounded-md outline-none"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col w-full">
            <label>Daily price $</label>
            <input
              type="number"
              placeholder="100"
              required
              value={state.pricePerDay}
              name="pricePerDay"
              className="px-3 py-2 border border-gray-400 rounded-md outline-none"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col w-full">
            <label>Category</label>
            <select
              value={state.category}
              name="category"
              onChange={handleChange}
              className="px-3 py-2 border border-gray-400 rounded-md outline-none"
              required
            >
              <option value="">Select category</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="Van">Van</option>
            </select>
          </div>
        </div>

        {/* Transmission, Fuel, Seating */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="flex flex-col w-full">
            <label>Transmission</label>
            <select
              value={state.transmission}
              name="transmission"
              onChange={handleChange}
              className="px-3 py-2 border border-gray-400 rounded-md outline-none"
              required
            >
              <option value="">Select a transmission</option>
              <option value="Automatic">Automatic</option>
              <option value="Manual">Manual</option>
              <option value="Semi-Automatic">Semi-Automatic</option>
            </select>
          </div>
          <div className="flex flex-col w-full">
            <label>Fuel Type</label>
            <select
              value={state.fuel_type}
              name="fuel_type"
              onChange={handleChange}
              className="px-3 py-2 border border-gray-400 rounded-md outline-none"
              required
            >
              <option value="">Select fuel type</option>
              <option value="Gas">Gas</option>
              <option value="Diesel">Diesel</option>
              <option value="Petrol">Petrol</option>
              <option value="Electric">Electric</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>
          <div className="flex flex-col w-full">
            <label>Seating Capacity</label>
            <input
              type="number"
              placeholder="0"
              className="px-3 py-2 border border-gray-400 rounded-md outline-none"
              name="seating_capacity"
              value={state.seating_capacity}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Location */}
        <div className="flex flex-col w-full">
          <label>Location</label>
          <select
            value={state.location}
            name="location"
            onChange={handleChange}
            className="px-3 py-2 border border-gray-400 rounded-md outline-none"
            required
          >
            <option value="">Select a location</option>
            <option value="New York">New York</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Houston">Houston</option>
            <option value="Chicago">Chicago</option>
          </select>
        </div>

        {/* Description */}
        <div className="flex flex-col w-full">
          <label>Description</label>
          <textarea
            rows={5}
            placeholder="description"
            required
            value={state.description}
            name="description"
            className="px-3 py-2 border border-gray-400 rounded-md outline-none"
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Submit Button */}
        <Button
          loading={isLoading}
          htmlType="submit"
          type="primary"
          className="px-4 py-2 "
        >
          Save Car
        </Button>
      </form>
    </div>
  );
}
