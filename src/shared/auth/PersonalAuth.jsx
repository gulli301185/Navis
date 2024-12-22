import { useState } from "react";
import authBanner from "../../assets/bitcoinBanner/authBanner.png";
import mainLogo from "../../assets/headerIcons/Union.svg";
import { useDisclosure } from "@mantine/hooks";

import showIcon from "../../assets/accadionIcons/showIcon.png";
import { Link, useNavigate } from "react-router";
import { useFormik } from "formik";
import { useMutation } from "@tanstack/react-query";
import { postLoginAsync } from "../../api/login";
import * as Yup from "yup";
import ModalData from "./ModalData";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export const PersonalAuth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [opened, { open, close }] = useDisclosure(false);

  const postLoginQuery = useMutation({
    mutationFn: postLoginAsync,
    onSuccess: (data, da) => {
      navigate("/");
      console.log(da, "da");

      localStorage.setItem("token", JSON.stringify(da));
    },
    onError: (error) => {
      console.log(error);
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

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="container flex mx-auto py-8 gap-4 h-full w-full"
    >
      <div className="w-full h-full">
        <img src={authBanner} alt="" />
      </div>
      <div className="flex flex-col items-center  w-full">
        <div className=" py-6">
          <div className="text-xl font-bold mx-auto">
            <img src={mainLogo} alt="" className="py-3" />
            AMLnavis
          </div>
          <h1 className="pt-6 text-xl md:text-[40px] font-bold leading-loose mx-auto">
            Войти
          </h1>
        </div>
        <div className=" w-full p-5 relative flex flex-col gap-8">
          <div className="flex flex-col w-full gap-2">
            <label className="font-bold ">Электронная почта</label>
            <input
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              placeholder="Электронная почта"
              className="bg-gray-100 text-gray-500 outline-none  py-3 rounded-lg pl-4"
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <label className="font-bold ">Пароль</label>
            <input
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              type="password"
              placeholder="Пароль"
              className="bg-gray-100 text-gray-500 outline-none  py-3 rounded-lg pl-4"
            />
          </div>
          <button
            onClick={togglePasswordVisibility}
            className="absolute lg:top-[42%]  top-[38%] right-12 transform -translate-y-1/2 text-gray-500"
          >
            {showPassword ? (
              <span role="img" aria-label="Hide" className="text-xl">
                👁️
              </span>
            ) : (
              <span role="img" aria-label="Show" className="text-xl">
                <img src={showIcon} alt="" />
              </span>
            )}
          </button>
          <div
            onClick={open}
            className="text-red-700 flex justify-end font-semibold"
          >
            {/* <a href="" className="border-b-2 border-red-700 text-base"> */}
            Забыли пароль ?{/* </a> */}
          </div>
          <button
            type="submit"
            className="my-3 bg-orange-700 outline-none text-white items-center justify-center flex"
          >
            Войти
          </button>
          <div className="text-gray-500 flex justify-center ">
            Еще нет аккаунта?
            <Link
              to="/register"
              className="text-red-600 ml-2 border-b-2 border-red-600 font-bold"
            >
              Зарегистрироваться
            </Link>{" "}
            <ModalData opened={opened} close={close} />
          </div>
        </div>
      </div>
    </form>
  );
};
