import Card from "./components/Card";
import dataFile from "./data.json";

export default function App() {
  return (
    <div>
      <div className="p-8">
        <h1 className="text-5xl font-bold mb-8">Desserts</h1>
        <div className="space-y-8">
          {dataFile.map((data, index) => (
            <div key={index}>
              <Card
                img={require(`${data.image.mobile}`)}
                subheading={data.category}
                heading={data.name}
                price={data.price}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
