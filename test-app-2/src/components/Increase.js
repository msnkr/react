export default function Increase({ pressed }) {
  return (
    <button className="bg-black text-white p-4 rounded-xl" onClick={pressed}>
      Increase
    </button>
  );
}
