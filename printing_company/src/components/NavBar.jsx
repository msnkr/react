import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../public/tycole-logo.png";
import menuIcon from "../assets/menu-icon.svg";

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);

  const handleNav = () => {
    setShowNav((prev) => {
      return !prev;
    });
  };

  return (
    <div className={`${showNav ? "mb-30" : ""} relative duration-400`}>
      <div className="p-12 flex justify-between items-center">
        <div>
          <img src={logo} className="w-[200px]" />
        </div>
        <div>
          <div>
            <img src={menuIcon} className="w-8" onClick={handleNav} />
          </div>
        </div>
      </div>
      <div
        className={`${
          showNav ? "block visible opacity-100" : "hidden invisible opacity-0"
        } absolute top-32 right-14`}
      >
        <ul className="text-right font-semibold">
          <Link to={"/"}>
            <li className="py-1">Home</li>
          </Link>
          <Link to={"/services/"}>
            <li className="py-1">Service</li>
          </Link>
          <Link to={"/about-us/"}>
            <li className="py-1">About Us</li>
          </Link>
          <Link to={"/contact-us/"}>
            <li className="py-1">Contact Us</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
