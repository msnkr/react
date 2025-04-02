import { Link } from "react-router-dom";
import menuIcon from "../assets/menu-icon.svg";

const NavBarLinks = ({ clicked }) => {
  return (
    <div className="relative">
      <div className="">
        <div>
          <ul className="">
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
          <div onClick={() => clicked()} className=" cursor-pointer">
            <img src={menuIcon} alt="cancel-icon" className="w-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarLinks;
