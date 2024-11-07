import logo from "../images/logo.svg";
import burgerIcon from "../images/icon-hamburger.svg";
import { useState } from "react";

function Navbar() {
  const [click, setClick] = useState(false);

  function handleClick() {
    click ? setClick(false) : setClick(true);
  }
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
          onClick={handleClick}
        />
        <div>
          <div
            className={`${
              click ? "block" : "hidden"
            } absolute bg-white top-[100px] right-1/2 translate-x-1/2 px-36 py-16 rounded-xl text-center z-50`}
          >
            <ul className="space-y-8 text-2xl text-dark-grayish-blue">
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">Service</li>
              <li className="cursor-pointer">Projects</li>
              <li className="cursor-pointer bg-soft-yello w-[150px] rounded-full px-2 py-4 mx-auto">
                Contact
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
