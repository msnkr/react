import logo from "../images/logo.svg";
import burger from "../images/icon-hamburger.svg";

function Navbar() {
  return (
    <div className="p-12 absolute flex items-center">
      <div>
        <img src={logo} />
      </div>
      <div>
        <img src={burger} />
      </div>
    </div>
  );
}

export default Navbar;
