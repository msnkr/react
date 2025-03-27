import "./App.css";
import logo from "../public/tycole-logo.png";
import ServicesComponent from "./components/servicesComponent";

function App() {
  return (
    <div className="mb-20">
      <div className="navbar flex justify-between items-center p-12">
        <div>
          <img src={logo} className="w-40 flex cursor-pointer" />
        </div>
        <div className="cursor-pointer">
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
            <div className="absolute top-0 left-0 w-full h-[400px] bg-black opacity-50"></div>
            <img className="w-full h-[400px] object-cover" />
            <div className="absolute top-0 left-0 text-white flex flex-col w-full h-[400px] justify-center items-center p-12 space-y-8 text-center">
              <p className="text-xl">
                Passion, Pride and Precison in every Print
              </p>
              <p className="text-2xl font-semibold">
                High-quality litho printing for brochures, business cards,
                boxes, desk pads, diaries, and more.
              </p>
              <button className="border px-4 py-2">Get a quote</button>
            </div>
          </div>
        </div>
        <div className="services-section">
          <div className="px-12 space-y-8">
            <p className="text-2xl">Our Services</p>
            <p>
              At Tycole Media & Print, we specialize in high-quality litho
              printing to meet your business and personal printing needs.
              Whether you need promotional materials, branded stationery, or
              packaging solutions, we ensure every print is crafted with
              precision and excellence.
            </p>
            <p className="text-2xl">Our printing services include: </p>
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
            <p className="text-2xl mb-8">Why choose us</p>
            <div className="space-y-4">
              <p>
                <span className="font-semibold">Quality & Precision</span> – We
                use advanced litho printing technology to ensure sharp, vibrant
                prints.
              </p>
              <p>
                <span className="font-semibold">Reliable Service</span> – We
                take pride in delivering on time and exceeding expectations.
              </p>
              <p>
                <span className="font-semibold">Affordable Pricing</span> – Get
                high-quality prints at competitive rates.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-section"></div>
    </div>
  );
}

export default App;
