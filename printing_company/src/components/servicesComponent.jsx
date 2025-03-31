import { Link } from "react-router-dom";

const ServicesComponent = ({ text, image }) => {
  return (
    <div className="relative rounded-lg border">
      <img src={image} className="w-full h-[300px] rounded-lg object-cover" />
      <Link to={"/services/"}>
        <p className="p-4 cursor-pointer font-semibold underline underline-offset-8 primary-font">
          {text}
        </p>
      </Link>
    </div>
  );
};

export default ServicesComponent;
