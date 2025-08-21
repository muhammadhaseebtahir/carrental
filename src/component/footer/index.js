import React from "react";

export default function Footer() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-10 ">
      <div className="let-side">
      <h1>
        Car<span className="text-blue-600">Rental</span>
      </h1>
      <p className="text-sm text-gray-500">
        Premium car rental service with a wide selection of luxury and everyday
        vehicles for all your driving needs.
      </p>
<div className="icons-part">
  <i class="ri-facebook-fill"></i>
  <i class="ri-instagram-line"></i>
  <i class="ri-twitter-line"></i>
  <i class="ri-mail-line"></i>
</div>



      </div>
    </div>
  );
}
