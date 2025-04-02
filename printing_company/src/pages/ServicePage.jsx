import { useState } from "react";

import NavBar from "../components/NavBar";
import NavBarLinks from "../components/NavBarLinks";
import FooterComponent from "../components/FooterComponent";
import CarouselComponent from "../components/CarouselComponent";

const ServicePage = () => {
  const [showNav, setShowNav] = useState(false);

  const handleNav = () => {
    setShowNav((prev) => {
      return !prev;
    });
  };

  return (
    <div>
      <div>
        <NavBar clicked={handleNav} />
      </div>
      <div>
        <div className="services">
          <p className="primary-font">Services</p>
          <p>
            At Tycole Media & Print, we offer a diverse range of high-quality
            printing solutions designed to meet the needs of businesses,
            individuals, and organizations. Whether you require marketing
            materials, corporate stationery, or custom packaging, our advanced
            printing technology and expertise ensure professional results every
            time.
          </p>
        </div>
        <div className="printing-services">
          <div className="">
            <p className="primary-font">Commercial & Corporate Printing</p>
            <p>
              We help businesses enhance their brand identity with high-end
              corporate printing solutions, ensuring professionalism and
              consistency across all materials.
            </p>
            <ul className="list-disc list-outside">
              <li>
                <span className="">Business Cards</span> – Make a lasting first
                impression with premium-quality business cards available in
                matte, gloss, embossed, or foil finishes.
              </li>
              <li>
                <span className="">Letterheads & Envelopes</span> – Elevate your
                company’s correspondence with custom-branded letterheads and
                envelopes.
              </li>
              <li>
                <span className="">Annual Reports & Company Profiles</span> –
                Professionally printed reports, ideal for investors,
                stakeholders, and internal use.
              </li>
              <li>
                <span className="">Presentation Folders</span> – Keep your
                documents organized and create a polished, branded look.
              </li>
            </ul>
          </div>
          <div className="">
            <p className="primary-font">Marketing & Promotional Materials</p>
            <p>
              A strong marketing presence starts with effective print
              advertising. Our range of marketing materials is designed to help
              you stand out.
            </p>
            <ul className="list-disc list-outside">
              <li>
                <span className="">Brochures & Flyers</span> – Informative and
                visually appealing print materials tailored to promote your
                products or services.
              </li>
              <li>
                <span className="">Posters & Banners</span> – High-quality,
                large-format prints for events, advertising, or in-store
                promotions.
              </li>
              <li>
                <span className="">Stickers & Labels</span> - Custom printed
                labels and stickers, perfect for branding, product packaging, or
                promotional giveaways.
              </li>
              <li>
                <span className="">Calenders</span> – Branded wall and desk
                calendars, great for corporate gifting and year-round brand
                exposure.
              </li>
            </ul>
          </div>
          <div className="">
            <p className="primary-font">Custom Packaging Solutions</p>
            <p>
              Your packaging plays a crucial role in how your brand is
              perceived. We provide tailored packaging solutions that combine
              functionality with design excellence.
            </p>
            <ul className="list-disc list-outside">
              <li>
                <span className="">Custom Printed Boxes</span> – Ideal for
                retail, e-commerce, and product packaging.
              </li>
              <li>
                <span className="">Gift Bags & Packaging </span> – Stylish and
                durable gift packaging for corporate and personal use.
              </li>
              <li>
                <span className="">Swing Tags</span> – Essential for fashion
                brands and retail businesses looking for premium product tags.
              </li>
            </ul>
          </div>
          <div className="">
            <p className="primary-font">Office & Stationery Printing</p>
            <p>
              Boost workplace efficiency and professionalism with custom-printed
              office supplies.
            </p>
            <ul className="list-disc list-outside">
              <li>
                <span className="">Notepads & Desk Pads</span> – Branded
                stationery to enhance office organization.
              </li>
              <li>
                <span className="">Diaries & Planners</span> – Custom-branded
                organizational tools for businesses and professionals.
              </li>
              <li>
                <span className="">Forms & NCR Books</span> – Carbonless copy
                forms for invoices, receipts, and order books.
              </li>
            </ul>
          </div>
          <div className="">
            <p className="primary-font">Large Format & Signage Printing</p>
            <p>
              Make a bold statement with large-format printing that demands
              attention.
            </p>
            <ul className="list-disc list-outside">
              <li>
                <span className="">Vehicle Branding</span> – Custom decals and
                wraps to turn your company vehicles into mobile billboards.
              </li>
              <li>
                <span className="">Wall & Window Graphics </span> – Transform
                your office or storefront with high-impact wall murals and
                window decals.
              </li>
              <li>
                <span className="">Signage & Billboards</span> – Durable,
                weather-resistant signage solutions for outdoor and indoor
                advertising.
              </li>
            </ul>
          </div>
          <div className="">
            <p className="primary-font">Specialty & Custom Printing</p>
            <p>
              Need something unique? We offer custom printing services to bring
              your vision to life.
            </p>
            <ul className="list-disc list-outside">
              <li>
                <span className="">Embossing & Foil Stamping</span> – Add a
                touch of elegance to invitations, business cards, and more.
              </li>
              <li>
                <span className="">UV Spot Varnish</span> – Highlight specific
                elements of your design with a glossy, raised finish.
              </li>
              <li>
                <span className="">Die-Cutting & Custom Shapes</span> – Create
                uniquely shaped prints to stand out from the crowd.
              </li>
            </ul>
          </div>
        </div>
        <div>
          <CarouselComponent />
        </div>
        <div className="">
          Let’s Print Your Vision! Explore our{" "}
          <span className=" underline underline-offset-8 cursor-pointer">
            services
          </span>{" "}
          or Get a{" "}
          <span className=" underline underline-offset-8 cursor-pointer">
            Free Quote Today!
          </span>
        </div>
      </div>
      <div>
        <NavBarLinks clicked={handleNav} />
      </div>
      <FooterComponent />
    </div>
  );
};

export default ServicePage;
