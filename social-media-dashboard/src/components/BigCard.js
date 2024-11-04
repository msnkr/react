function BigCard({
  lineColor,
  icon,
  name,
  followerCount,
  followers,
  arrowIcon,
  todayCount,
}) {
  return (
    <div>
      <div className="card text-center">
        <div className={`w-full h-2 ${lineColor} rounded-t-lg`}></div>
        <div className="w-full h-[250px] bg-dark-desaturated-blue-card-bg rounded-b-lg">
          <div className="card-container p-8 space-y-4">
            <div className="flex justify-center space-x-4">
              <div className="icon">
                <img className="w-[25px] h-[25px]" src={icon} />
              </div>
              <div>
                <p>{name}</p>
              </div>
            </div>
            <div>
              <p className="text-5xl mt-4 font-bold text-white">
                {followerCount}
              </p>
            </div>
            <div>
              <p className="uppercase tracking-widest">{followers}</p>
            </div>
            <div className="mt-2 flex justify-center space-x-4 items-center font-bold">
              <div>
                <img src={arrowIcon} className="w-[10px] h-[10px]" />
              </div>
              <div>
                <p>{todayCount}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BigCard;
