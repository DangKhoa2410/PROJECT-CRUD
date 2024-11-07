import { Link } from "react-router-dom";
import Form from "../../components/Form";


const RegisForm = () => {
  return (
    <div className="bg-custom-gradient flex items-center justify-center h-screen">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl ">
        <h2 className="text-2xl font-bold text-center text-black uppercase">
          <span className="text-yellow">|</span> crud operations
        </h2>

        <div className="my-11">
          <h3 className="text-center text-lg uppercase text-black font-bold">sign in</h3>
          <p className="mt-2 text-center text-gray">Enter your details to create a new account</p>
        </div>

        <Form />

        <div className="text-center">
          <Link to='/'>Already have an account</Link>
        </div>
      </div>
    </div>
  );
};

export default RegisForm;
