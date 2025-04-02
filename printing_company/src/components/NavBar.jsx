import { Link } from "react-router-dom";
import logo from "../../public/tycole-logo.png";
import menuIcon from "../assets/menu-icon.svg";

const NavBar = () => {
  return (
    <div className="p-12 flex justify-between items-center">
      <div>
        <img src={logo} className="w-[200px]" />
      </div>
      <div>
        <div>
          <img src={menuIcon} className="w-8" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
