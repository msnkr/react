import "./App.css";
import { useState } from "react";
import logo from "../public/tycole-logo.png";
import ServicesComponent from "./components/servicesComponent";
import FormComponent from "./components/FormComponent";

function App() {
  const [showNav, setShowNav] = useState(false);

  const handleNav = () => {
    setShowNav((prev) => {
      return !prev;
    });
  };

  return (
    <div>
      <div
        className={`${showNav ? "invisible hidden" : "visible block"} mb-20`}
      >
        <div className="navbar flex justify-between items-center p-12">
          <div>
            <img src={logo} className="w-40 flex cursor-pointer" />
          </div>
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
        <div className="body space-y-12">
          <div className="hero-section">
            <div className="relative">
              <div className="absolute top-0 left-0 w-full h-[450px] bg-black opacity-50"></div>
              <img className="w-full h-[450px] object-cover" />
              <div className="absolute top-0 left-0 text-white flex flex-col w-full h-[450px] justify-center items-center p-12 space-y-12 text-center">
                <p>Passion, Pride and Precison in every Print</p>
                <p className="text-xl font-semibold primary-font">
                  High-quality litho printing for brochures, business cards,
                  boxes, desk pads, diaries, and more.
                </p>
                <button className="border-2 px-4 py-2 font-semibold cta-color">
                  Get a quote
                </button>
              </div>
            </div>
          </div>
          <div className="services-section">
            <div className="px-12 space-y-8">
              <p className="text-2xl primary-font">Our Services</p>
              <p>
                At Tycole Media & Print, we specialize in high-quality litho
                printing to meet your business and personal printing needs.
                Whether you need promotional materials, branded stationery, or
                packaging solutions, we ensure every print is crafted with
                precision and excellence.
              </p>
              <p className="text-2xl primary-font">
                Our printing services include:{" "}
              </p>
              <ServicesComponent text={"Brochures and Flyers"} />
              <ServicesComponent text={"Custom Printed Boxes"} />
              <ServicesComponent text={"Business Cards"} />
              <ServicesComponent text={"Desk Pads & Notepads"} />
              <ServicesComponent text={"Diaries & Calendars"} />
              <ServicesComponent text={"Custom Printing Solutions"} />
            </div>
          </div>
          <div className="about-section">
            <div className="px-12">
              <p className="text-2xl mb-8 primary-font">Why choose us</p>
              <div className="space-y-4">
                <p>
                  <span className="font-semibold primary-font">
                    Quality & Precision
                  </span>{" "}
                  – We use advanced litho printing technology to ensure sharp,
                  vibrant prints.
                </p>
                <p>
                  <span className="font-semibold primary-font">
                    Reliable Service
                  </span>{" "}
                  – We take pride in delivering on time and exceeding
                  expectations.
                </p>
                <p>
                  <span className="font-semibold primary-font">
                    Affordable Pricing
                  </span>{" "}
                  – Get high-quality prints at competitive rates.
                </p>
              </div>
              <div className="mt-12">
                <p>
                  At Tycole Media & Print, we bring your ideas to life with
                  high-quality litho printing, ensuring every project reflects
                  professionalism and excellence. Whether you need eye-catching
                  marketing materials, branded stationery, or custom packaging,
                  we are dedicated to delivering precision-crafted prints that
                  help your business stand out. <br /> <br />
                  With years of experience in the industry and a full online
                  computer-to-plate system, we guarantee sharp details, vibrant
                  colors, and durable prints that leave a lasting impression.
                  From small-scale projects to large commercial runs, we offer
                  flexible printing solutions tailored to your unique needs.
                </p>
              </div>
              <div className="mt-8">
                Let’s Print Your Vision! Explore our{" "}
                <span className="font-semibold underline underline-offset-8 cursor-pointer">
                  services
                </span>{" "}
                or Get a{" "}
                <span className="font-semibold underline underline-offset-8 cursor-pointer">
                  Free Quote Today!
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-section">
          <div className="p-12 space-y-2">
            <p>
              16 Something Road <br />
              Somewhereburg, Johannesburg
              <br />
              Gauteng 2000
            </p>
            <p>071 234 5678</p>
            <p>FakeEmail@Fake.com</p>
          </div>
          <div>
            <FormComponent />
          </div>
        </div>
      </div>
      <div className={showNav ? "relative navbar-list" : "invisible hidden"}>
        <ul className="w-full h-dvh flex flex-col justify-center px-12 space-y-12 font-semibold text-lg">
          <li>Home</li>
          <li>Services</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
        <div
          onClick={handleNav}
          className="absolute top-16 right-16 cursor-pointer hover:animate-spin"
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
}

export default App;
