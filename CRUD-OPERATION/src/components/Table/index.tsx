import Thead, { TheadProps } from "./Thead";
import Tbody, { TbodyRow } from "./Tbody";

const TableComponent = () => {
  const headers: TheadProps[] = [
    { value: "Name" },
    { value: "Email" },
    { value: "Phone" },
    { value: "Date of Admission" },
    { value: "Actions" },
  ];

  const rows: TbodyRow[] = [
    {
      name: "karthi",
      email: "karthi@gmmail.com",
      phone: "7305477760",
      date: "08-Dec, 2021",
    },
    {
      name: "karthi",
      email: "karthi@gmmail.com",
      phone: "7305477760",
      date: "08-Dec, 2021",
    },
    {
      name: "karthi",
      email: "karthi@gmmail.com",
      phone: "7305477760",
      date: "08-Dec, 2021",
    },  
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse text-left">
        <Thead value={headers} />
        <Tbody rows={rows} />
      </table>
    </div>
  );
};

export default TableComponent;
