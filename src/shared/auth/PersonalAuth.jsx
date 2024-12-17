import { useState } from "react";
import authBanner from "../../assets/bitcoinBanner/authBanner.png";
import mainLogo from "../../assets/headerIcons/Union.svg";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import showIcon from "../../assets/accadionIcons/showIcon.png";
import { Link } from "react-router";

export const PersonalAuth = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <div className="container flex mx-auto py-8 gap-4 h-full w-full">
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
              placeholder="Электронная почта"
              className="bg-gray-100 text-gray-500 outline-none  py-3 rounded-lg pl-4"
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <label className="font-bold ">Пароль</label>
            <input
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
          <div className="text-red-700 flex justify-end font-semibold">
            <a href="" className="border-b-2 border-red-700 text-base">
              Забыли пароль ?
            </a>
          </div>
          <Button className="my-3 bg-orange-700 outline-none text-white items-center justify-center flex">
            Войти
          </Button>
          <div className="text-gray-500 flex justify-center ">
            Еще нет аккаунта?
            <Link
              to="/register"
              className="text-red-600 ml-2 border-b-2 border-red-600 font-bold"
            >
              Зарегистрироваться
            </Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
