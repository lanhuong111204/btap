const OverviewCard = ({ title, value, percent, icon, bg }) => (
    <div className={`flex-1 p-4  ${bg}`}>
      <div className="flex justify-between items-center">
        <h2 className="text-gray-600 font-semibold">{title}</h2>
        {icon}
      </div>
      <p className="text-2xl font-bold">${value}</p>
      <p className="text-sm text-green-600 mt-1">▲ {percent}% period of change</p>
    </div>
  );
  export default OverviewCard;
  