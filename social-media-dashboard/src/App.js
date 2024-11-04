import BigCard from "./components/BigCard";
import iconFacebook from "./images/icon-facebook.svg";
import iconIncrease from "./images/icon-up.svg";

import { useState } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div
      className={`p-8 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="section-1 my-2">
        <div>
          <h1 className="text-3xl">Social Media Dashboard</h1>
        </div>
        <div className="text-xl">Total Followers: 23, 004</div>
      </div>
      <div>
        <div className="bg-black w-full h-[1px]"></div>
      </div>
      <div className="flex justify-between mt-2">
        <h1>Dark Mode</h1>
        <button>toggle</button>
      </div>
      <div className="section-2">
        <BigCard
          lineColor={"bg-yellow-500"}
          icon={iconFacebook}
          name={"@nathanf"}
          followerCount={1987}
          followers={"followers"}
          arrowIcon={iconIncrease}
        />
      </div>
      <div className="section-3"></div>
      <div className="section-4"></div>
    </div>
  );
}
