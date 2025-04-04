import Navbar from "../components/NavBar";
import FooterComponent from "../components/FooterComponent";
import CarouselComponent from "../components/CarouselComponent";

const ServicePage = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="services px-12 mt-12 lg:px-42 lg:mt-40">
        <p className="headings">Services</p>
        <p className="mt-2">
          At Tycole Media & Print, we offer a diverse range of high-quality
          printing solutions designed to meet the needs of businesses,
          individuals, and organizations. Whether you require marketing
          materials, corporate stationery, or custom packaging, our advanced
          printing technology and expertise ensure professional results every
          time.
        </p>
      </div>
      <div className="printing-services mt-12 px-12 lg:px-42 ">
        <div className="">
          <p className="headings mb-2">Commercial & Corporate Printing</p>
          <p>
            We help businesses enhance their brand identity with high-end
            corporate printing solutions, ensuring professionalism and
            consistency across all materials.
          </p>
          <ul className="list-disc list-outside space-y-2 mt-2">
            <li>
              <span className="sub-headings">Business Cards</span> – Make a
              lasting first impression with premium-quality business cards
              available in matte, gloss, embossed, or foil finishes.
            </li>
            <li>
              <span className="sub-headings">Letterheads & Envelopes</span> –
              Elevate your company’s correspondence with custom-branded
              letterheads and envelopes.
            </li>
            <li>
              <span className="sub-headings">
                Annual Reports & Company Profiles
              </span>{" "}
              – Professionally printed reports, ideal for investors,
              stakeholders, and internal use.
            </li>
            <li>
              <span className="sub-headings">Presentation Folders</span> – Keep
              your documents organized and create a polished, branded look.
            </li>
          </ul>
        </div>
        <div className="mt-12 ">
          <p className="headings mb-2">Marketing & Promotional Materials</p>
          <p>
            A strong marketing presence starts with effective print advertising.
            Our range of marketing materials is designed to help you stand out.
          </p>
          <ul className="list-disc list-outside mt-2 space-y-2">
            <li>
              <span className="sub-headings">Brochures & Flyers</span> –
              Informative and visually appealing print materials tailored to
              promote your products or services.
            </li>
            <li>
              <span className="sub-headings">Posters & Banners</span> –
              High-quality, large-format prints for events, advertising, or
              in-store promotions.
            </li>
            <li>
              <span className="sub-headings">Stickers & Labels</span> - Custom
              printed labels and stickers, perfect for branding, product
              packaging, or promotional giveaways.
            </li>
            <li>
              <span className="sub-headings">Calenders</span> – Branded wall and
              desk calendars, great for corporate gifting and year-round brand
              exposure.
            </li>
          </ul>
        </div>
        <div className="">
          <p className="headings mt-12 mb-2 ">Custom Packaging Solutions</p>
          <p>
            Your packaging plays a crucial role in how your brand is perceived.
            We provide tailored packaging solutions that combine functionality
            with design excellence.
          </p>
          <ul className="list-disc list-outside mt-2 space-y-2">
            <li>
              <span className="sub-headings">Custom Printed Boxes</span> – Ideal
              for retail, e-commerce, and product packaging.
            </li>
            <li>
              <span className="sub-headings">Gift Bags & Packaging </span> –
              Stylish and durable gift packaging for corporate and personal use.
            </li>
            <li>
              <span className="sub-headings">Swing Tags</span> – Essential for
              fashion brands and retail businesses looking for premium product
              tags.
            </li>
          </ul>
        </div>
        <div className="">
          <p className="mt-12 headings mb-2 ">Office & Stationery Printing</p>
          <p>
            Boost workplace efficiency and professionalism with custom-printed
            office supplies.
          </p>
          <ul className="list-disc list-outside mt-2 space-y-2">
            <li>
              <span className="sub-headings">Notepads & Desk Pads</span> –
              Branded stationery to enhance office organization.
            </li>
            <li>
              <span className="sub-headings">Diaries & Planners</span> –
              Custom-branded organizational tools for businesses and
              professionals.
            </li>
            <li>
              <span className="sub-headings">Forms & NCR Books</span> –
              Carbonless copy forms for invoices, receipts, and order books.
            </li>
          </ul>
        </div>
        <div className="">
          <p className="mt-12 headings mb-2 ">
            Large Format & Signage Printing
          </p>
          <p>
            Make a bold statement with large-format printing that demands
            attention.
          </p>
          <ul className="list-disc list-outside mt-2 space-y-2">
            <li>
              <span className="sub-headings">Vehicle Branding</span> – Custom
              decals and wraps to turn your company vehicles into mobile
              billboards.
            </li>
            <li>
              <span className="sub-headings">Wall & Window Graphics </span> –
              Transform your office or storefront with high-impact wall murals
              and window decals.
            </li>
            <li>
              <span className="sub-headings">Signage & Billboards</span> –
              Durable, weather-resistant signage solutions for outdoor and
              indoor advertising.
            </li>
          </ul>
        </div>
        <div className="">
          <p className="headings mt-12 mb-2 ">Specialty & Custom Printing</p>
          <p>
            Need something unique? We offer custom printing services to bring
            your vision to life.
          </p>
          <ul className="list-disc list-outside mt-2 space-y-2 mb-12">
            <li>
              <span className="sub-headings">Embossing & Foil Stamping</span> –
              Add a touch of elegance to invitations, business cards, and more.
            </li>
            <li>
              <span className="sub-headings">UV Spot Varnish</span> – Highlight
              specific elements of your design with a glossy, raised finish.
            </li>
            <li>
              <span className="sub-headings">Die-Cutting & Custom Shapes</span>{" "}
              – Create uniquely shaped prints to stand out from the crowd.
            </li>
          </ul>
        </div>
      </div>
      <div>
        <CarouselComponent />
      </div>
      <div>
        <FooterComponent />
      </div>
    </div>
  );
};

export default ServicePage;
