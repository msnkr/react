import logo from "../images/logo.svg";
import burger from "../images/icon-hamburger.svg";

function Navbar() {
  return (
    <div className="p-12 absolute flex items-center w-full justify-between">
      <div>
        <img src={logo} alt="logo" className="z-50" />
      </div>
      <div>
        <div>
          <img className="cursor-pointer" src={burger} alt="burger-icon" />
        </div>
        <div className="absolute  top-0 left-0 w-full h-screen bg-black">
          <ul className="text-white absolute top-1/2 -translate-y-1/2 left-16 text-3xl uppercase space-y-8 font-thin">
            <li>About</li>
            <li>Careers</li>
            <li>Events</li>
            <li>Products</li>
            <li>Support</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
