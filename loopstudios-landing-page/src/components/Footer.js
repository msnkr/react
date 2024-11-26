import logo from "../images/logo.svg";
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest from "../images/icon-pinterest.svg";
import instagram from "../images/icon-instagram.svg";

export default function Footer() {
  return (
    <div>
      <div className="logo flex justify-center">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav-items">
        <ul className="text-white text-lg text-center my-8 space-y-4">
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Careers</li>
          <li className="cursor-pointer">Events</li>
          <li className="cursor-pointer">Products</li>
          <li className="cursor-pointer">Support</li>
        </ul>
      </div>
      <div className="social-links flex space-x-8 justify-center mt-12">
        <div>
          <img src={facebook} className="w-8" alt="facebook-logo" />
        </div>
        <div>
          <img src={twitter} className="w-8" alt="twitter-logo" />
        </div>
        <div>
          <img src={pinterest} className="w-8" alt="pinterest-logo" />
        </div>
        <div>
          <img src={instagram} className="w-8" alt="instagram-logo" />
        </div>
      </div>
      <div className="rights-reserved text-center my-12">
        <p className="text-white text-lg">
          © 2021 Loopstudios. All rights reserved.
        </p>
      </div>
    </div>
  );
}
