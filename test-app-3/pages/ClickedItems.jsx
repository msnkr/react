import { Link, useLocation, useParams } from "react-router-dom";

const ClickedItems = () => {
  let x = useParams();

  const clickedItemArr = [
    { id: 1, title: "Title 1" },
    { id: 2, title: "Title 2" },
    { id: 3, title: "Title 3" },
  ];

  const currentTitle = clickedItemArr[x.id - 1];

  return (
    <div className="flex flex-col justify-center items-center h-dvh space-y-8 font-mono">
      <p className="text-4xl font-semibold">Yay. You clicked me</p>
      <p>{currentTitle.title}</p>
      <Link to={"/"}>
        <button className="px-4 py-2 border border-black rounded-lg scale-95 hover:scale-100 duration-300 ">
          Go Home
        </button>
      </Link>
    </div>
  );
};

export default ClickedItems;
