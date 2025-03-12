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
    </div>
  );
};

export default SearchComponent;
