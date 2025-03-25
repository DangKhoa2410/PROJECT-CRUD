import Thead, { TheadProps } from "./Thead";
import Tbody from "./Tbody";
import { ListUserProps } from "../../interfaces/listUsers";

const TableComponent = ({rows, onEdit, onClickRemove}: ListUserProps) => {
  const headers: TheadProps[] = [
    { value: "Name" },
    { value: "Email" },
    { value: "Phone" },
    { value: "Date of Admission" },
    { value: "Actions" },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse text-left">
        <Thead value={headers} />
        <Tbody onClickRemove={onClickRemove} onEdit={onEdit} rows={rows} />
      </table>
    </div>
  );
};

export default TableComponent;
