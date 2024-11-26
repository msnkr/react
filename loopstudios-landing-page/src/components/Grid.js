export default function Grid({ arr }) {
  return (
    <div>
      {arr.map((x, index) => (
        <div key={index} className="relative">
          <p className="text-white absolute top-1/2 left-8 text-xl">
            Hello, World!
          </p>
          <img className="py-4" src={x} />
        </div>
      ))}
    </div>
  );
}
