export const firstNameValidation = {
  required: "First Name is required",
};

export const lastNameValidation = {
  required: "Last Name is required",
};

export const emailValidation = {
  required: "Email is required",
  pattern: {
    value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
    message: "Invalid email format",
  },
};

export const passwordValidation = {
  required: "Password is required",
  minLength: {
    value: 8,
    message: "Password must be at least 8 characters long",
  },
  pattern: {
    value: /^[A-Z][A-Za-z0-9]*$/,
    message: "Password must start with an uppercase letter",
  },
};
