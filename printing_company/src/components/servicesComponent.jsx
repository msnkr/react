import { Link } from "react-router-dom";

const ServicesComponent = ({ text, image }) => {
  return (
    <div className="relative ">
      <img src={image} className="w-full h-[300px] rounded-lg object-cover" />
      <Link to={"/services/"}>
        <p className="cursor-pointer primary-font">{text}</p>
      </Link>
    </div>
  );
};

export default ServicesComponent;
