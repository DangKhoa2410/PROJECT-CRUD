import Input from "../Input";
import { useState } from "react";


const Form = () => {
  const [name, setLocalName] = useState(false)


  return (
        <form>
         { name && <div>
            <label>firstName</label>
            <Input placeholder="Enter your firstName" className="mt-2 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 "/>
          </div> }

         { name && <div className="mt-2">
            <label>lastName</label>
            <Input type="email" placeholder="Enter your LastName" className="mt-2 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 "/>
          </div>}

          <div className="mt-2">
            <label>email</label>
            <Input type="email" placeholder="Enter your email" className="mt-2 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 "/>
          </div>

          <div className="mt-2">
            <label>password</label>
            <Input type="password" placeholder="Enter your password" className="mt-2 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 "/>
          </div>

          <Input type="submit" className="my-3 uppercase w-full py-2 text-white bg-yellow-dark rounded-md focus:outline-none"/>
        </form>
  );
};

export default Form;
