const ServicesComponent = ({ text, image }) => {
  return (
    <div className="relative rounded-lg border">
      <img src={image} className="w-full h-[300px] rounded-lg" />
      <p className="p-4 cursor-pointer font-semibold underline underline-offset-8">
        {text}
      </p>
    </div>
  );
};

export default ServicesComponent;
