const Services = ({ image, text, description }) => {
  return (
    <div className="w-full h-[200px]">
      <img src={image} className="w-full h-[200px] object-cover" />
    </div>
  );
};

export default Services;
