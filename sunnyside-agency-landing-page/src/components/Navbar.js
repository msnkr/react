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
          className="absolute top-8 left-4 cursor-pointer xl:w-[300px] xl:top-16 xl:left-16"
          src={logo}
          alt="logo"
        />
      </div>
      <div className="burger-icon">
        <img
          className="xl:hidden absolute top-8 right-4 cursor-pointer"
          src={burgerIcon}
          alt="burger-icon"
          onClick={handleClick}
        />
        <div>
          <div
            className={`${
              click ? "block" : "hidden"
            } xl:block absolute bg-white top-[100px] right-1/2 translate-x-1/2 px-36 py-16 rounded-xl text-center z-50 xl:bg-transparent xl:top-16 xl:right-8 xl:translate-x-0 xl:py-0 opacity-95`}
          >
            <ul className="space-y-8 text-2xl text-dark-grayish-blue xl:flex xl:space-y-0 xl:items-center xl:space-x-8 xl:text-white">
              <li className="cursor-pointer font-semibold">About</li>
              <li className="cursor-pointer font-semibold">Service</li>
              <li className="cursor-pointer font-semibold">Projects</li>
              <li className="cursor-pointer font-semibold xl:bg-transparent hover:bg-white hover:text-very-dark-desaturated-blue bg-soft-yello w-[150px] rounded-full px-2 py-4 mx-auto duration-500">
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
