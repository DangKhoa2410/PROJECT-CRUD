import Input from "../Input";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { GoBell } from "react-icons/go";

interface HeaderSide {
  img: string
  name: string
  position: string
}

interface HeaderProps {
  onClickLogout?: () => void
  isShow?: boolean
  headerData: HeaderSide[]
}

const Header = ({ onClickLogout, isShow, headerData }: HeaderProps) => {
  return (
    <div className="flex-1 flex items-start justify-between mt-5">
      {headerData.map((item) => (
        <div className="flex">
          <img className="mr-4" src={item.img} alt="" width={65} height={65} />
          <div>
            <h4 className="text-xl mb-2">{item.name}</h4>
            <p className="rounded-full bg-pale-white text-center">{item.position}</p>
          </div>
        </div>
      ))}
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