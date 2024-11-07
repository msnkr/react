function Testimonial({ image, wording, name, position }) {
  return (
    <div className="text-center mt-12 font-fraunces text-very-dark-grayish-blue">
      <div>
        <img className="rounded-full mx-auto w-20 h-20" src={image} />
      </div>
      <div>
        <p className="text-xl font-semibold mt-8">{wording}</p>
      </div>
      <div>
        <p className="text-2xl font-bold mt-8 text-black">{name}</p>
      </div>
      <div>
        <p className="text-grayish-blue">{position}</p>
      </div>
    </div>
  );
}

export default Testimonial;
