import { useState } from "react";

import FormComponent from "../components/FormComponent";

import pinIcon from "../assets/pin-icon.svg";
import phoneIcon from "../assets/phone-icon.svg";
import faxIcon from "../assets/fax-icon.svg";
import timeIcon from "../assets/time-icon.svg";
import emailIcon from "../assets/email-icon.svg";

const ContactUsPage = () => {
  return (
    <div>
      <div>
        <div className="">
          <div className="">
            <p>
              At Tycole Media & Print, we’re here to assist you with all your
              printing needs. Whether you have a question, need a quote, or want
              to discuss a custom project, our team is ready to help.
            </p>
          </div>
          <div className="">
            <p className=" primary-font">Get in touch</p>
            <ul className="">
              <li>
                <div className="flex ">
                  <img src={pinIcon} alt="location-icon" />
                  <p>Address:</p>
                </div>
                <p>
                  16 Something Road,
                  <br /> Somewhereburg, Johannesburg
                  <br />
                  Gauteng 2000
                </p>
              </li>
              <li>
                <div className="flex ">
                  <img src={phoneIcon} alt="phone-icon" />
                  <p> Telephone:</p>
                </div>
                <p>071 234 5678</p>
              </li>
              <li>
                <div className="flex ">
                  <img src={faxIcon} alt="fax-icon" />
                  <p>Fax:</p>
                </div>
                <p>011 345 6789</p>
              </li>
              <li>
                <div className="flex ">
                  <img src={emailIcon} alt="email-icon" />
                  <p> Email:</p>
                </div>
                <p>fake@fakeemail.com</p>
              </li>
              <li>
                <div className="flex ">
                  <img src={timeIcon} alt="time-icon" />
                  <p>Business Hours:</p>
                </div>
                <p>
                  {" "}
                  Monday - Friday : 8:00 AM - 17:00 PM <br /> Saturday : 9:00 AM
                  - 14:00 PM <br /> Sundays & Public Holidays: Closed
                </p>
              </li>
            </ul>
          </div>
          <div className="">
            <p className=" primary-font ">Request A Quote</p>
            <FormComponent />
          </div>
        </div>
        <div className="flex">
          <div className="w-full h-[100px] bg-cyan-500"></div>
          <div className="w-full h-[100px] bg-pink-500"></div>
          <div className="w-full h-[100px] bg-yellow-500"></div>
          <div className="w-full h-[100px] bg-black"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
