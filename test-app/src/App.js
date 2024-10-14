import { people } from "./faker";

function Person({ people }) {
  return (
    <div className="grid grid-cols-4 gap-20 text-center">
      {people.map((p, index) => (
        <div key={index}>
          <img className="rounded-xl" src={p.avatar} />
          <h1 className="text-md font-semibold">{p.displayName}</h1>
          <p className="text-xs text-gray-400">
            {p.firstName} {p.lastName}
          </p>
          <p className="text-xs text-gray-400">{p.email}}</p>
        </div>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <div className="p-8">
      <Person people={people} />
    </div>
  );
}
