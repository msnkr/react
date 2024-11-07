import logo from "../images/logo.svg";
import burgerIcon from "../images/icon-hamburger.svg";

function Navbar() {
  return (
    <div className="flex">
      <div className="logo">
        <img
          className="absolute top-8 left-4 cursor-pointer"
          src={logo}
          alt="logo"
        />
      </div>
      <div className="burger-icon">
        <img
          className="absolute top-8 right-4 cursor-pointer"
          src={burgerIcon}
          alt="burger-icon"
        />
        <div className="flex">
          <div className="absolute top-8 right-8">
            <ul className="bg-white w-[400px] h-[400px] text-center">
              <li>About</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
