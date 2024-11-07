function ImageComponent({ image }) {
  return (
    <div>
      <img className="xl:w-full" src={image} alt={image} />
    </div>
  );
}

export default ImageComponent;
