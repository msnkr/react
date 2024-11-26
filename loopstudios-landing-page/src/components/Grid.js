export default function Grid({ arr, wordingArr }) {
  return (
    <div>
      {arr.map((x, index) => (
        <div key={index} className="relative">
          <p
            className="text-white absolute top-1/2 -translate-y-1/2 left-8 text-4xl uppercase w-2/4 
          tracking-wider leading-8 font-thin"
          >
            {wordingArr[index]}
          </p>
          <img className="py-4" src={x} />
        </div>
      ))}
    </div>
  );
}
