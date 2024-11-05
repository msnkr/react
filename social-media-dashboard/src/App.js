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
    darkMode ? setDarkMode(false) : setDarkMode(true);
  }

  return (
    <div
      className={`text-desaturated-blue px-8 py-12 pb-[100px] ${
        darkMode
          ? "bg-very-dark-blue text-white"
          : "bg-white text-dark-grayish-blued"
      } xl:px-[200px]`}
    >
      <div className="xl:flex justify-between items-center">
        <div className="section-1 my-2 xl:space-y-4">
          <div>
            <h1
              className={`${
                darkMode ? "text-white" : "text-black"
              } duration-1000 text-3xl font-bold`}
            >
              Social Media Dashboard
            </h1>
          </div>
          <div className="text-xl font-semibold">Total Followers: 23, 004</div>
        </div>
        <div>
          <div
            className={`${
              darkMode ? "bg-desaturated-blue" : "bg-very-pale-blue-top-patter"
            } w-full h-[3px] xl:hidden`}
          ></div>
        </div>
        <div className="xl-container">
          <div className="flex justify-between mt-2 xl:block xl:space-y-4">
            <h1 className="font-bold text-lg">Dark Mode</h1>
            <button
              onClick={toggleDarkMode}
              className={`${
                darkMode
                  ? "bg-gradient-to-r from-toggle-start to-toggle-end"
                  : "bg-dark-grayish-blued"
              } duration-1000 w-[70px] h-[32px] rounded-full`}
            >
              <div
                className={`${
                  darkMode ? "bg-very-dark-blue-top-pattern" : "bg-white ml-10"
                } w-[25px] h-[25px] rounded-full ml-1 duration-1000 ease-in`}
              ></div>
            </button>
          </div>
        </div>
      </div>
      <div className="section-2 mt-8 space-y-8 xl:grid grid-cols-4 gap-8 xl:space-y-0">
        <BigCard
          isDarkMode={darkMode}
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
          isDarkMode={darkMode}
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
          isDarkMode={darkMode}
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
          isDarkMode={darkMode}
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
        <div className="space-y-4 xl:grid grid-cols-4 gap-8 xl:space-y-0">
          <SmallCard
            isDarkMode={darkMode}
            heading={"Page Views"}
            socialIcon={iconFacebook}
            amount={"87"}
            arrowIcon={iconIncrease}
            highOrLow={true}
            percentage={3}
          />
          <SmallCard
            isDarkMode={darkMode}
            heading={"Likes"}
            socialIcon={iconFacebook}
            amount={"52"}
            arrowIcon={iconDecrease}
            highOrLow={false}
            percentage={2}
          />
          <SmallCard
            isDarkMode={darkMode}
            heading={"Likes"}
            socialIcon={iconInstagram}
            amount={"5462"}
            arrowIcon={iconIncrease}
            highOrLow={true}
            percentage={2257}
          />
          <SmallCard
            isDarkMode={darkMode}
            heading={"Profile Views"}
            socialIcon={iconInstagram}
            amount={"52K"}
            arrowIcon={iconIncrease}
            highOrLow={true}
            percentage={1375}
          />
          <SmallCard
            isDarkMode={darkMode}
            heading={"Retweets"}
            socialIcon={iconTwitter}
            amount={"117"}
            arrowIcon={iconIncrease}
            highOrLow={true}
            percentage={303}
          />
          <SmallCard
            isDarkMode={darkMode}
            heading={"Likes"}
            socialIcon={iconTwitter}
            amount={"507"}
            arrowIcon={iconIncrease}
            highOrLow={true}
            percentage={553}
          />
          <SmallCard
            isDarkMode={darkMode}
            heading={"Likes"}
            socialIcon={iconYoutube}
            amount={"107"}
            arrowIcon={iconIncrease}
            highOrLow={true}
            percentage={19}
          />
          <SmallCard
            isDarkMode={darkMode}
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
