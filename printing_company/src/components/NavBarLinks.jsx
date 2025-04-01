import { Link } from "react-router-dom";
const NavBarLinks = ({ clicked }) => {
  return (
    <div>
      <div>
        <ul className="w-full h-dvh flex flex-col justify-center px-14 space-y-12 font-semibold text-lg primary-font bg-navbar-open">
          <Link to={"/"}>
            <li className="cursor-pointer">Home</li>
          </Link>
          <Link to={"/services/"}>
            <li className="cursor-pointer">Services</li>
          </Link>
          <Link to={"/about-us/"}>
            <li className="cursor-pointer">About Us</li>
          </Link>
          <Link to={"/contact-us/"}>
            <li className="cursor-pointer">Contact</li>
          </Link>
        </ul>
      </div>
      <div>
        <div
          onClick={() => clicked()}
          className="absolute top-18 right-18 cursor-pointer hover:animate-spin"
        >
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
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default NavBarLinks;
