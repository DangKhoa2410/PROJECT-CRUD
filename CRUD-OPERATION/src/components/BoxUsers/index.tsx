import Button from "../Button";

export interface ShiftItem {
  date: string;
  shift: string[];
}

interface BoxUsersProps {
  name: string;
  registeredDate: string;
  shifts: ShiftItem[];
  onApprove: () => void;
  onReject: () => void;
  onEdit: () => void;
}

const BoxUsers = ({ name, onEdit, registeredDate, shifts, onApprove, onReject }: BoxUsersProps) => {
  return (
    <div className="mt-4">
      <div className="bg-gray-white p-4 rounded-lg">
        <h2 className="font-semibold">Nhân viên: {name}</h2>
        <p>Tuần Bắt Đầu: {registeredDate}</p>

        <div className="mt-3">
          <h2 className="font-semibold">Ngày Đăng Ký:</h2>
          {shifts.map((item, idx) => (
            <div className="flex" key={idx}>
              <p className="mr-2">{item.date}:</p>
              <p>
                - {item.shift.map(s => s === 'ca-chieu' ? 'Ca chiều' : s === 'ca-toi' ? 'Ca tối' : s).join(', ')}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-end">
          <Button className="border-0 bg-yellow-dark text-white" text="Duyệt" onClick={onApprove} />
          <Button className="border-0 mx-4 bg-yellow-dark text-white" text="Chỉnh Sửa" onClick={onEdit} />
          <Button className="border-0 bg-yellow-dark text-white" text="Từ Chối" onClick={onReject} />
        </div>
      </div>
    </div>
  );
};

export default BoxUsers;
