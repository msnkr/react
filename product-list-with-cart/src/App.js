import Card from "./components/Card";
import data from "./data.json";
import YourCart from "./components/YourCart";

export default function App() {
  return (
    <div className="main-container select-none">
      <div className="container-1">
        <div className="heading-container">
          <h1 className="text-4xl font-semibold p-8">Desserts</h1>
        </div>
        <div className="item-container">
          <div>
            {data.map((d, index) => (
              <div key={index}>
                <Card
                  img={require(`${d.image.mobile}`)}
                  category={d.category}
                  title={d.name}
                  price={d.price}
                  object={d}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="section-2">
        <YourCart />
      </div>
    </div>
  );
}
