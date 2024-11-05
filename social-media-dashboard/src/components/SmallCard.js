function SmallCard({
  isDarkMode,
  heading,
  socialIcon,
  amount,
  arrowIcon,
  percentage,
  highOrLow,
}) {
  return (
    <div>
      <div
        className={`${
          isDarkMode
            ? "bg-dark-desaturated-blue-card-bg"
            : "bg-very-pale-blue-top-patter"
        } duration-1000 w-full h-[140px] px-12 space-y-4  py-8 rounded-lg`}
      >
        <div className="flex justify-between items-center">
          <div>
            <p className="font-bold">{heading}</p>
          </div>
          <div>
            <img className="w-[25px] h-[25px]" src={socialIcon} alt="icon" />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p
              className={`${
                isDarkMode ? "text-white" : "text-very-dark-blue-light"
              } duration-1000 text-4xl`}
            >
              {amount}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <img
                className="w-[10px] h-[10px] m-2"
                src={arrowIcon}
                alt="icon"
              />
            </div>
            <div>
              <p
                className={`${
                  highOrLow ? "text-lime-green" : "text-bright-red"
                }`}
              >
                {percentage}%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmallCard;
