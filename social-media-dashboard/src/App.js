import BigCard from "./components/BigCard";

export default function App() {
  return (
    <div className="p-8">
      <div className="section-1 my-2">
        <div>
          <h1 className="text-3xl">Social Media Dashboard</h1>
        </div>
        <div className="text-xl">Total Followers: 0000</div>
      </div>
      <div>
        <div className="bg-black w-full h-[1px]"></div>
      </div>
      <div className="flex justify-between mt-2">
        <h1>Dark Mode</h1>
        <button>toggle</button>
      </div>
      <div className="section-2">
        <BigCard />
      </div>
      <div className="section-3"></div>
      <div className="section-4"></div>
    </div>
  );
}
