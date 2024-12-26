import { RiLogoutBoxRFill } from "react-icons/ri";

export interface TbodyRow {
  name: string;
  email: string;
  phone: string;
  date: string;
}

export interface TbodyProps {
  rows: TbodyRow[];
}

const Tbody = ({ rows }: TbodyProps) => {
  return (
    <tbody>
      {rows.map((row, index) => (
        <tr key={index} className="">
          <td className=" px-4 py-2 text-gray">{row.name}</td>
          <td className=" px-4 py-2 text-gray">{row.email}</td>
          <td className=" px-4 py-2 text-gray">{row.phone}</td>
          <td className=" px-4 py-2 text-gray">{row.date}</td>
          <td className=" px-4 py-2 flex space-x-2">
            <button className="bg-blue hover:bg-blue text-white px-4 py-2 rounded text-lg focus:outline-none">
              <RiLogoutBoxRFill />
            </button>
            <button className="bg-blue hover:bg-blue text-white px-4 py-2 rounded text-lg focus:outline-none">
              <RiLogoutBoxRFill />
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default Tbody;
