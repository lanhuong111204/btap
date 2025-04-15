import { Bell, Search } from "lucide-react";
import logo_search from "../../assets/img/logo_search.png";
import logo_bell from "../../assets/img/logo_bell.png";
import logo_question from "../../assets/img/logo_question.png";
import logo_avatar from "../../assets/img/logo_avatar.png";

const Header = () => (
    <header className="flex justify-between items-center p-4 bg-white shadow">
      <h1 className="text-pink-500 text-3xl font-bold">Dashboard</h1>
      <div className="flex items-center justify-end gap-4 p-4">
      {/* Search bar */}
      <div className="relative w-72">
        <img className="absolute left-3 top-1/2 -translate-y-1/2" src={logo_search} alt="" />
        <input
          type="text"
          placeholder="Search..."
          className="pl-30 pr-4 py-2 rounded-md bg-gray-200 text-sm"
        />
      </div>

      {/* Notification bell */}
      <div className="cursor-pointer" ><img src={logo_bell} alt="" /></div>
      <div className="cursor-pointer" ><img src={logo_question} alt="" /></div>

      {/* Avatar */}
      <div className="w-8 h-8 rounded-full border-2 border-yellow-500 overflow-hidden">
        <img
          src={logo_avatar} // Replace with your avatar path
          alt="User Avatar"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
    </header>
  );
  export default Header; 
  