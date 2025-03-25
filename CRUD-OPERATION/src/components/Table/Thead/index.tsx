export interface TheadProps {
  value: string;
}

export interface Theads {
  value: TheadProps[];
  
}

const Thead = ({ value }: Theads) => {
  return (
    <thead className="">
      <tr>
        {value.map((text: TheadProps, index: number) => (
          <th
            key={index}
            className="px-4 py-2 text-gray text-left font-semibold"
          >
            {text.value}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default Thead;
