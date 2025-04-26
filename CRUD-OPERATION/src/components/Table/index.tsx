import Thead, { TheadProps } from "./Thead";
import Tbody from "./Tbody";
import { ListUserProps } from "../../interfaces/listUsers";

const TableComponent = ({ rows, onEdit, onClickRemove, onReject, onApprove }: ListUserProps) => {
  const headers: TheadProps[] = [
    { value: "Name" },
    { value: "Email" },
    { value: "Shift" },
    { value: "Registration date" },
    { value: "Actions" },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <Thead value={headers} />
        <Tbody onReject={onReject} onApprove={onApprove} onClickRemove={onClickRemove} onEdit={onEdit} rows={rows} />
      </table>
    </div>
  );
};

export default TableComponent;
