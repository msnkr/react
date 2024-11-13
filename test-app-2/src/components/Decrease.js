export default function Decrease({ pressed }) {
  return (
    <button className="bg-black text-white p-4 rounded-xl" onClick={pressed}>
      Decrease
    </button>
  );
}
