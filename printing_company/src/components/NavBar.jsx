import { Link } from "react-router-dom";
import logo from "../../public/tycole-logo.png";
import menuIcon from "../assets/menu-icon.svg";

const NavBar = ({ clicked }) => {
  return (
    <div className="navbar flex justify-between items-center">
      <Link to={"/"}>
        <div>
          <img src={logo} className="w-40 flex cursor-pointer" />
        </div>
      </Link>
      <div className="cursor-pointer" onClick={() => clicked()}>
        <img className="w-8" src={menuIcon} alt="menu-icon" />
      </div>
    </div>
  );
};

export default NavBar;
