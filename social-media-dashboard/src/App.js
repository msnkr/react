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
  const [darkMode, setDarkMode] = useState(true);

  function toggleDarkMode() {
    setDarkMode(false);
  }

  return (
    <div
      className={`text-desaturated-blue px-8 py-12 pb-[100px] ${
        darkMode ? "bg-very-dark-blue text-white" : "bg-white text-black"
      }`}
    >
      <div className="section-1 my-2">
        <div>
          <h1 className="text-3xl text-white">Social Media Dashboard</h1>
        </div>
        <div className="text-xl">Total Followers: 23, 004</div>
      </div>
      <div>
        <div className="bg-desaturated-blue w-full h-[2px]"></div>
      </div>
      <div className="flex justify-between mt-2">
        <h1>Dark Mode</h1>
        <button
          onClick={toggleDarkMode}
          className="bg-gradient-to-r from-toggle-start to-toggle-end w-[70px] h-[30px] rounded-full"
        >
          <div className="bg-very-dark-blue w-[25px] h-[25px] rounded-full ml-1"></div>
        </button>
      </div>
      <div className="section-2 mt-8 space-y-8">
        <BigCard
          lineColor={"bg-facebook"}
          icon={iconFacebook}
          name={"@nathanf"}
          followerCount={1987}
          followers={"followers"}
          arrowIcon={iconIncrease}
          highOrLow={true}
          todayCount={"12 Today"}
        />
        <BigCard
          lineColor={"bg-facebook"}
          icon={iconTwitter}
          name={"@nathanf"}
          followerCount={1044}
          followers={"followers"}
          arrowIcon={iconIncrease}
          highOrLow={true}
          todayCount={"99 Today"}
        />
        <BigCard
          lineColor={"bg-gradient-to-r from-instagram-start to-instagram-end"}
          icon={iconInstagram}
          name={"@realnathanf"}
          followerCount={"11K"}
          followers={"followers"}
          arrowIcon={iconIncrease}
          highOrLow={true}
          todayCount={"1099 Today"}
        />
        <BigCard
          lineColor={"bg-youtube"}
          icon={iconYoutube}
          name={"Nathan F."}
          followerCount={8239}
          followers={"subscribers"}
          arrowIcon={iconDecrease}
          highOrLow={false}
          todayCount={"144 Today"}
        />
      </div>
      <div className="section-3 my-8">
        <p className="text-3xl text-white">Overview - Today</p>
      </div>
      <div className="section-4">
        <div className="space-y-4">
          <SmallCard
            heading={"Page Views"}
            socialIcon={iconFacebook}
            amount={"87"}
            arrowIcon={iconIncrease}
            highOrLow={true}
            percentage={3}
          />
          <SmallCard
            heading={"Likes"}
            socialIcon={iconFacebook}
            amount={"52"}
            arrowIcon={iconDecrease}
            highOrLow={false}
            percentage={2}
          />
          <SmallCard
            heading={"Likes"}
            socialIcon={iconInstagram}
            amount={"5462"}
            arrowIcon={iconIncrease}
            highOrLow={true}
            percentage={2257}
          />
          <SmallCard
            heading={"Profile Views"}
            socialIcon={iconInstagram}
            amount={"52K"}
            arrowIcon={iconIncrease}
            highOrLow={true}
            percentage={1375}
          />
          <SmallCard
            heading={"Retweets"}
            socialIcon={iconTwitter}
            amount={"117"}
            arrowIcon={iconIncrease}
            highOrLow={true}
            percentage={303}
          />
          <SmallCard
            heading={"Likes"}
            socialIcon={iconTwitter}
            amount={"507"}
            arrowIcon={iconIncrease}
            highOrLow={true}
            percentage={553}
          />
          <SmallCard
            heading={"Likes"}
            socialIcon={iconYoutube}
            amount={"107"}
            arrowIcon={iconIncrease}
            highOrLow={true}
            percentage={19}
          />
          <SmallCard
            heading={"Total Views"}
            socialIcon={iconYoutube}
            amount={"1407"}
            arrowIcon={iconIncrease}
            highOrLow={true}
            percentage={12}
          />
        </div>
      </div>
    </div>
  );
}
