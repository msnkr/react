import { Link, useLocation, useParams } from "react-router-dom";

const ClickedItems = () => {
  const { x } = useParams();

  console.log(x);
  return (
    <div className="flex flex-col justify-center items-center h-dvh space-y-8 font-mono">
      <p className="text-4xl font-semibold">Yay. You clicked me</p>
      <Link to={"/"}>
        <button className="px-4 py-2 border border-black rounded-lg scale-95 hover:scale-100 duration-300 ">
          Go Home
        </button>
      </Link>
    </div>
  );
};

export default ClickedItems;
