import { ListUserProps } from "../../../interfaces/listUsers";

const Tbody = ({ rows, onApprove, onReject }: ListUserProps) => {
  return (
    <tbody>
      {rows.map((row, index) => (
        <tr key={index}>
          <td className="px-4 py-2 capitalize text-gray">{row.nameUser}</td>
          <td className="px-4 py-2 text-gray">{row.email}</td>
          <td className="px-4 py-2 text-gray">
            {(row.shift || []).join(", ")}
          </td>
          <td className="px-4 py-2 text-gray">
            {row.registeredDate
              ? new Date(row.registeredDate).toLocaleDateString("vi-VN")
              : "—"}
          </td>
          <td className="px-4 py-2  space-x-2">
            {row.source === "user" && row.status !== "approved" ? (
              <>
                <button
                  className="text-green-600"
                  onClick={() => onApprove?.(row)}
                >
                  Duyệt
                </button>
                <button
                  className="text-red-600"
                  onClick={() => onReject?.(row)}
                >
                  Từ chối
                </button>
              </>
            ) : (
              <span className="text-green-600">✔️ Đã duyệt</span>
            )}
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default Tbody;
