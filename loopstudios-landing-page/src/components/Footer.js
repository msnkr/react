import logo from "../images/logo.svg";
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest from "../images/icon-pinterest.svg";
import instagram from "../images/icon-instagram.svg";

export default function Footer() {
  return (
    <div>
      <div className="my-12 pt-8">
        <img src={logo} alt="logo" />
      </div>
      <div>
        <ul className="text-white text-center font-alata text-lg space-y-4">
          <li>About</li>
          <li>Careers</li>
          <li>Events</li>
          <li>Products</li>
          <li>Support</li>
        </ul>
      </div>
      <div className="flex space-x-4 justify-center py-12">
        <div>
          <img src={facebook} alt="social-media-icon" />
        </div>
        <div>
          <img src={twitter} alt="social-media-icon" />
        </div>
        <div>
          <img src={pinterest} alt="social-media-icon" />
        </div>
        <div>
          <img src={instagram} alt="social-media-icon" />
        </div>
      </div>
      <div>
        <p className="text-white text-center pb-12">
          © 2021 Loopstudios. All rights reserved.
        </p>
      </div>
    </div>
  );
}
