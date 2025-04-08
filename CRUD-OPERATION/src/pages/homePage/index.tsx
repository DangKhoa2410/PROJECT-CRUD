import Header from "../../components/Header"
import Sidebar from "../../components/SideBar"
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate()

  const logOutBtn = () => {
    navigate('/')
  }

  const fullName = localStorage.getItem("fullName") || "";
  const role = localStorage.getItem("role");
  
  const headData = [
    {
      img: "/src/assets/img/Mask-Group.png",
      name: fullName,
      position: role === "admin" ? "Bộ Phận Quản Lý" : "Bộ Phận Phục Vụ"
    }
  ];

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-10">
          <Header headerData={headData} onClickLogout={logOutBtn} />

        </div>
    </div>
  )
}

export default HomePage