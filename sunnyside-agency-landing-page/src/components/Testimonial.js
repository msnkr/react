function Testimonial({ image, wording, name, position }) {
  return (
    <div className="text-center mt-12 space-y-6">
      <div>
        <img className="rounded-full mx-auto" src={image} />
      </div>
      <div>
        <p className="text-xl font-barlow font-semibold">{wording}</p>
      </div>
      <div>
        <p className="text-2xl font-bold">{name}</p>
      </div>
      <div>
        <p className="text-red-100">{position}</p>
      </div>
    </div>
  );
}

export default Testimonial;
