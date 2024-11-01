import data from "../data.json";
import { useState } from "react";

function YourCart(index, quantity) {
  const newIndex = index.onClick;

  return (
    <div>
      <div className="mt-16 px-8">
        <div>
          <div className="bg-white">
            <h1 className="text-4xl pt-4 font-bold text-rose-700">
              Your Cart (8)
            </h1>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YourCart;
