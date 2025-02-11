import facebookIcon from "../images/icon-facebook.svg";
import instagramIcon from "../images/icon-instagram.svg";
import pinterestIcon from "../images/icon-pinterest.svg";
import twitterIcon from "../images/icon-twitter.svg";

function Footer() {
  return (
    <div className="text-dark-moderate-cyan-footer text-center space-y-6 xl:pt-32">
      <div className="pt-8">
        <p className="text-5xl font-fraunces font-bold">sunnyside</p>
      </div>
      <div>
        <ul className="text-xl flex space-x-20 justify-center font-bold xl:mt-20">
          <li className="cursor-pointer hover:text-white duration-500">
            About
          </li>
          <li className="cursor-pointer hover:text-white duration-500">
            Services
          </li>
          <li className="cursor-pointer hover:text-white duration-500">
            Projects
          </li>
        </ul>
      </div>
      <div className="flex justify-center pb-20 space-x-12 pt-12 hover:text-white">
        <div>
          <img
            className="w-[30px] h-[30px] cursor-pointer"
            src={facebookIcon}
            alt="Facebook"
          />
        </div>
        <div>
          <img
            className="w-[30px] h-[30px] cursor-pointer"
            src={instagramIcon}
            alt="Instagram"
          />
        </div>
        <div>
          <img
            className="w-[30px] h-[30px] cursor-pointer"
            src={twitterIcon}
            alt="Twitter"
          />
        </div>
        <div>
          <img
            className="w-[30px] h-[30px] cursor-pointer"
            src={pinterestIcon}
            alt="Pinterest"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
