import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

export const registerSchema = yup
  .object({
    username: yup.string().min(5).max(20).required(),
    password: yup.string().min(8).max(20).required(),
    email: yup.string().email(),
    createdOn: yup.date().default(() => new Date()),
  })
  .required();

export const useRegisterForm = () => {
  const {
    handleSubmit,
    control,
    getValues,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
      email: "",
    },
    resolver: yupResolver(registerSchema),
  });

  return {
    handleSubmit,
    control,
    getValues,
    reset,
    formState: { errors },
  };
};
