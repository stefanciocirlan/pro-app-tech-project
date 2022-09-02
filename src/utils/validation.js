import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  birthYear: Yup.string()
    .required()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(4, "Must be exactly 4 digits")
    .max(4, "Must be exactly 4 digits"),
  email: Yup.string().email("Invalid email").required("Required"),
});