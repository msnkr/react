export default function DisplayList({ arr }) {
  return (
    <div>
      {arr.map((x, index) => (
        <div key={index}>
          <li className="capitalize font-semibold">{x}</li>
        </div>
      ))}
    </div>
  );
}
