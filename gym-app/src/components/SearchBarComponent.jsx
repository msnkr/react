const SearchBarComponent = ({ onSearch, onChecked }) => {
  return (
    <div className="mt-12 flex justify-center items-center">
      <input
        type="text"
        placeholder="Search by body part, level, etc.."
        className="border px-4 py-2 w-2/3"
        onChange={onSearch}
      />
      <button
        className="border px-4 py-2 hover:bg-black hover:text-white hover:border-white duration-500"
        onClick={onChecked}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBarComponent;
