function BigCard({
  isDarkMode,
  lineColor,
  icon,
  name,
  followerCount,
  followers,
  arrowIcon,
  highOrLow,
  todayCount,
}) {
  return (
    <div>
      <div className="card text-center">
        <div className={`w-full h-2 ${lineColor} rounded-t-lg`}></div>
        <div
          className={`${
            isDarkMode
              ? "bg-dark-desaturated-blue-card-bg"
              : "bg-very-pale-blue-top-patter"
          } duration-1000 w-full h-[250px] rounded-b-lg`}
        >
          <div className="card-container p-8 space-y-4">
            <div className="flex justify-center space-x-4">
              <div className="icon">
                <img className="w-[25px] h-[25px]" src={icon} alt="icon" />
              </div>
              <div>
                <p>{name}</p>
              </div>
            </div>
            <div>
              <p
                className={`text-6xl mt-4 font-bold ${
                  isDarkMode ? "text-white" : "text-very-dark-blue-light"
                } duration-1000`}
              >
                {followerCount}
              </p>
            </div>
            <div>
              <p className="uppercase tracking-widest">{followers}</p>
            </div>
            <div className="mt-2 flex justify-center space-x-4 items-center font-bold">
              <div>
                <img src={arrowIcon} className="w-[10px] h-[10px]" alt="icon" />
              </div>
              <div>
                <p
                  className={`${
                    highOrLow ? "text-lime-green" : "text-bright-red"
                  }`}
                >
                  {todayCount}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BigCard;
