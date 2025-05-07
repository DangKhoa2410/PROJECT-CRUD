import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Sidebar from "../../components/SideBar";
import AddEditForm from "../../components/AddEditForm";
import { ListUserRow } from "../../interfaces/listUsers";
import {
  createWorkUser,
  deleteWorkUser,
} from "../../script/services/workUserApi";
import {
  approveAllShiftsByEmail,
  getAllRegisteredShiftsAPI,
  rejectAllShiftsByEmail,
} from "../../script/services/api";
import BoxUsers from "../../components/BoxUsers";
import { groupBy } from "lodash";
import { ShiftItem } from "../../components/BoxUsers";


interface RegisteredUser {
  email: string;
  fullName: string;
  registeredDate: string;
  shifts: ShiftItem[];
}

const TaskPage = () => {
  const navigate = useNavigate();
  const [hide, setHide] = useState(false);
  const [modalTitle, setModalTitle] = useState("Thêm ca làm");
  const [isEditing, setIsEditing] = useState(false);

  const [form, setForm] = useState<ListUserRow>({
    nameUser: '',
    email: '',
    registeredDate: '',
    shift: []
  });


  const handleForm = useCallback(() => {
    setModalTitle("Thêm ca làm");
    setHide(true);
    setIsEditing(false);
    setForm({
      nameUser: '',
      email: '',
      registeredDate: '',
      shift: []
    });
  }, []);

  const normalizeShift = (shift: string): 'ca chieu' | 'ca toi' => {
    if (shift === 'ca-chieu') return 'ca chieu';
    if (shift === 'ca-toi') return 'ca toi';
    return shift as 'ca chieu' | 'ca toi';
  };

  const toggleShift = (
    shift: 'ca chieu' | 'ca toi' | null,
    newShifts?: string[]
  ) => {
    setForm((prev) => {
      const currentDate = prev.registeredDate;
      const currentShiftByDate = prev.shiftByDate ? { ...prev.shiftByDate } : {};

      const currentEntries = currentShiftByDate[currentDate] || [{ shifts: [] }];
      if (!currentEntries[0]) currentEntries[0] = { shifts: [] };

      let shiftList = [...currentEntries[0].shifts];

      if (shift === null && newShifts) {
        currentEntries[0].shifts = newShifts;
      } else {
        if (shiftList.includes(shift!)) {
          shiftList = shiftList.filter((s) => s !== shift);
        } else {
          shiftList.push(shift!);
        }
        currentEntries[0].shifts = shiftList;
      }

      currentShiftByDate[currentDate] = currentEntries;

      return {
        ...prev,
        shift: currentEntries[0].shifts,
        shiftByDate: currentShiftByDate,
      };
    });
  };


  const handleEdit = (user: any) => {
    const shiftByDate: Record<string, { id?: string; shifts: string[] }[]> = {};

    user.shifts.forEach((item: any) => {
      if (!shiftByDate[item.date]) shiftByDate[item.date] = [];
      shiftByDate[item.date].push({ id: item.id, shifts: item.shift }); 
    });

    const defaultDate = Object.keys(shiftByDate)[0];

    setForm({
      id: user.shifts[0]?.id,
      nameUser: user.fullName,
      email: user.email,
      registeredDate: defaultDate,
      shift: shiftByDate[defaultDate]?.[0]?.shifts || [],
      shiftByDate,
    });

    setIsEditing(true);
    setModalTitle("Chỉnh sửa ca làm");
    setHide(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    for (const [date, entries] of Object.entries(form.shiftByDate || {})) {
      for (const entry of entries) {
        for (const ca of entry.shifts) {
          await createWorkUser({
            nameUser: form.nameUser,
            email: form.email,
            registeredDate: date,
            shift: [normalizeShift(ca)],
          });
        }
      }
    }
    setHide(false);
  };

  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.shiftByDate) return;

    const currentShiftInfo = form.shiftByDate[form.registeredDate]?.[0];
    if (!currentShiftInfo) return;

    const originalShifts = currentShiftInfo.shifts || [];
    const newShifts = form.shift || [];

    const shiftsToAdd = newShifts.filter((shift) => !originalShifts.includes(shift));
    const shiftsToRemove = originalShifts.filter((shift) => !newShifts.includes(shift));

    const promises: Promise<any>[] = [];

    if (shiftsToRemove.length > 0 && currentShiftInfo.id) {
      promises.push(deleteWorkUser(currentShiftInfo.id));
    }

    for (const shift of shiftsToAdd) {
      promises.push(
        createWorkUser({
          nameUser: form.nameUser,
          email: form.email,
          registeredDate: form.registeredDate,
          shift: [shift as 'ca chieu' | 'ca toi'],
        })
      );
    }

    await Promise.all(promises);

    setHide(false);
    fetchAllData();
  };



  const logOutBtn = () => navigate("/");

  const headData = [{
    img: "/src/assets/img/Mask-Group.png",
    name: localStorage.getItem("fullName") || "",
    position: localStorage.getItem("role") === "admin" ? "Bộ Phận Quản Lý" : "Bộ Phận Phục Vụ"
  }];

  const [registeredUsers, setRegisteredUsers] = useState<RegisteredUser[]>([]);

  const fetchAllData = async () => {
    const res = await getAllRegisteredShiftsAPI(); 
    const data = res.data;
  
    const pendingData = data.filter((item: any) => item.status === 'pending');
  
    const grouped = groupBy(pendingData, 'email');
  
    const finalData = Object.keys(grouped).map((email) => {
      const fullName = grouped[email][0].fullName;
      const groupByDate = groupBy(grouped[email], 'registeredDate');
  
      const shifts = Object.keys(groupByDate).map((date) => ({
        date,
        shift: groupByDate[date].map((item) => item.shift),
      }));
  
      return {
        email,
        fullName,
        registeredDate: Object.keys(groupByDate)[0],
        shifts,
      };
    });
  
    setRegisteredUsers(finalData);
  };
  
  const handleApprove = async (email: string) => {
    try {
      await approveAllShiftsByEmail(email);
      await fetchAllData(); 
    } catch (error) {
      console.error('Lỗi khi duyệt ca làm:', error);
    }
  };

  const handleReject = async (email: string) => {
    try {
      await rejectAllShiftsByEmail(email);
      await fetchAllData(); 
    } catch (error) {
      console.error('Lỗi khi từ chối ca làm:', error);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  const role = localStorage.getItem("role");

  if (role !== "admin") {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-2">
            ⚠️ Chỉ có quản lý mới xem được trang này.
          </h1>
          <p className="text-gray-600">Vui lòng quay lại trang chính.</p>
          <button
            onClick={() => navigate("/HomePage")}
            className="mt-4 px-4 py-2 bg-blue text-white rounded hover:bg-blue-dark"
          >
            Quay lại trang chủ
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <div className="ml-10">
          <Header headerData={headData} isShow onClickLogout={logOutBtn} />
        </div>

        <div className="mt-5 px-10">
          <div className="flex justify-between pt-5">
            <h1 className="text-black font-medium">Danh Sách Đăng Ký Ca Làm</h1>
            <Button onClick={handleForm} className="border-0 bg-yellow-dark text-white font-normal px-10 text-xl" text="Thêm ca làm" />
          </div>
          {registeredUsers.map((user) => (
            <BoxUsers
              key={user.email}
              name={user.fullName}
              registeredDate={user.registeredDate}
              shifts={user.shifts}
              onApprove={() => handleApprove(user.email)}
              onReject={() => handleReject(user.email)}
              onEdit={() => handleEdit(user)}
            />
          ))}

        </div>

        {hide && (
          <AddEditForm
            list={form}
            title={modalTitle}
            isEditing={isEditing}
            onHideModal={() => setHide(false)}
            addUser={handleSubmit}
            editList={handleEditSubmit}
            onChangeUserName={(e) => setForm({ ...form, nameUser: e.target.value })}
            onChangeEmailUser={(e) => setForm({ ...form, email: e.target.value })}
            onChangeRegisteredDate={(date) => setForm({ ...form, registeredDate: date })}
            toggleShift={toggleShift}
          />
        )}
      </div>
    </div>
  );
};

export default TaskPage;
