function BigCard({
  lineColor,
  icon,
  name,
  followerCount,
  followers,
  arrowIcon,
}) {
  return (
    <div>
      <div className={`w-full h-2 ${lineColor} rounded-t-lg`}></div>
      <div></div>
    </div>
  );
}

export default BigCard;
