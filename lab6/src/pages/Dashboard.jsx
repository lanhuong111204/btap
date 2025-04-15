import OverviewCard from "../components/OverviewCard/OverviewCard";
import DataTable from "../components/Table/Table";
import logo_cart from"../assets/img/logo_cart.png";
import logo_$ from"../assets/img/logo_$.png";
import logo_user from"../assets/img/logo_user.png";

const Dashboard = () => (
  <div className="p-6 space-y-6">
    <div className="flex space-x-4">
      <OverviewCard title="Turnover" value="92,405" percent="5.39" bg="bg-pink-100" icon = {<img src={logo_cart}/>} />
      <OverviewCard title="Profit" value="32,218" percent="5.39" bg="bg-blue-50" icon={<img src={logo_$}/>} />
      <OverviewCard title="New customer" value="298" percent="6.84" bg="bg-blue-100" icon={<img src={logo_user}/>} />
    </div>
    <DataTable />
  </div>
);
export default Dashboard;
