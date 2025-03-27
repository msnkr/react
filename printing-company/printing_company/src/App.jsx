import "./App.css";

function App() {
  return (
    <div>
      <div className="font-semibold uppercase navbar flex justify-between p-8">
        <div className=" font-mono mx-auto">
          <p className="text-md underline">
            The <br /> printing <br /> company
          </p>
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
        <div className="hero-section">
          <div className="relative">
            <div className="bg-black h-[500px] absolute opacity-60 w-full"></div>
            <img
              src="https://images.pexels.com/photos/6648405/pexels-photo-6648405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="w-full h-[500px] object-cover"
            />
            <div className="p-12 absolute top-0 left-0 text-white w-full h-[500px] flex flex-col justify-center items-center text-center space-y-12">
              <p>
                Welcome to <br />
                <span className="text-2xl font-semibold uppercase font-mono">
                  the printing company
                </span>
              </p>
              <p>Your friendly local printing company</p>
              <p>
                Business cards, cataloges, pens,vehicle magnets, banners and all
                your printing and branding needs.{" "}
              </p>
              <p className="cursor-pointer border border-white px-4 py-2 uppercase font-mono font-semibold">
                Get a quote now
              </p>
            </div>
          </div>
        </div>
        <div className="services-section"></div>
      </div>
    </div>
  );
}

export default App;
