import { MdDelete, MdEdit } from "react-icons/md";
import { ListUserProps } from "../../../interfaces/listUsers";

const Tbody = ({ rows, onEdit, onClickRemove }: ListUserProps) => {
  return (
    <tbody>
      {rows.map((row, index) => (
        <tr key={index}>
          <td className=" px-4 py-2 capitalize text-gray">{row.nameUser}</td>
          <td className=" px-4 py-2 text-gray">{row.email}</td>
          <td className=" px-4 py-2 text-gray">{row.phone}</td>
          <td className=" px-4 py-2 text-gray">{row.date}</td>
          <td className=" px-4 py-2 flex space-x-2">
            <button className="bg-blue hover:bg-blue text-white px-4 py-2 rounded text-lg focus:outline-none">
              <MdEdit onClick={onEdit} />
            </button>
            <button className="bg-blue hover:bg-blue text-white px-4 py-2 rounded text-lg focus:outline-none">
              <MdDelete onClick={() => onClickRemove(row, index)}/>
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default Tbody;
