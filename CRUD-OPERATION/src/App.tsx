import './App.css'
import RegisForm from './pages/regisPage';
import TaskPage from './pages/taskPage'
import LoginForm from './pages/loginPage'
import { Route ,Routes } from "react-router-dom";
import HomePage from './pages/homePage/index';
import AdminPage from './pages/admin/AdminPage';
import RegisterSchedulePage  from './pages/registerSchedulePage';
const App = () => {
  return (
  <>
    <Routes>
      <Route index path="/" element={<LoginForm/>} />
      <Route path="/Register" element={<RegisForm/>} />
      <Route path="/HomePage" element={<HomePage/>} />
      <Route path="/Register-schedule" element={<RegisterSchedulePage  />} /> 
      <Route path="/TaskPage" element={<TaskPage/>}/> 
      <Route path="/admin" element={<AdminPage />} /> 
    </Routes>
  </> 
  )
}

export default App
