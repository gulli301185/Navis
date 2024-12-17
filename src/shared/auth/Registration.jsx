import { useState } from "react";
import authBanner from "../../assets/bitcoinBanner/authBanner.png";
import mainLogo from "../../assets/headerIcons/Union.svg";

import showIcon from "../../assets/accadionIcons/showIcon.png";
import { Link } from "react-router";

export const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <div className="container flex mx-auto py-8 gap-4 h-full w-full">
      <div className="w-full h-full">
        <img src={authBanner} alt="" />
      </div>
      <div className="flex flex-col items-center justify-between  w-full">
        <div className="flex justify-between flex-col h-full">
          <div className="text-xl font-bold mx-auto">
            <img src={mainLogo} alt="" className="py-3" />
            AMLnavis
          </div>
          <h1 className="pt-3 text-xl md:text-[40px] font-bold leading-loose mx-auto">
            Создать аккаунт
          </h1>
        </div>
        <div className=" w-full p-5 relative flex flex-col gap-6">
          <div className="flex flex-col w-full gap-2">
            <label className="font-bold ">Электронная почта</label>
            <input
              type="text"
              placeholder="Электронная почта"
              className="bg-gray-100 text-gray-500 outline-none  py-3 rounded-lg pl-4"
            />
          </div>
          <div>
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
              className="absolute lg:top-[35%] md:top[30%] top-[28%] right-20 transform -translate-y-1/2 text-gray-500"
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
          </div>

          <div className="flex flex-col w-full gap-2">
            <label className="font-bold ">Повторите пароль</label>
            <input
              type="password"
              placeholder="Повторите пароль"
              className="bg-gray-100 text-gray-500 outline-none  py-3 rounded-lg pl-4"
            />
          </div>
          <button
            onClick={togglePasswordVisibility}
            className="absolute lg:top-[55%] md:top[48%] top-[45%] right-20 transform -translate-y-1/2 text-gray-500"
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
          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              className="min-w-6 min-h-6 rounded-xl text-gray-600 "
            />
            <p className="text-gray-500 leading-tight">
              Нажимая на кнопку «Отправить заявку», я принимаю условия{" "}
              <div className="text-red-600">Пользовательского соглашения</div>
            </p>
          </div>
          <button className=" bg-orange-600 outline-none text-white items-center justify-center flex rounded-lg py-3">
            Создать аккаунт
          </button>
          <div className="text-gray-500 flex justify-center ">
            У вас уже есть аккаунт ?{" "}
            <Link
              to="/personal"
              className="text-red-600 ml-2 border-b-2 border-red-600 font-bold"
            >
              Войти{" "}
            </Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
