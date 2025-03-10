import { Link } from "react-router-dom";

const ClickedPage = () => {
  const clickedItemArr = [
    { id: 1, title: "Title 1" },
    { id: 2, title: "Title 2" },
    { id: 3, title: "Title 3" },
  ];

  return (
    <div className="flex flex-col justify-center items-center h-dvh space-y-8 font-mono">
      <p className="text-4xl font-semibold">You clicked this!</p>
      <Link to={"/"}>
        <button className="px-4 py-2 border border-black rounded-lg scale-95 hover:scale-100 duration-300 ">
          Go Home
        </button>
      </Link>

      <ul>
        {clickedItemArr.map((item) => {
          return (
            <div key={item.id}>
              <Link to={`${item.id}`}>
                <li>{item.title}</li>
              </Link>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default ClickedPage;
