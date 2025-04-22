import React, { useState } from "react";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";

const ProductList = ({ data }) => {
  const [product, setProduct] = useState(data);

  function handleClick(id, sign) {
    const updatedProduct = product.map((obj) => {
      if (obj.id === id) {
        const updatedAmount =
          sign === "+" ? obj.amount + 1 : Math.max(obj.amount - 1, 0);
        return { ...obj, amount: updatedAmount };
      }
      return obj;
    });

    setProduct(updatedProduct);
  }

  function handleRemove(id) {
    const removeCart = product.filter((obj) => {
      return obj.id !== id;
    });
    setProduct(removeCart);
  }

  function handleClear() {
    setProduct([]);
  }

  const total = product.reduce((prev, obj) => prev + obj.price * obj.amount, 0);

  return (
    <div className="flex flex-col items-center mt-20 gap-8 mb-20">
      {product.map((product) => (
        <div key={product.id} className="flex w-[60vw] ">
          <img src={product.img} alt={product.title} width="100" />
          <div className="flex justify-between w-full">
            <div>
              <h3>{product.title}</h3>
              <p>Price: $ {product.price}</p>
              <a href="#" onClick={() => handleRemove(product.id)}>
                Remove
              </a>
            </div>
            <div className="flex items-center flex-col text-2xl">
              <TiArrowSortedUp
                className="cursor-pointer"
                onClick={() => handleClick(product.id, "+")}
              />
              <p>{product.amount}</p>
              <TiArrowSortedDown
                className="cursor-pointer"
                onClick={() => handleClick(product.id, "-")}
              />
            </div>
          </div>
        </div>
      ))}

      <hr className="w-[60vw]" />

      <div className="w-[60vw] flex justify-between">
        <h1>Total</h1>
        <h1>$ {total}</h1>
      </div>

      <button
        className="m-auto border-2 bg-amber-900 rounded-xl px-4 py-2"
        onClick={handleClear}
      >
        Clear Cart
      </button>
    </div>
  );
};

export default ProductList;
