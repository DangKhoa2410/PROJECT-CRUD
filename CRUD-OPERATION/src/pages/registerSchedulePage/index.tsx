import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/SideBar";
import Header from "../../components/Header";
import BoxDays from "../../components/BoxDay";
import Cards from "../../components/Cards";
import { useState, useEffect } from "react";
import { toggleShiftAPI, getAllRegisteredShiftsAPI } from "../../script/services/api";
import { getCurrentVietnameseWeek } from "../../utils/date"

interface ShiftRegister {
  email: string;
  fullName: string;
  shift: "ca-toi" | "ca-chieu";
}


const RegisterSchedulePage = () => {
  const navigate = useNavigate();
  const userInfo = {
    fullName: localStorage.getItem("fullName") || "",
    role: localStorage.getItem("role") || "",
    email: localStorage.getItem("email") || "",
  };
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [registeredNamesCaToi, setRegisteredNamesCaToi] = useState<string[]>([]);
  const [registeredNamesCaChieu, setRegisteredNamesCaChieu] = useState<string[]>([]);

  const headData = [
    {
      img: "/src/assets/img/Mask-Group.png",
      name: userInfo.fullName,
      position: userInfo.role === "admin" ? "Bộ Phận Quản Lý" : "Bộ Phận Phục Vụ"
    }
  ];


  const dayData = getCurrentVietnameseWeek();


  const fetchAndSetRegisteredShifts = async () => {
    setLoading(true);
    try {
      const res = await getAllRegisteredShiftsAPI();
      const data: ShiftRegister[] = res.data;

      const caToi: string[] = [];
      const caChieu: string[] = [];

      data.forEach((item) => {
        if (item.shift === "ca-toi") caToi.push(item.fullName);
        if (item.shift === "ca-chieu") caChieu.push(item.fullName);
      });

      setRegisteredNamesCaToi(caToi);
      setRegisteredNamesCaChieu(caChieu);
      setError("");
    } catch (err) {
      console.error("Lỗi khi lấy danh sách đăng ký:", err);
      setError("Không thể tải danh sách đăng ký.");
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchAndSetRegisteredShifts();
  }, []);

  const toggleShift = async (shift: string) => {
    try {
      const res = await toggleShiftAPI({ email: userInfo.email, shift });

      if (res.data?.status) {
        fetchAndSetRegisteredShifts();
      }
    } catch (err) {
      console.error("Lỗi khi toggle shift:", err);
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-10">
        <Header headerData={headData} onClickLogout={() => navigate('/')} />
        <BoxDays boxItems={dayData} />
        <div className="flex">
          <Cards
            registeredNames={registeredNamesCaToi}
            onRegister={() => toggleShift("ca-toi")}
            isNight
            isRegistered={registeredNamesCaToi.includes(userInfo.fullName)}
          />

          <Cards
            registeredNames={registeredNamesCaChieu}
            onRegister={() => toggleShift("ca-chieu")}
            isRegistered={registeredNamesCaChieu.includes(userInfo.fullName)}
            />
            {error && <p className="text-red text-center mt-4">{error}</p>}
            {loading && <p className="text-center mt-4">Đang tải dữ liệu...</p>}
        </div>
      </div>
    </div>
  );
};

export default RegisterSchedulePage;
