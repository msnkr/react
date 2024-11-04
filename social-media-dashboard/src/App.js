import BigCard from "./components/BigCard";
import SmallCard from "./components/SmallCard";
import iconFacebook from "./images/icon-facebook.svg";
import iconInstagram from "./images/icon-instagram.svg";
import iconTwitter from "./images/icon-twitter.svg";
import iconYoutube from "./images/icon-youtube.svg";
import iconIncrease from "./images/icon-up.svg";
import iconDecrease from "./images/icon-down.svg";

import { useState } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div
      className={`p-20 ${
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
      <div className="section-2 mt-8 space-y-8">
        <BigCard
          lineColor={"bg-green-100"}
          icon={iconFacebook}
          name={"@nathanf"}
          followerCount={1987}
          followers={"followers"}
          arrowIcon={iconIncrease}
          todayCount={"12 Today"}
        />
      </div>
      <div className="section-3 my-8">
        <p className="text-3xl">Overview - Today</p>
      </div>
      <div className="section-4">
        <div>
          <SmallCard
            heading={"Page Views"}
            socialIcon={iconFacebook}
            amount={"87"}
            arrowIcon={iconIncrease}
            percentage={3}
          />
        </div>
      </div>
    </div>
  );
}
