import "./App.css";
import { useState } from "react";
import { Link } from "react-router-dom";

import NavBar from "./components/NavBar";
import ServicesComponent from "./components/servicesComponent";
import FormComponent from "./components/FormComponent";
import NavBarLinks from "./components/NavBarLinks";
import FooterComponent from "./components/FooterComponent";

function App() {
  const [showNav, setShowNav] = useState(false);

  const handleNav = () => {
    setShowNav((prev) => {
      return !prev;
    });
  };

  return (
    <div>
      <div className={`${showNav ? "invisible hidden" : "visible block"}`}>
        <NavBar clicked={handleNav} />
        <div className="body space-y-12">
          <div className="hero-section">
            <div className="relative">
              <div className="absolute top-0 left-0 w-full h-[450px] bg-black opacity-80 "></div>
              <img
                className="w-full h-[450px] object-cover"
                src="https://images.pexels.com/photos/7653097/pexels-photo-7653097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <div className="absolute top-0 left-0 text-white flex flex-col w-full h-[450px] justify-center items-center p-14 space-y-12 text-center">
                <p>Passion, Pride and Precison in every Print</p>
                <p className="text-xl font-semibold primary-font">
                  High-quality litho printing for brochures, business cards,
                  boxes, desk pads, diaries, and more.
                </p>
                <Link to={"/contact-us/"}>
                  <button className="border-2 px-4 py-2 font-semibold cta-color cursor-pointer">
                    Get a quote
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="services-section">
            <div className="px-14 space-y-8">
              <p className="text-2xl primary-font">Our Services</p>
              <p>
                At Tycole Media & Print, we specialize in high-quality litho
                printing to meet your business and personal printing needs.
                Whether you need promotional materials, branded stationery, or
                packaging solutions, we ensure every print is crafted with
                precision and excellence.
              </p>
              <p className="text-2xl primary-font">
                Our printing services include{" "}
              </p>
              <ServicesComponent
                text={"Brochures and Flyers"}
                image={
                  "https://images.pexels.com/photos/7648514/pexels-photo-7648514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
              />
              <ServicesComponent
                text={"Custom Printed Boxes"}
                image={
                  "https://images.pexels.com/photos/6169151/pexels-photo-6169151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
              />
              <ServicesComponent
                text={"Business Cards"}
                image={
                  "https://images.pexels.com/photos/29821869/pexels-photo-29821869/free-photo-of-elegant-business-cards-on-white-fabric-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
              />
              <ServicesComponent
                text={"Desk Pads & Notepads"}
                image={
                  "https://images.pexels.com/photos/8761741/pexels-photo-8761741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
              />
              <ServicesComponent
                text={"Diaries & Calendars"}
                image={
                  "https://images.pexels.com/photos/29997001/pexels-photo-29997001/free-photo-of-colorful-floral-2025-planner-on-yellow-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
              />
              <ServicesComponent
                text={"Custom Printing Solutions"}
                image={
                  "https://images.pexels.com/photos/4473400/pexels-photo-4473400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
              />
            </div>
          </div>
          <div className="about-section">
            <div className="px-14">
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
                <Link to={"/services/"}>
                  <span className="font-semibold underline underline-offset-8 cursor-pointer">
                    services
                  </span>
                </Link>{" "}
                or Get a{" "}
                <Link to={"/contact-us/"}>
                  <span className="font-semibold underline underline-offset-8 cursor-pointer">
                    Free Quote Today!
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <div>
            <FormComponent />
          </div>
          <div>
            <FooterComponent />
          </div>
        </div>
      </div>
      <div className={`${showNav ? "visible block" : "invisible hidden"}`}>
        <NavBarLinks clicked={handleNav} />
      </div>
    </div>
  );
}

export default App;
