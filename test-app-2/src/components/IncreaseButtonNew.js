export default function IncreaseButtonNew({ handleClick }) {
  return (
    <button
      onClick={handleClick}
      className="font-bold text-xl bg-black text-white px-4 py-1 rounded-lg"
    >
      +
    </button>
  );
}
