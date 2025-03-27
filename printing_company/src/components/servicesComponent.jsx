const ServicesComponent = ({ text, image }) => {
  return (
    <div className="relative">
      <img src={image} className="w-full h-[300px]" />
      <p className="absolute top-0 left-0 w-full h-[300px] flex justify-center items-center text-2xl font-semibold">
        {text}
      </p>
    </div>
  );
};

export default ServicesComponent;
