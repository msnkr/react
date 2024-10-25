import AddToBasket from "./AddToBasket";

export default function Card({ img, subheading, heading, price }) {
  return (
    <div>
      <div>
        <div className="card-start relative">
          <div className="card-image relative">
            <img className="w-full rounded-xl" src={img} />
          </div>
          <div>
            <AddToBasket />
          </div>
          <div className="card-wording mt-8">
            <p className="text-gray-400 text-sm">{subheading}</p>
            <p className="font-semibold text-lg">{heading}</p>
            <p className="text-xl font-semibold text-rose-600">${price}0</p>
          </div>
        </div>
      </div>
    </div>
  );
}
