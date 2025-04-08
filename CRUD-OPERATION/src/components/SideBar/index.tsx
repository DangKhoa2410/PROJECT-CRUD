import { FaHome, FaCog, FaCalendarAlt  } from "react-icons/fa";
import { FiAlignJustify } from "react-icons/fi";
import Nav from "../Nav";
import {NavProps} from "../../interfaces/nav";


const Sidebar = () => {

  const navItems: NavProps[] = [
    { icon: FaHome, label: "Home", path: '/HomePage' },
    { icon: FiAlignJustify, label: "Task", path:'/TaskPage' },
    { icon: FaCalendarAlt, label: "Register for work schedule", path: '/Register-schedule ' },
    { icon: FaCog, label: "Settings", path: '/SettingPage' },
  ];

  return (
    <div className="bg-pale-white w-72 min-h-screen p-4">
      <h2 className="text-xl font-bold text-center text-black uppercase">
        <span className="text-yellow">|</span> hrm ipos.vn
      </h2>

      <Nav navItems={navItems}/>
    </div>
  );
};

export default Sidebar;

