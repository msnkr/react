export default function IncreaseButton({ count, clicked }) {
  return (
    <button
      onClick={() => clicked(count)}
      className=" bg-black text-white px-4 py-2 rounded-lg"
    >
      Increase
    </button>
  );
}
