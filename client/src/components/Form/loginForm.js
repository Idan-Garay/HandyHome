import * as yup from "yup";
import { useMyForm } from "./Index";

const loginSchema = yup
  .object({
    email: yup.string().email(),
    password: yup.string().min(8).max(20).required(),
    loggedOn: yup.date().default(() => new Date()),
  })
  .required();

export const fieldsControllers = [
  {
    name: "email",
    type: "email",
    rules: null,
    errorMessage: null,
  },
  {
    name: "password",
    type: "password",
    rules: null,
    errorMessage: null,
  },
];

export const useLoginForm = () =>
  useMyForm({
    schema: loginSchema,
    defaultValues: { email: "", password: "" },
  });
