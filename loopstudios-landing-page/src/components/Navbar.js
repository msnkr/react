import logo from "../images/logo.svg";
import burger from "../images/icon-hamburger.svg";

export default function Navbar() {
  return (
    <div className="flex items-center relative">
      <div>
        <img className="absolute top-6 left-10" src={logo} />
      </div>
      <div>
        <img className="absolute top-8 right-10 cursor-pointer" src={burger} />
      </div>
    </div>
  );
}
