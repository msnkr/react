import AddToBasketButton from "./AddToBasketButton";
import QuantityBasketButton from "./QuantityBasketButton";
import { useState } from "react";

function Card({ index, img, category, title, price }) {
  const [showQuantityBasked, setShowQuantityBasket] = useState(false);
  const [newIndex, setNewIndex] = useState("");

  function showIndex(index) {
    return index;
  }

  function ShowBasket() {
    setShowQuantityBasket(true);
    setNewIndex(index);
  }

  return (
    <div className="px-8 py-2">
      <div className="card">
        <div className="card-image">
          <img className="rounded-xl" src={img} alt={title} />
          <div className="relative">
            {showQuantityBasked ? (
              <QuantityBasketButton onClick={showIndex(newIndex)} />
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
            <p className="text-2xl font-semibold text-rose-700">${price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
