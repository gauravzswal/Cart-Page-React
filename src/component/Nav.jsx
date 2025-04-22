import React from "react";
import { FaCartPlus } from "react-icons/fa";

const Nav = () => {
  return (
    <div className="bg-blue-400 h-[13vh] justify-around flex items-center">
      <h1 className="text-4xl">Cart Page</h1>
      <div className="relative">
        <FaCartPlus className=" text-4xl" />
        <p className="absolute -top-4 -right-5 text-xl bg-black rounded-[50%] w-8 text-center">
          0
        </p>
      </div>
    </div>
  );
};

export default Nav;
