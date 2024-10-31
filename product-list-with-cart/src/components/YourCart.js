function YourCart({ prop }) {
  return (
    <div>
      <div className="mt-16 px-8">
        <div>
          <div className="bg-white">
            <h1 className="text-4xl pt-4 font-bold text-rose-700">
              Your Cart (8)
              <h1>{prop}</h1>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YourCart;
