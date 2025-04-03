import { Link } from "react-router-dom";

const ServicesComponent = ({ text, image }) => {
  return (
    <div className="relative space-y-2">
      <img src={image} className="w-full h-[300px] object-cover" />
      <Link to={"/services/"}>
        <p className="cursor-pointer sub-headings">{text}</p>
      </Link>
    </div>
  );
};

export default ServicesComponent;
