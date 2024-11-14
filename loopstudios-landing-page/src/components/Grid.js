export default function Grid({ img, text }) {
  return (
    <div className="relative">
      <div className="px-8 py-4">
        <img src={img} />
      </div>
      <div className="absolute top-1/2 left-16 text-white text-4xl uppercase -translate-y-1/2">
        <p>{text}</p>
      </div>
    </div>
  );
}
