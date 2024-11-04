function SmallCard({ heading, socialIcon, amount, arrowIcon, percentage }) {
  return (
    <div>
      <div>
        <div className="flex justify-between items-center">
          <div>
            <p>{heading}</p>
          </div>
          <div>
            <img src={socialIcon} />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p>{amount}</p>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <img src={arrowIcon} />
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
