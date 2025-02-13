const SearchComponent = () => {
  return (
    <div className="flex justify-center items-center px-8 my-8">
      <input placeholder="Search" className="border w-full px-4 py-1" />
      <button className="border py-1 px-4 hover:bg-black hover:text-white duration-200">
        Submit
      </button>
    </div>
  );
};

export default SearchComponent;
