import { useState } from "react";

export default function Card({ img, subheading, heading, price }) {
  const [quantity, setQuantity] = useState(1);

  function displayBasket() {}

  function increase() {
    setQuantity(quantity + 1);
  }

  function decrease() {
    if (quantity <= 0) {
      setQuantity(0);
    } else {
      setQuantity(quantity - 1);
    }
  }

  return (
    <div>
      <div>
        <div className="card-start">
          <div className="card-image relative">
            <img className="w-full rounded-xl" src={img} />
          </div>
          <div className="card-wording mt-8">
            <p className="text-gray-400">{subheading}</p>
            <p className="font-semibold text-lg">{heading}</p>
            <p className="text-xl font-semibold text-rose-600">${price}0</p>
          </div>
        </div>
      </div>
    </div>
  );
}
