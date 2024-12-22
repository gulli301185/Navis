import NoteIcon from "../../assets/accadionIcons/ic_notifications_none_48px.png";
import toggleIcon from "../../assets/accadionIcons/toogles.png";
import logoutIcon from "../../assets/accadionIcons/logout.png";
import { useMutation } from "@tanstack/react-query";
import {
  deleteDeletedAccountAsync,
  postLogoutAsync,
} from "../../api/deletedAccount";

const Settings = () => {
  const deleteDeletedAccount = useMutation({
    mutationFn: deleteDeletedAccountAsync,
    onSuccess: () => {},
    onError: () => {},
  });
  const logoutAccount = useMutation({
    mutationFn: postLogoutAsync,
    onSuccess: () => {},
    onError: () => {},
  });

  const deleteAccountHandler = () => {
    deleteDeletedAccount.mutate();
  };
  const logoutHandler = () => {
    logoutAccount.mutate();
  };
  return (
    <div>
      <div className="bg-gray-100 rounded-2xl w-full min-h-full ">
        <h1 className="font-bold text-2xl p-5">Настройки</h1>
        <div className=" rounded-2xl mx-5 mb-5 max-h-full flex flex-col gap-4 ">
          <div className=" bg-white  rounded-xl py-7 flex justify-between">
            <div className="flex cursor-pointer">
              <img
                src={NoteIcon}
                alt=""
                className="px-2 font-semibold text-lg text-black"
              />
              Уведомление
            </div>
            <img src={toggleIcon} alt="" className="object-contain pr-2" />
          </div>
          <div
            onClick={logoutHandler}
            className=" bg-white  rounded-xl py-7 flex cursor-pointer"
          >
            <img src={logoutIcon} alt="" className="px-3" />
            Выйти с аккаунта
          </div>
          <div
            onClick={deleteAccountHandler}
            className=" bg-white  rounded-xl py-7 flex cursor-pointer"
          >
            <img src={logoutIcon} alt="" className="px-3" />
            Удалить аккаунт
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
