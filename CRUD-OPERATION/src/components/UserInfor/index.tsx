import { UserProps } from "../../interfaces/userInfor";

const UserInfor = ({ firstName }: UserProps) => {
  return (
    <div className="flex flex-col items-center p-6 rounded-lg w-48">
      <div>
        <h6 className="text-lg font-bold text-black mt-4">{firstName}</h6>
      </div>
    </div>
  );
};

export default UserInfor;
