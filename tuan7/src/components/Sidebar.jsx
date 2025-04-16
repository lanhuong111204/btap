import { Home } from 'lucide-react';
import logo from "../assets/img/logo.png";
import logo_team from"../assets/img/logo_team.png";
import logo_code from"../assets/img/Code.png";
import logo_chat from"../assets/img/Chat.png";
import logo_chart from"../assets/img/Pie chart.png";
import logo_folder from"../assets/img/Folder.png";
import group from"../assets/img/Group.png";

const menu = [
  { icon: <Home />, label: 'Dashboard' },
  { icon: <img src={logo_folder}/>, label: 'Projects' },
  { icon: <img src={logo_team}/>, label: 'Teams' },
  { icon:  <img src={logo_chart}/>,label: 'Analytics' },
  { icon: <img src={logo_chat}/>, label: 'Messages' },
  { icon: <img src={logo_code}/>, label: 'Integrations' },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow h-auto">
      <div>
      <div className="px-6 py-4 text-xl"><img src={logo} alt="" /></div>
      <nav className="flex flex-col  px-5">
        {menu.map((item, index) => (
          <div key={index} className="flex gap-3 py-2 text-gray-700 hover:bg-pink-500 hover:rounded-xl">
            <div className="pl-4">{item.icon}</div>
            <span>{item.label}</span>
          </div>
        ))}
      </nav>
      </div>
      <div className="px-6 py-10 text-center">
        <div className="rounded-lg shadow-md bg-blue-50 ">
            <img src={group} alt="Team Logo"/>
        <p className="font-semibold text-gray-800 mb-2">V2.0 is available</p>
        <button className="mt-auto border border-white-500 text-blue-500 px-4 py-1 rounded-full hover:bg-blue-50 transition">
        Try now
        </button>
      </div>
      </div>
    </aside>
  );
}
