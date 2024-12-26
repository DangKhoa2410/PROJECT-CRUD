import { Link } from "react-router-dom";
import Form from "../../components/Form";
import { ILoginForm } from "../../interfaces/form";
import { postData } from "../../script/services/authApi";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
const LoginForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('')

  const handleLogin = async (data: ILoginForm) => {
    try {
      await postData(`/login`, data);
      return navigate('/HomePage');
    } catch (e) {
      setError((e as Error).message)
    }

  };


  const loginFields = ['email', 'password'];

  return (
    <div className="bg-custom-gradient flex items-center justify-center h-screen">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl ">
        <h2 className="text-2xl font-bold text-center text-black uppercase">
          <span className="text-yellow">|</span> crud operations
        </h2>

        <div className="my-11">
          <h3 className="text-center text-lg uppercase text-black font-bold">sign up</h3>
          <p className="mt-2 text-center text-gray">Enter your credentials to access your account</p>
        </div>

        <Form error={error} onSubmit={handleLogin} fields={loginFields} />

        <div className="text-center">
          <Link to='/Register'>Don't have an account yet?</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
