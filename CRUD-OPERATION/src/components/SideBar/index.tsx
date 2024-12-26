import { FaHome, FaBookmark, FaGraduationCap, FaDollarSign, FaFileAlt, FaCog } from "react-icons/fa";
import Nav from "../Nav";
import {NavProps} from "../../interfaces/nav";
const Sidebar = () => {

  const navItems: NavProps[] = [
    { icon: FaHome, label: "Home" },
    { icon: FaBookmark, label: "Course" },
    { icon: FaGraduationCap, label: "Students" },
    { icon: FaDollarSign, label: "Payment" },
    { icon: FaFileAlt, label: "Report" },
    { icon: FaCog, label: "Settings" },
  ];

  return (
    <div className="bg-pale-white w-72 min-h-screen p-4">
      <h2 className="text-xl font-bold text-center text-black uppercase">
        <span className="text-yellow">|</span> crud operations
      </h2>

      <Nav navItems={navItems}/>
    </div>
  );
};

export default Sidebar;

