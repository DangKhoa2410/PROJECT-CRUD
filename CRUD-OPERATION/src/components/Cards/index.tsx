import Button from "../Button"
import Input from "../Input"

interface CardProps {
  isNight?: boolean
  registeredNames: string[];
  onRegister: () => void;
  isRegistered?: boolean;
}
const Cards = ({ isNight, registeredNames, onRegister, isRegistered }: CardProps) => {
  return (
    <div className="mt-10 mr-10 bg-white border border-gray-300 shadow-lg rounded-xl p-4 w-full max-w-md">
      <div className="mb-4">
        <h5 className="text-lg font-semibold text-gray-800">
          {isNight && "CA TỐI" || "CA CHIỀU"} (Phục vụ) <span className="text-sm text-gray-500">{isNight && "[17:00 - 23:00]" || "[12:00 - 17:00]"}</span>
        </h5>
        <hr className="mt-2" />
      </div>

      {registeredNames.map((name, index) => (
        <div key={index} className="flex items-center mb-4">
          <Input type="checkbox" className="mr-3 w-5 h-5" checked readOnly />
          <label className="text-gray-700">{name}</label>
        </div>
      ))}


      <div className="text-center">
        <Button
          className={`
            outline-none ring-0 focus:outline-none focus:ring-0
            hover:outline-none hover:ring-0
            active:outline-none active:ring-0
            border-none focus:border-none hover:border-none active:border-none
            shadow-none
            ${isRegistered ? 'text-red' : 'bg-pale-white'}
          `}
          text={isRegistered ? "Hủy đăng ký" : "Đăng ký"}
          onClick={onRegister}
        />
      </div>
    </div>
  )
}

export default Cards