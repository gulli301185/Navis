import authBanner from "../../assets/bitcoinBanner/authBanner.png";
import mainLogo from "../../assets/headerIcons/Union.svg";
import { useDisclosure } from "@mantine/hooks";
import { Link, useNavigate } from "react-router";
import { useFormik } from "formik";
import { useMutation } from "@tanstack/react-query";
import { postLoginAsync } from "../../api/login";
import * as Yup from "yup";
import ModalData from "./ModalData";
import { PasswordInput, Button } from "@mantine/core";
import { toast, ToastContainer } from "react-toastify";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export const PersonalAuth = () => {
  const navigate = useNavigate();
  const [opened, { open, close }] = useDisclosure(false);

  const postLoginQuery = useMutation({
    mutationFn: postLoginAsync,
    onSuccess: (data, da) => {
      navigate("/");
      console.log(da, "da");

      localStorage.setItem("token", JSON.stringify(da));
      toast.success("Успешно зашли!");
    },
    onError: (error) => {
      toast.error("Ошибка при входе: " + error.message);
    },
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      otp: "optsff",
    },
    onSubmit: (newValues) => {
      postLoginQuery.mutate(newValues);
    },
    validationSchema: validationSchema,
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="container flex mx-auto py-8 gap-4 h-full w-full"
    >
      <div className="w-full h-full">
        <img src={authBanner} alt="Authentication banner" />
      </div>
      <div className="flex flex-col items-center w-full">
        <div className="py-6">
          <div className="text-xl font-bold mx-auto">
            <img src={mainLogo} alt="Logo" className="py-3" />
            AMLnavis
          </div>
          <h1 className="pt-6 text-xl md:text-[40px] font-bold leading-loose mx-auto">
            Войти
          </h1>
        </div>
        <div className="w-full p-5 relative flex flex-col gap-8">
          <div className="flex flex-col w-full gap-2">
            <label className="font-bold">Электронная почта</label>
            <input
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              placeholder="Электронная почта"
              className="bg-gray-100 text-gray-500 outline-none py-3 rounded-lg pl-4"
            />
          </div>
          <PasswordInput
            name="password"
            label="Пароль"
            placeholder="Введите пароль"
            onChange={formik.handleChange}
            value={formik.values.password}
            visibilityToggle
            styles={{
              input: {
                backgroundColor: "#f7f7f7",
                color: "#6b7280",
                padding: "25px",
                borderRadius: "8px",
                border: "none",
                fontSize: "14px",
              },
            }}
          />
          <div
            onClick={open}
            className="text-red-700 flex justify-end font-semibold cursor-pointer"
          >
            Забыли пароль?
          </div>
          <Button
            type="submit"
            fullWidth
            color="orange"
            className="my-3"
            loading={postLoginQuery.isLoading}
            styles={{
              input: {
                backgroundColor: "#f7f7f7",
                color: "#6b7280",
                padding: "25px",
                borderRadius: "8px",
                border: "none",
                fontSize: "14px",
                marginBottom: "10px",
              },
            }}
          >
            Войти
          </Button>
          <div className="text-gray-500 flex justify-center">
            Еще нет аккаунта?
            <Link
              to="/register"
              className="text-red-600 ml-2 border-b-2 border-red-600 font-bold"
            >
              Зарегистрироваться
            </Link>
          </div>
        </div>
      </div>

      <ModalData opened={opened} close={close} />
      <ToastContainer />
    </form>
  );
};
