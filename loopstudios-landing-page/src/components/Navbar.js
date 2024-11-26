import logo from "../images/logo.svg";
import burger from "../images/icon-hamburger.svg";

function Navbar() {
  return (
    <div className="p-12 absolute flex items-center w-full justify-between">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <img className="cursor-pointer" src={burger} alt="burger-icon" />
      </div>
    </div>
  );
}

export default Navbar;
