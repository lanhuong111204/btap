import React, { useEffect, useState } from 'react';
import logo_cart from"../assets/img/logo_cart.png";
import logo_$ from"../assets/img/logo_$.png";
import logo_user from"../assets/img/logo_user.png";

const Overview =() => {
  const [overviewData, setOverviewData] = useState([]);

  const imgMap = {
    logo_cart: <img src={logo_cart} alt="" />,
    logo_$: <img src={logo_$} alt="" />,
    logo_user: <img src={logo_user} alt="" />
  }

  useEffect(() => {
    fetch("http://localhost:3001/overview")
      .then((response) => response.json())
      .then((data) => setOverviewData(data))
  }, []);

  console.log("overviewdata: ", overviewData);
  

  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <img src="Squares four 1.png" alt="overview icon" className="w-5 h-5" />
        <h5 className="text-lg font-semibold">Overview</h5>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        {overviewData.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center flex-1 p-7 bg-gray-100 rounded-lg"
          >
            <div>
              <h3 className="text-l text-gray-600 font-bold">{item.title}</h3>
              <p className="text-xl font-bold">{item.data}</p>
              <p className="text-green-500 text-sm">{item.period}</p>
            </div>
            {imgMap[item?.img]}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Overview;