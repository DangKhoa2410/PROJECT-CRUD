import Input from "../Input";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { GoBell } from "react-icons/go";
const Header = () => {
  return (
    <div className="flex mt-5">
      <div className="flex items-center">
        <Input
          placeholder="Search..."
          className="border rounded-md mr-6 pl-3 pr-6 py-2"
        />
        <GoBell className="text-xl" />
        <button className="mx-8 focus:outline-none border-0 px-4 py-2 rounded text-xl bg-white">
          <RiLogoutBoxRFill />
        </button>
      </div>
    </div>
  )
}

export default Header