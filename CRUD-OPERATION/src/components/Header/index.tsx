import Input from "../Input";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { GoBell } from "react-icons/go";

interface HeaderProps {
  onClickLogout?: () => void
  isShow?: boolean
}

const Header = ({ onClickLogout, isShow }: HeaderProps) => {
  return (
    <div className="flex mt-5">
      <div className="flex items-center">
        {
          isShow && <Input
            placeholder="Search..."
            className="border rounded-md mr-6 pl-3 pr-6 py-2"
          />
        }
        <GoBell className="text-xl" />
        <button className="mx-8 focus:outline-none border-0 px-4 py-2 rounded text-xl bg-white">
          <RiLogoutBoxRFill onClick={onClickLogout} />
        </button>
      </div>
    </div>
  )
}

export default Header