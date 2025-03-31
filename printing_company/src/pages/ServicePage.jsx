import logo from "../../public/tycole-logo.png";

const ServicePage = ({ nav }) => {
  const showNav = false;

  const handleNav = () => {};
  return (
    <div>
      <div
        className={`${
          showNav ? "invisible hidden" : "visible block"
        } duration-500`}
      >
        <div className="navbar flex justify-between items-center p-14">
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
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="text-2xl primary-font">Services</p>
      </div>
    </div>
  );
};

export default ServicePage;
