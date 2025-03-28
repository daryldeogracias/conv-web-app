import React from "react";
import Bag from "@/public/Bag";

const Checkout = () => {
  return (
    <div className="fixed bottom-2 left-1/2 -translate-x-1/2 w-full px-4 z-50">
      <div className="flex justify-center px-4 py-2 shadow-xl gap-2 bg-violet-500 text-white rounded-md font-semibold max-w-[400px] mx-auto">
        <p>Checkout now!</p>
        <Bag />
        <em>
          <span className="text-white">50%</span>
        </em>
        <span>off</span>
        <p>{"->"}</p>
      </div>
    </div>
  );
};

export default Checkout;
