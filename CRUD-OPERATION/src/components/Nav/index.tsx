import { NavSide } from "../../interfaces/nav";
const Nav = ({ navItems }: NavSide) => {
  return (
    <nav>
      <ul className=" space-y-5">
        {navItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center space-x-2 p-4 rounded-md cursor-pointer text-black hover:bg-yellow-dark hover:text-white"
          >
            <item.icon /> 
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav
