import logo from "../images/logo.svg";
import burgerIcon from "../images/icon-hamburger.svg";

function Navbar() {
  return (
    <div className="flex justify-between items-center px-8 py-4">
      <div className="logo">
        <img className="z-50" src={logo} alt="logo" />
      </div>
      <div className="burger-icon">
        <img className="z-50" src={burgerIcon} alt="burger-icon" />
      </div>
    </div>
  );
}

export default Navbar;
