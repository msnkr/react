export default function Grid({ arr }) {
  return (
    <div>
      {arr.map((x, index) => (
        <div key={index}>
          <img src={x} />
        </div>
      ))}
    </div>
  );
}
