import authBanner from "../../assets/bitcoinBanner/authBanner.png";
import mainLogo from "../../assets/headerIcons/Union.svg";
import { Link, useNavigate } from "react-router";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { postRegistrationAsync } from "../../api/registration";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PasswordInput, TextInput } from "@mantine/core";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Неверный формат электронной почты")
    .required("Электронная почта обязательна"),
  password: Yup.string()
    .min(6, "Пароль должен содержать минимум 6 символов")
    .required("Пароль обязателен"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Пароли не совпадают")
    .required("Повторите пароль обязателен"),
});

export const Registration = () => {
  const navigate = useNavigate();

  const postRegistrationQuery = useMutation({
    mutationFn: postRegistrationAsync,
    onSuccess: () => {
      toast.success("Регистрация прошла успешно!");
      navigate("/personal");
    },
    onError: (error) => {
      toast.error("Ошибка регистрации: " + error.message);
    },
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirm_password: "",
    },
    validationSchema,
    onSubmit: (newValues) => {
      console.log("Submit values:", newValues);
      postRegistrationQuery.mutate(newValues);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="container flex mx-auto py-8 gap-4 h-full w-full"
    >
      <div className="w-full h-full">
        <img src={authBanner} alt="" />
      </div>
      <div className="flex flex-col items-center justify-between w-full">
        <div className="flex justify-between flex-col h-full">
          <div className="text-xl font-bold mx-auto">
            <img src={mainLogo} alt="" className="py-3" />
            AMLnavis
          </div>
          <h1 className="pt-3 text-xl md:text-[40px] font-bold leading-loose mx-auto">
            Создать аккаунт
          </h1>
        </div>
        <div to="/personal" className="w-full p-5 flex flex-col gap-6">
          <TextInput
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
            label="Электронная почта"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            type="text"
            placeholder="Электронная почта"
            error={
              formik.errors.email && formik.touched.email && formik.errors.email
            }
          />
          <PasswordInput
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
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            label="Пароль"
            placeholder="Пароль"
            error={
              formik.errors.password &&
              formik.touched.password &&
              formik.errors.password
            }
          />
          <PasswordInput
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
            name="confirm_password"
            onChange={formik.handleChange}
            value={formik.values.confirm_password}
            label="Повторите пароль"
            placeholder="Повторите пароль"
            error={
              formik.errors.confirm_password &&
              formik.touched.confirm_password &&
              formik.errors.confirm_password
            }
          />
          <button
            type="submit"
            className="bg-orange-600 outline-none text-white items-center justify-center flex rounded-lg py-3"
          >
            Создать аккаунт
          </button>
          <div className="text-gray-500 flex justify-center ">
            Уже есть аккаунт аккаунта?
            <Link
              to="/personal"
              className="text-red-600 ml-2 border-b-2 border-red-600 font-bold"
            >
              Войти
            </Link>{" "}
          </div>
        </div>
      </div>

      <ToastContainer />
    </form>
  );
};
