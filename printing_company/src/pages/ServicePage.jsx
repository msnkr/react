import logo from "../../public/tycole-logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const ServicePage = () => {
  const [showNav, setShowNav] = useState(false);
  const handleNav = () => {
    setShowNav((prev) => {
      return !prev;
    });
  };
  return (
    <div>
      <div
        className={`${
          showNav ? "invisible hidden" : "visible block"
        } duration-500`}
      >
        <div className="navbar flex justify-between items-center p-14">
          <Link to={"/"}>
            <div>
              <img src={logo} className="w-40 flex cursor-pointer" />
            </div>
          </Link>
          <div className="cursor-pointer" onClick={handleNav}>
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
      </div>
      <div className={`${showNav ? "hidden invisible" : "block visible"} p-14`}>
        <div>
          <p className="text-2xl primary-font">Services</p>
          <p>
            At Tycole Media & Print, we specialize in high-quality printing
            solutions that bring your brand to life. With a commitment to
            Passion, Pride, and Precision, we ensure every print product meets
            the highest standards.
          </p>
        </div>
        <div>
          <p className="text-2xl primary-font">Our Printing Services</p>
          <ul>
            <li>
              Brochures – Professionally designed and printed brochures that
              showcase your business with style.
            </li>
            <li>
              Boxes – Custom packaging solutions tailored to your brand’s needs.
            </li>
            <li>
              Business Cards – High-quality business cards that leave a lasting
              impression.
            </li>
            <li>
              Desk Pads – Practical and stylish desk pads for businesses and
              professionals.
            </li>
            <li>
              Diaries – Customized diaries to keep you organized in style.
            </li>
          </ul>
        </div>
        <div></div>
      </div>
      <div className={`${showNav ? "visible block" : "invisible hidden"}`}>
        <ul className="w-full h-dvh flex flex-col justify-center px-14 space-y-12 font-semibold text-lg primary-font bg-navbar-open">
          <Link to={"/"}>
            <li className="cursor-pointer">Home</li>
          </Link>
          <Link to={"/services/"}>
            <li className="cursor-pointer">Services</li>
          </Link>
          <li className="cursor-pointer">About Us</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
        <div
          onClick={handleNav}
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

export default ServicePage;
