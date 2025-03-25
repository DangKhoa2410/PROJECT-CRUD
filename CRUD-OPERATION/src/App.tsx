import './App.css'
import RegisForm from './pages/regisPage';
import LoginForm from './pages/loginPage'
import { Route ,Routes } from "react-router-dom";
import HomePage from './pages/homePage/index';
import AdminPage from './pages/admin/AdminPage';
const App = () => {
  return (
  <>
    <Routes>
      <Route index path="/" element={<LoginForm/>} />
      <Route path="/Register" element={<RegisForm/>} />
      <Route path="/HomePage" element={<HomePage/>} />
      <Route path="/admin" element={<AdminPage />} /> {/* Route cho Admin */}
    </Routes>
  </> 
  )
}

export default App
