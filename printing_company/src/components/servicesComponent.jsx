const ServicesComponent = ({ text, image }) => {
  return (
    <div className="mt-8 px-10">
      <img src={image} className="w-full h-[300px] object-cover" />
      <p className="text-start text-lg capitalize p-2 underline underline-offset-8 cursor-pointer">
        {text}
      </p>
    </div>
  );
};

export default ServicesComponent;
