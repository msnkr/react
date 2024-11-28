import logo from "../images/logo.svg";
import burger from "../images/icon-hamburger.svg";
import close from "../images/icon-close.svg";

import { useState } from "react";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav((prev) => {
      return !prev;
    });
  };

  return (
    <div className="p-12 absolute flex items-center w-full justify-between">
      <div className="z-50">
        <img src={logo} alt="logo" />
      </div>
      <div>
        <div>
          <img
            onClick={handleClick}
            className="cursor-pointer"
            src={burger}
            alt="burger-icon"
          />
        </div>
        <div
          className={`${
            nav ? "block" : "hidden"
          } absolute top-0 left-0 w-full h-screen bg-black z-40`}
        >
          <div>
            <img
              onClick={handleClick}
              src={close}
              className="absolute top-12 right-12 hover:animate-spin"
            />
          </div>
          <ul className="text-white absolute top-1/2 -translate-y-1/2 left-16 text-3xl uppercase space-y-8 font-thin">
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Careers</li>
            <li className="cursor-pointer">Events</li>
            <li className="cursor-pointer">Products</li>
            <li className="cursor-pointer">Support</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
