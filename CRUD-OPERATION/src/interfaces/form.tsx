export interface ILoginForm {
  email: string;
  password: string;
}

export interface IRegisForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role?: "admin" | "user";
}

export interface ApiError {
  message: string;
  status?: number;
}