import AddToBasketButton from "./AddToBasketButton";
import QuantityBasketButton from "./QuantityBasketButton";
import { useState } from "react";

function Card({ img, category, title, price }) {
  const [showQuantityBasked, setShowQuantityBasket] = useState(false);

  function ShowBasket() {
    setShowQuantityBasket(true);
  }

  return (
    <div className="px-8 py-2">
      <div className="card">
        <div className="card-image">
          <img className="rounded-xl" src={img} />
          <div className="relative">
            {showQuantityBasked ? (
              <QuantityBasketButton />
            ) : (
              <div onClick={ShowBasket}>
                <AddToBasketButton />
              </div>
            )}
          </div>
        </div>
        <div className="card-wording mt-12">
          <div className="card-description">
            <p className="text-gray-400">{category}</p>
          </div>
          <div className="card-title">
            <p className="text-xl font-semibold">{title}</p>
          </div>
          <div className="card-price">
            <p className="text-2xl font-semibold text-rose-700">${price}0</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
