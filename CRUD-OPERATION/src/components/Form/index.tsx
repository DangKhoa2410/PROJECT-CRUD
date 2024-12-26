import Input from "../Input";
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { IRegisForm } from "../../interfaces/form";
import { firstNameValidation, lastNameValidation, emailValidation, passwordValidation } from "../../utils/validationRules";

interface FormProps {
  fields: string[];
  onSubmit: SubmitHandler<IRegisForm>;
  error: string;
}
const Form = ({ fields, onSubmit, error }: FormProps) => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    }
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.includes('firstName') && (
        <div>
          <label>First Name</label>
          <Controller
            name="firstName"
            control={control}

            rules={firstNameValidation}
            render={({ field }) => (
              <>
                <Input
                  placeholder="Enter your first name"
                  className="mt-2 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2"
                  {...field}
                />
                {errors.firstName && <p className="text-red text-m">{errors.firstName.message}</p>}
              </>
            )}
          />
        </div>
      )}

      {fields.includes('lastName') && (
        <div className="mt-2">
          <label>Last Name</label>
          <Controller
            name="lastName"
            control={control}
            rules={lastNameValidation}
            render={({ field }) => (
              <>
                <Input
                  placeholder="Enter your last name"
                  className="mt-2 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2"
                  {...field}
                />
                {errors.lastName && <p className="text-red text-m">{errors.lastName.message}</p>}
              </>
            )}
          />
        </div>
      )}

      {fields.includes('email') && (
        <div className="mt-2">
          <label>Email</label>
          <Controller
            name="email"
            control={control}
            rules={emailValidation}
            render={({ field }) => (
              <>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="mt-2 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2"
                  {...field}
                />
                {errors.email && <p className="text-red text-m">{errors.email.message}</p>}
              </>
            )}
          />
        </div>
      )}

      {fields.includes('password') && (
        <div className="mt-2">
          <label>Password</label>
          <Controller
            name="password"
            control={control}
            rules={passwordValidation}
            render={({ field }) => (
              <>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  className="mt-2 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2"
                  {...field}
                />
                {errors.password && <p className="text-red text-m">{errors.password.message}</p>}
              </>
            )}
          />
        </div>
      )}

      <Input type="submit" className="my-3 uppercase w-full py-2 text-white bg-yellow-dark rounded-md focus:outline-none cursor-pointer" />
      {error && <p>{error}</p>}
    </form>
  );
}


export default Form;
