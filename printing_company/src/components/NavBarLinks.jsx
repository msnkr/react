import { Link } from "react-router-dom";
import cancelIcon from "../assets/cancel-icon.svg";

const NavBarLinks = ({ clicked }) => {
  return (
    <div>
      <div>
        <ul className="w-full h-dvh flex flex-col justify-center px-14 space-y-12 font-semibold text-lg primary-font bg-navbar-open">
          <Link to={"/"}>
            <li className="cursor-pointer">Home</li>
          </Link>
          <Link to={"/services/"}>
            <li className="cursor-pointer">Services</li>
          </Link>
          <Link to={"/about-us/"}>
            <li className="cursor-pointer">About Us</li>
          </Link>
          <Link to={"/contact-us/"}>
            <li className="cursor-pointer">Contact</li>
          </Link>
        </ul>
      </div>
      <div>
        <div
          onClick={() => clicked()}
          className="absolute top-18 right-18 cursor-pointer"
        >
          <img src={cancelIcon} alt="cancel-icon" className="w-8" />
        </div>
      </div>
    </div>
  );
};

export default NavBarLinks;
