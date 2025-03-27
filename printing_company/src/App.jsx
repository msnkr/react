import "./App.css";
import logo from "../public/tycole-logo.png";
import ServicesComponent from "./components/servicesComponent";

function App() {
  return (
    <div>
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
      <div className="body">
        <div className="hero-section"></div>
        <div className="services-section"></div>
        <div className="about-section"></div>
      </div>
      <div className="footer-section"></div>
    </div>
  );
}

export default App;
