function Testimonial({ image, wording, name, position }) {
  return (
    <div className="text-center mt-12 font-barlow">
      <div>
        <img className="rounded-full mx-auto w-20 h-20" src={image} />
      </div>
      <div>
        <p className="text-xl font-semibold mt-8">{wording}</p>
      </div>
      <div>
        <p className="text-2xl font-bold mt-8">{name}</p>
      </div>
      <div>
        <p className="text-gray-500">{position}</p>
      </div>
    </div>
  );
}

export default Testimonial;
