import { Link } from "react-router-dom";
import logo from "../../public/tycole-logo.png";

const NavBar = ({ clicked }) => {
  return (
    <div className="navbar flex justify-between items-center p-14">
      <Link to={"/"}>
        <div>
          <img src={logo} className="w-40 flex cursor-pointer" />
        </div>
      </Link>
      <div className="cursor-pointer" onClick={() => clicked}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default NavBar;
