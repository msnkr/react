import Card from "./components/Card";
import data from "./data.json";

import waffle from "./images/image-waffle-mobile.jpg";

export default function App() {
  return (
    <div>
      <div className="p-8">
        <h1 className="text-5xl font-bold mb-8">Desserts</h1>
        <div className="relative">
          <Card
            img={waffle}
            subheading={data[0].category}
            heading={data[0].name}
            price={data[0].price}
          />
        </div>
      </div>
    </div>
  );
}
