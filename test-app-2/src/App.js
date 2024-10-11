const fruits = ["apple", "grapes", "mango"];

const listItems = fruits.map((fruit) => (
  <li className="text-gray-400">{fruit}</li>
));

export default function Hello() {
  return (
    <div className="container mt-[100px] ml-[100px]">
      <h1 className="text-4xl font-bold text-red-400">Hello, World!</h1>
      <ul className="space-y-2 mt-6">{listItems}</ul>
    </div>
  );
}
