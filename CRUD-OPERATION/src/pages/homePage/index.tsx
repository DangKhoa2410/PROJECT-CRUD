import Header from "../../components/Header"
import Sidebar from "../../components/SideBar"
import { useNavigate } from 'react-router-dom';
import FeatureCard from "../../components/FeatureCard";
import { PiBagSimpleFill } from "react-icons/pi";
import { FaUmbrellaBeach, FaClock } from "react-icons/fa";
import { MdTask } from "react-icons/md";

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

  const featureData = [
    {
      icon: <PiBagSimpleFill/>,
      title: "Lịch làm việc",
      subTitle: "Đổi ca/ Nhờ làm thay"
    },
    {
      icon: <FaUmbrellaBeach/>,
      title: "Đăng ký nghỉ",
      subTitle: "Nghỉ ngày/ Nghỉ ca"
    },
    {
      icon: <FaClock/>,
      title: "Số giờ làm việc",
      subTitle: "0h"
    },
    {
      icon: <MdTask/>,
      title: "Bảng tin",
      subTitle: "Đang có 0 tin tức"
    },
  ]

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-10">
          <Header headerData={headData} onClickLogout={logOutBtn} />

          <div>
            <FeatureCard featureItems={featureData}/>
          </div>
        </div>
    </div>
  )
}

export default HomePage