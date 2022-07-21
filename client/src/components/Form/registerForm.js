import * as yup from "yup";
import { useMyForm } from "./Index";

const registrationSchema = yup
  .object({
    email: yup.string().email(),
    password: yup.string().min(8).max(20).required(),
    loggedOn: yup.date().default(() => new Date()),
  })
  .required();

export const fieldsControllers = [
  {
    name: "username",
    rules: { required: true, maxLength: 20, minLength: 5 },
    type: "text",
    errorMessage: null,
  },
  {
    name: "password",
    type: "password",
    rules: null,
    errorMessage: null,
  },
  {
    name: "email",
    type: "email",
    rules: null,
    errorMessage: null,
  },
];

export const useRegisterForm = () =>
  useMyForm({
    schema: registrationSchema,
    defaultValues: { username: "", password: "", email: "" },
  });
