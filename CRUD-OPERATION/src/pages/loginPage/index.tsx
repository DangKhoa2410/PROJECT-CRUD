import { Link, useNavigate } from "react-router-dom";
import Form from "../../components/Form";
import { ILoginForm } from "../../interfaces/form";
import { postData } from "../../script/services/authApi";
import { useState } from "react";

const LoginForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleLogin = async (data: ILoginForm) => {
    try {
      const response = await postData(`/users/login`, data);
      console.log("Response from server:", response);

      if (!response || typeof response !== "object") {
        throw new Error("No response or invalid format");
      }

      const { accessToken, fullName, role, email } = response;

      if (!accessToken || !fullName || !role) {
        throw new Error("Invalid response format");
      }

      // 👉 Lưu vào localStorage
      localStorage.setItem("token", accessToken);
      localStorage.setItem("role", role);
      localStorage.setItem("fullName", fullName);
      localStorage.setItem("email", email);

      navigate(role === "admin" ? "/admin" : "/HomePage");
    } catch (e) {
      console.error("Login error:", e);
      setError("Invalid email or password");
    }
  };
  
  const loginFields = ["email", "password"];

  return (
    <div className="bg-custom-gradient flex items-center justify-center h-screen">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl ">
        <h2 className="text-2xl font-bold text-center text-black uppercase">
          <span className="text-yellow">|</span> CRUD Operations
        </h2>

        <div className="my-11">
          <h3 className="text-center text-lg uppercase text-black font-bold">Sign In</h3>
          <p className="mt-2 text-center text-gray">Enter your credentials to access your account</p>
        </div>

        <Form error={error} onSubmit={handleLogin} fields={loginFields} />

        <div className="text-center">
          <Link to="/Register">Don't have an account yet?</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
