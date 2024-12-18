import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import NoteIcon from "../assets/accadionIcons/ic_notifications_none_48px.png";
import toggleIcon from "../assets/accadionIcons/toogles.png";
import logoutIcon from "../assets/accadionIcons/logout.png";
import closeIcon from "../assets/accadionIcons/close.png";
import { useState } from "react";

const Profile = ({ className, onclick, value }) => {
  const [changeData, setChangeData] = useState(false);

  const changeHandle = () => {
    setChangeData(!changeData);
  };

  const closeModal = () => {
    console.log("Закрыть модалку");
    setChangeData(false);
  };

  const saveChanges = () => {
    console.log("Сохранение изменений");
    setChangeData(false);
  };

  return (
    <div className="container mx-auto h-full my-10">
      <h1 className="text-5xl pb-5 p font-bold ">Профиль</h1>
      <div className=" rounded-2xl flex flex-col gap-2 h-full">
        <div className="flex gap-2 ">
          <div className="bg-gray-100 rounded-2xl w-full min-h-full ">
            <h1 className="font-bold text-2xl p-5">Личные данные</h1>
            <div className="bg-white rounded-2xl mx-5 mb-5 max-h-full p-5">
              <div className="pb-5">
                <label htmlFor="" className=" text-gray-400 pl-3 ">
                  ФИО:
                </label>
                <Input value="Нурзида Асанбековна" className="" />
              </div>
              <div>
                <label htmlFor="" className="pl-3 text-gray-400">
                  Электронная почта:
                </label>
                <Input value="nurziasanbekova@gmail.com" />
              </div>
              <div className="p-3">
                <button
                  className="w-full  border-2  rounded-md py-2  text-start text-red-600 flex items-center justify-center font-semibold  border-red-600"
                  onClick={changeHandle}
                >
                  Изменить
                </button>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 rounded-2xl w-full min-h-full ">
            <h1 className="font-bold text-2xl p-5">Настройки</h1>
            <div className=" rounded-2xl mx-5 mb-5 max-h-full flex flex-col gap-4 ">
              <div className=" bg-white  rounded-xl py-7 flex justify-between">
                <div className="flex">
                  <img
                    src={NoteIcon}
                    alt=""
                    className="px-2 font-semibold text-lg text-black"
                  />
                  Уведомление
                </div>
                <img src={toggleIcon} alt="" className="object-contain pr-2" />
              </div>
              <div className=" bg-white  rounded-xl py-7 flex ">
                <img src={logoutIcon} alt="" className="px-3" />
                Выйти с аккаунта
              </div>
              <div className=" bg-white  rounded-xl py-7 flex ">
                <img src={logoutIcon} alt="" className="px-3" />
                Удалить аккаунт
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 rounded-2xl w-full min-h-full ">
          <h1 className="font-bold text-2xl p-5">Безопасность</h1>
          <div className=" rounded-2xl mx-5 mb-5 max-h-full flex flex-col gap-4 ">
            <div className=" bg-white  rounded-xl py-4 flex justify-between px-4">
              <div>
                <h1 className="font-semibold text-black text-xl">API Keys</h1>
                <p className="text-gray-500">
                  Ключ доступа не установлен. Доступ через API отключен
                </p>
              </div>
              <button className="w-[156px] text-red-600 flex border-2 rounded-xl items-center border-red-600 font-bold justify-center">
                Получить ключ
              </button>
            </div>
            <div className=" bg-white  rounded-xl py-4 flex justify-between px-4">
              <div>
                <h1 className="font-semibold text-black text-lg">
                  Двухфакторная аутентификация
                </h1>
                <p className="text-gray-500">
                  Включите 2FA, чтобы повысить безопасность вашего аккаунта.
                </p>
              </div>
              <img src={toggleIcon} alt="" className="object-contain pr-2" />
            </div>
            <div className=" bg-white  rounded-xl py-4 flex justify-between px-4">
              <div>
                <h1 className="font-semibold text-black text-xl">
                  Сменить пароль
                </h1>
                <div>............</div>
              </div>
              <button className="w-[156px] text-red-600 flex  items-center border-red-600 border-2 rounded-xl font-bold justify-center">
                Изменить
              </button>
            </div>
          </div>
        </div>
        {changeData && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-50 z-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-2xl w-[500px] shadow-lg">
              <div className="flex mx-auto justify-end p-5 ">
                <h2 className="text-2xl font-bold px-8">
                  Изменить личные данные
                </h2>
                <img src={closeIcon} alt="" className="object-contain pt-2" onClick={closeModal} />
              </div>
              <div className="mb-8">
                <label htmlFor="name" className="block text-black mb-2">
                  ФИО:
                </label>
                <input
                  value="Нурзида Асанбековна"
                  className="bg-slate-200 text-black w-full rounded-xl py-3 pl-4"
                />
              </div>
              <div className="mb-8">
                <label htmlFor="email" className="block text-black mb-2">
                  Электронная почта:
                </label>
                <input
                  value="nurziasanbekova@gmail.com"
                  className="bg-slate-200 text-black w-full rounded-xl py-3 pl-4"
                />
              </div>
              <button onClick={saveChanges} className=" w-full  border-2  rounded-md py-3 bg-gradient-to-r from-red-500 to-orange-600 text-white mx-auto flex items-center justify-center">
                Сохранить изменения
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
