import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import HeroCar from "../../../component/assest/car.webp"
import Loader from "../../../component/loader";

export default function ProductDetails() {
  const navigate= useNavigate()
  const location = useLocation();
  const { card } = location.state || {}; // safe access



const handleSubmit=(e)=>{


}

  return card ? (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 my-16 mb-64">
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
<img src={HeroCar} alt="HeroCar" className="w-full h-auto md:max-h-100 object-cover rounded-xl mb-6  shadow-md" />
<div className="space-y-6">
  <div>
    <h1 className="font-bold text-3xl" >{card.title}</h1>
    <p className="text-gray-500 text-xl">{card.model}</p>
   
  </div>
  <hr  className="border border-gary-500 " />
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-4  mt-6">
  {
    [{icon:<i className="ri-group-line"></i>,text: "4 Seats" },
     {icon: <i className="ri-gas-station-line"></i>,text:"Disel"},
     {icon: <i className="ri-car-line "></i>,text:"Automatic"},
     {icon:<i className="ri-map-pin-line "></i>,text:"Los Angeles"}
    ].map((item,index)=>(
      <div key={index} className="flex flex-col  items-center bg-gray-200 p-4 rounded-lg">
        {item.icon}
        <p  >{item.text}</p>

      </div>
    ))
  }

</div>
{/* ***********Description**************** */}
<div>
  <p className="font-medium mb-3 text-xl`">Description</p>
  <p className="text-gray-500" >The Toyota Corolla is a mid-size luxury sedan produced by Toyota. The Corolla made its debut in 2008 as the first sedan ever produced by Toyota.</p>
</div>
{/* ******************Features******************** */}

<div>
  <h1 className="text-xl font-medium mb-3" > Features</h1>
<ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
  {
    [
      "360 Camera","Bluetooth","GPS","Heated Seats","Rear View Mirror"
    ].map((item,i)=>(
<li key={i}  className="flex items-center text-gray-500" >
  <i className="ri-checkbox-circle-line mr-2"></i>
  {item}
</li>
    ))
  }

</ul>
</div>



</div>
{/* ***********Righth side************ */}
<form onSubmit={handleSubmit} className="shadow-lg h-max sticky top-20 rounded-xl p-6 space-y-6 text-gray-500">

<p className="flex items-center justify-between text-2xl text-gray-800 font-semibold" ></p>
${card.rentPerDay} <span  className="text-gray-400 font-normal"  >Per day</span>
<hr  className="border dorder-gray-500 " />
<div className="flex flex-col gap-2" >
<label htmlFor="pickup-date" >Pickup Date</label>
<input type="date" required min={new Date().toISOString().split('T')[0]} className="border border-gray-500 outline-none   px-3 py-2 rounded-lg "  />
 
</div>
<div className="flex flex-col gap-2" >
<label htmlFor="pickup-date" >Return Date</label>
<input type="date" required   className="border border-gray-500    px-3 py-2 rounded-lg  outline-none"  />
 
</div>

<button className="w-full bg-blue-600 hover:bg-blue-700 translate-all py-3 font-medium text-white rounded-xl " >Book Now</button>
<p className="text-gray-500 text-sm text-center">No credit card required to reserve</p>

</form>

        </div>
      
    </div>
  ) : (
    <Loader/>
  )
}
