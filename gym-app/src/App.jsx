import "./App.css";

function App() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center text-center mt-20">
        <p className="text-xl font-semibold">Hi</p>
        <p className="text-5xl font-semibold w-2/3">Welcome to my gym app</p>
        <p className="text-xl mt-8">Completely free of charge</p>
      </div>
      <div className="mt-8 flex justify-center items-center">
        <input
          type="text"
          placeholder="Search by body part, level, etc.."
          className="border px-4 py-2 w-2/3"
        />
        <button className="border px-4 py-2 hover:bg-black hover:text-white hover:border-white duration-500">
          Search
        </button>
      </div>
      <div className="mt-20 flex flex-col justify-center items-center">
        <div>
          <p>Hello, World!</p>
        </div>
      </div>
    </div>
  );
}

export default App;
