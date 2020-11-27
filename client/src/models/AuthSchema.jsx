import * as yup from "yup";

export const loginSchema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required")
    .min(3, "Username is too short")
    .max(30, "Password is too long"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password is too short")
    .max(20, "Password is too long"),
});

export const registerSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("First name is required")
    .min(2, "First name is too short")
    .max(50, "First name is too long"),
  lastName: yup
    .string()
    .required("Last name is required")
    .min(2, "Last name is too short")
    .max(50, "Last name is too long"),
  username: yup
    .string()
    .required("Username is required")
    .min(3, "Username is too short")
    .max(30, "Password is too long"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password is too short")
    .max(20, "Password is too long"),
  confirmPassword: yup
    .string()
    .required("Password is required")
    .min(6, "Password is too short")
    .max(20, "Password is too long")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
