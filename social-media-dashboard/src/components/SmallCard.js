function SmallCard({ heading, socialIcon, amount, arrowIcon, percentage }) {
  return (
    <div>
      <div className="bg-rose-100 w-full h-[150px] p-8 space-y-8 rounded-lg">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-bold">{heading}</p>
          </div>
          <div>
            <img className="w-[25px] h-[25px]" src={socialIcon} />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-4xl">{amount}</p>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <img className="w-[10px] h-[10px] m-2" src={arrowIcon} />
            </div>
            <div>
              <p>{percentage}%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmallCard;
