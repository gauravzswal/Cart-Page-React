import React, { useContext } from "react";
import { FaCartPlus } from "react-icons/fa";
import { CartPageContext } from "../Context/CartContext";

const Nav = () => {
  const { product } = useContext(CartPageContext); // Access product from context
  const totalItems = product.reduce((sum, item) => sum + item.amount, 0); // Calculate total items

  return (
    <div className="bg-blue-400 h-[13vh] justify-around flex items-center">
      <h1 className="text-4xl">Cart Page</h1>
      <div className="relative">
        <FaCartPlus className=" text-4xl" />
        <p className="absolute -top-4 -right-5 text-xl bg-black rounded-[50%] w-8 text-center">
          {totalItems} {/* Display total items */}
        </p>
      </div>
    </div>
  );
};

export default Nav;