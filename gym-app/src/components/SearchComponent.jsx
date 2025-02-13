import { Link } from "react-router-dom";
import { use, useState } from "react";

const SearchComponent = ({ onChecked }) => {
  const [change, setChange] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setChange(value);
  };
  return (
    <div className="flex justify-center items-center px-8 my-8">
      <input
        placeholder="Search"
        className="border w-full px-4 py-1"
        onChange={handleChange}
      />
      <Link to="/display-exercise">
        <button
          className="border py-1 px-4 hover:bg-black hover:text-white duration-200"
          onClick={() => onChecked()}
        >
          Submit
        </button>
      </Link>
    </div>
  );
};

export default SearchComponent;
