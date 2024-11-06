function Testimonial({ image, wording, name, position }) {
  return (
    <div>
      <div>
        <img src={image} />
      </div>
      <div>
        <p>{wording}</p>
      </div>
      <div>
        <p>{name}</p>
      </div>
      <div>
        <p>{position}</p>
      </div>
    </div>
  );
}

export default Testimonial;
