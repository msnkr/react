import pinIcon from "../assets/pin-icon.svg";
import phoneIcon from "../assets/phone-icon.svg";
import faxIcon from "../assets/fax-icon.svg";
import timeIcon from "../assets/time-icon.svg";
import emailIcon from "../assets/email-icon.svg";

const FooterComponent = () => {
  return (
    <div>
      <div className="px-12 py-8 mt-4">
        <ul className="space-y-4">
          <li>
            <div className="flex">
              <img src={pinIcon} alt="location-icon" />
              Address:
            </div>
            16 Something Road, Somewhereburg, Johannesburg
            <br />
            Gauteng 2000
          </li>
          <li>
            <div className="flex">
              <img src={phoneIcon} alt="phone-icon" />
              Telephone:
            </div>
            071 234 5678
          </li>
          <li>
            <div className="flex">
              <img src={faxIcon} alt="fax-icon" />
              Fax:
            </div>
            011 345 6789
          </li>
          <li>
            <div className="flex">
              <img src={emailIcon} alt="email-icon" />
              Email:
            </div>
            fake@fakeemail.com
          </li>
          <li>
            <div className="flex">
              <img src={timeIcon} alt="time-icon" />
              Business Hours:
            </div>
            Monday - Friday : 8:00 - 17:00 <br /> Saturday : 9:00 - 14:00 <br />{" "}
            Sundays & Public Holidays: Closed
          </li>
        </ul>
      </div>
      <div className="flex">
        <div className="w-full h-[100px] bg-cyan-500"></div>
        <div className="w-full h-[100px] bg-pink-500"></div>
        <div className="w-full h-[100px] bg-yellow-500"></div>
        <div className="w-full h-[100px] bg-black"></div>
      </div>
    </div>
  );
};

export default FooterComponent;
