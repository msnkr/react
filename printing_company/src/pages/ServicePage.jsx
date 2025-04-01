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
      <div
        className={`${showNav ? "hidden invisible" : "block visible"} mb-20`}
      >
        <div className="services my-8 space-y-2 p-8">
          <p className="text-2xl primary-font">Services</p>
          <p>
            At Tycole Media & Print, we offer a diverse range of high-quality
            printing solutions designed to meet the needs of businesses,
            individuals, and organizations. Whether you require marketing
            materials, corporate stationery, or custom packaging, our advanced
            printing technology and expertise ensure professional results every
            time.
          </p>
        </div>
        <div className="printing-services px-8 space-y-8">
          <div className="space-y-4">
            <p className="text-2xl primary-font">
              1. Commercial & Corporate Printing
            </p>
            <p>
              We help businesses enhance their brand identity with high-end
              corporate printing solutions, ensuring professionalism and
              consistency across all materials.
            </p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-semibold">Business Cards</span> – Make a
                lasting first impression with premium-quality business cards
                available in matte, gloss, embossed, or foil finishes.
              </li>
              <li>
                <span className="font-semibold">Letterheads & Envelopes</span> –
                Elevate your company’s correspondence with custom-branded
                letterheads and envelopes.
              </li>
              <li>
                <span className="font-semibold">
                  Annual Reports & Company Profiles
                </span>{" "}
                – Professionally printed reports, ideal for investors,
                stakeholders, and internal use.
              </li>
              <li>
                <span className="font-semibold">Presentation Folders</span> –
                Keep your documents organized and create a polished, branded
                look.
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <p className="text-2xl primary-font">
              2. Marketing & Promotional Materials
            </p>
            <p>
              A strong marketing presence starts with effective print
              advertising. Our range of marketing materials is designed to help
              you stand out.
            </p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-semibold">Brochures & Flyers</span> –
                Informative and visually appealing print materials tailored to
                promote your products or services.
              </li>
              <li>
                <span className="font-semibold">Posters & Banners</span> –
                High-quality, large-format prints for events, advertising, or
                in-store promotions.
              </li>
              <li>
                <span className="font-semibold">Stickers & Labels</span> -
                Custom printed labels and stickers, perfect for branding,
                product packaging, or promotional giveaways.
              </li>
              <li>
                <span className="font-semibold">Calenders</span> – Branded wall
                and desk calendars, great for corporate gifting and year-round
                brand exposure.
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <p className="text-2xl primary-font">
              3. Custom Packaging Solutions
            </p>
            <p>
              Your packaging plays a crucial role in how your brand is
              perceived. We provide tailored packaging solutions that combine
              functionality with design excellence.
            </p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-semibold">Custom Printed Boxes</span> –
                Ideal for retail, e-commerce, and product packaging.
              </li>
              <li>
                <span className="font-semibold">Gift Bags & Packaging </span> –
                Stylish and durable gift packaging for corporate and personal
                use.
              </li>
              <li>
                <span className="font-semibold">Swing Tags</span> – Essential
                for fashion brands and retail businesses looking for premium
                product tags.
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <p className="text-2xl primary-font">
              4. Office & Stationery Printing
            </p>
            <p>
              Boost workplace efficiency and professionalism with custom-printed
              office supplies.
            </p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-semibold">Notepads & Desk Pads</span> –
                Branded stationery to enhance office organization.
              </li>
              <li>
                <span className="font-semibold">Diaries & Planners</span> –
                Custom-branded organizational tools for businesses and
                professionals.
              </li>
              <li>
                <span className="font-semibold">Forms & NCR Books</span> –
                Carbonless copy forms for invoices, receipts, and order books.
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <p className="text-2xl primary-font">
              5. Large Format & Signage Printing
            </p>
            <p>
              Make a bold statement with large-format printing that demands
              attention.
            </p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-semibold">Vehicle Branding</span> – Custom
                decals and wraps to turn your company vehicles into mobile
                billboards.
              </li>
              <li>
                <span className="font-semibold">Wall & Window Graphics </span> –
                Transform your office or storefront with high-impact wall murals
                and window decals.
              </li>
              <li>
                <span className="font-semibold">Signage & Billboards</span> –
                Durable, weather-resistant signage solutions for outdoor and
                indoor advertising.
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <p className="text-2xl primary-font">
              6. Specialty & Custom Printing
            </p>
            <p>
              Need something unique? We offer custom printing services to bring
              your vision to life.
            </p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-semibold">Embossing & Foil Stamping</span>{" "}
                – Add a touch of elegance to invitations, business cards, and
                more.
              </li>
              <li>
                <span className="font-semibold">UV Spot Varnish</span> –
                Highlight specific elements of your design with a glossy, raised
                finish.
              </li>
              <li>
                <span className="font-semibold">
                  Die-Cutting & Custom Shapes
                </span>{" "}
                – Create uniquely shaped prints to stand out from the crowd.
              </li>
            </ul>
          </div>
        </div>
        <div className="carousel mt-12 relative">
          <div>
            <img className="w-full h-[350px]" />
            <div className="absolute top-1/2 left-8 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </div>
            <div className="absolute top-1/2 right-8 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="mt-8 p-8">
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
      <div className={`${showNav ? "visible block" : "invisible hidden"}`}>
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
