import { Home } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/img/logo.png";
import logo_team from "../assets/img/logo_team.png";
import logo_code from "../assets/img/Code.png";
import logo_chat from "../assets/img/Chat.png";
import logo_chart from "../assets/img/Pie chart.png";
import logo_folder from "../assets/img/Folder.png";
import group from "../assets/img/Group.png";

// Tạo routes tương ứng để dùng NavLink
const menu = [
  { icon: <Home />, label: 'Dashboard', to: '/' },
  { icon: <img src={logo_folder} />, label: 'Projects', to: '/projects' },
  { icon: <img src={logo_team} />, label: 'Teams', to: '/teams' },
  { icon: <img src={logo_chart} />, label: 'Analytics', to: '/analytics' },
  { icon: <img src={logo_chat} />, label: 'Messages', to: '/messages' },
  { icon: <img src={logo_code} />, label: 'Integrations', to: '/integrations' },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow h-auto">
      <div>
        <div className="px-6 py-4 text-xl">
          <img src={logo} alt="Logo" />
        </div>
        <nav className="flex flex-col px-3">
          {menu.map((item, index) => (
            <NavLink
              to={item.to}
              key={index}
              className={({ isActive }) =>
                `flex items-center gap-3 py-2 px-4 rounded-xl transition 
                 ${isActive ? 'bg-pink-100 text-pink-600 font-semibold' : 'text-gray-700 hover:bg-pink-50'}`
              }
            >
              <div className="w-5 h-5">{item.icon}</div>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="px-6 py-10 text-center">
        <div className="rounded-lg shadow-md bg-blue-50 p-4">
          <img src={group} alt="Team Logo" className="mx-auto mb-3" />
          <p className="font-semibold text-gray-800 mb-2">V2.0 is available</p>
          <button className="border border-blue-500 text-blue-500 px-4 py-1 rounded-full hover:bg-blue-100 transition">
            Try now
          </button>
        </div>
      </div>
    </aside>
  );
}
