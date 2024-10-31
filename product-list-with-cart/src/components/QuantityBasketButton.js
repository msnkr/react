import { useState } from "react";
import YourCart from "./YourCart";

function QuantityBasketButton(index) {
  const [quantity, setQuantity] = useState(0);

  function IncrementQuantity() {
    setQuantity(quantity + 1);
  }

  function DecrementQuantity() {
    quantity <= 0 ? setQuantity(0) : setQuantity(quantity - 1);
  }

  YourCart(index, quantity);
  return (
    <div>
      <div
        className="absolute w-[180px] h-[50px] bg-rose-700 px-4 py-2 
      rounded-full left-1/2 
      translate -translate-x-1/2 border-2 border-rose-700 -top-8 flex items-center justify-between"
      >
        <div className="decrease" onClick={DecrementQuantity}>
          <svg
            className="rounded-full w-[20px] h-[20px] border p-1 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="2"
            fill="none"
            viewBox="0 0 10 2"
          >
            <path fill="#fff" d="M0 .375h10v1.25H0V.375Z" />
          </svg>
        </div>
        <div className="quantity font-semibold text-white">{quantity}</div>
        <div className="increase">
          <svg
            className="rounded-full w-[20px] h-[20px] border p-1 cursor-pointer"
            onClick={IncrementQuantity}
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            fill="none"
            viewBox="0 0 10 10"
          >
            <path
              fill="#fff"
              d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default QuantityBasketButton;
