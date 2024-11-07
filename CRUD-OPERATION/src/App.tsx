import './App.css'
import RegisForm from './pages/regisPage';
import LoginForm from './pages/loginPage'
import { Route ,Routes } from "react-router-dom";

const App = () => {
  return (
  <>
    <Routes>
      <Route index path="/" element={<LoginForm/>} />
      <Route path="/Register" element={<RegisForm/>} />
    </Routes>
  </>
  )
}

export default App
