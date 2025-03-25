import Header from "../../components/Header"
import Sidebar from "../../components/SideBar"
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate()

  const logOutBtn = () => {
    navigate('/')
  }

  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>

      <div className="flex-1">
        <div className="flex justify-end">
          <Header onClickLogout={logOutBtn} />
        </div>  
      </div>
    </div>
  )
}

export default HomePage