import { Link, useLocation } from "react-router-dom";

const ClickedItems = () => {
  const location = useLocation();
  const { title } = location.state || {};

  return (
    <div className="flex flex-col justify-center items-center h-dvh space-y-8 font-mono">
      <p className="text-4xl font-semibold">Yay. You clicked me - {title}</p>
      <Link to={"/"}>
        <button className="px-4 py-2 border border-black rounded-lg scale-95 hover:scale-100 duration-300 ">
          Go Home
        </button>
      </Link>
    </div>
  );
};

export default ClickedItems;
