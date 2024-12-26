import closeIcon from "../../assets/accadionIcons/close.png";
import ProtectedProfile from "./ProtectedProfile";
import Settings from "./Settings";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getProfileAsync, patchProfileAsync } from "../../api/profil";
import { useState } from "react";
import { useFormik } from "formik";
import { toast, ToastContainer } from "react-toastify";

const Profile = () => {
  const [changeData, setChangeData] = useState(false);
  const changeHandle = () => {
    setChangeData(!changeData);
  };

  const { data } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfileAsync,
  });

  const patchUserProfileMutation = useMutation({
    mutationFn: patchProfileAsync,
    onSuccess: (token) => {
      console.log(token);

      setChangeData(false);
      localStorage.setItem("token", JSON.stringify(token));
      toast("Данные успешно обновлены");
    },
    onError: () => {},
  });

  const formik = useFormik({
    initialValues: data || {
      full_name: data?.full_name || "",
      email: data?.email || "",
      is_two_factor_enabled: data?.is_two_factor_enabled || "",
    },
    enableReinitialize: true,
    onSubmit: (newValue) => {
      patchUserProfileMutation.mutate(newValue);
    },
  });

  const closeModal = () => {
    console.log("Закрыть модалку");
    setChangeData(false);
  };
  return (
    <div className="container mx-auto h-full my-10">
      <h1 className="text-5xl pb-5 p font-bold ">Профиль</h1>
      <div className=" rounded-2xl flex flex-col gap-2 h-full">
        <div className="grid grid-cols-2 gap-2 ">
          <div className="bg-gray-100 rounded-2xl w-full min-h-full ">
            <h1 className="font-bold text-2xl p-5">Личные данные</h1>
            <div className="bg-white rounded-2xl mx-5 mb-5 max-h-full p-5">
              <div className="pb-5">
                <label htmlFor="" className=" text-gray-400 pl- ">
                  ФИО:
                </label>
                <input
                  value={data?.full_name}
                  className="py-4 px-4 bg-gray-200 rounded-xl w-full"
                />
              </div>
              <div>
                <label htmlFor="" className="pl-3 text-gray-400">
                  Электронная почта:
                </label>
                <input
                  value={data?.email}
                  className="py-4 px-4 bg-gray-200 rounded-xl w-full"
                />
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
          <Settings />
        </div>
        <ProtectedProfile data={data} />
        {changeData && (
          <form
            onSubmit={formik.handleSubmit}
            className="fixed inset-0 bg-gray-500 bg-opacity-50 z-50 flex justify-center items-center"
          >
            <div
              className="bg-white p-8 rounded-2xl w-[500px] shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex mx-auto justify-end p-5">
                <h2 className="text-2xl font-bold px-8">
                  Изменить личные данные
                </h2>
                <img
                  src={closeIcon}
                  alt="Закрыть"
                  className="object-contain pt-2 cursor-pointer"
                  onClick={closeModal}
                />
              </div>
              <div className="mb-8">
                <label htmlFor="full_name" className="block text-black mb-2">
                  ФИО:
                </label>
                <input
                  name="full_name"
                  onChange={formik.handleChange}
                  value={formik.values.full_name}
                  className="bg-slate-200 text-black w-full rounded-xl py-3 pl-4"
                  autoFocus
                />
              </div>
              <div className="mb-8">
                <label htmlFor="email" className="block text-black mb-2">
                  Электронная почта:
                </label>
                <input
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  className="bg-slate-200 text-black w-full rounded-xl py-3 pl-4"
                />
              </div>
              <button
                type="submit"
                className="w-full border-2 rounded-md py-3 bg-gradient-to-r from-red-500 to-orange-600 text-white mx-auto flex items-center justify-center"
              >
                Сохранить изменения
              </button>
            </div>
          </form>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Profile;
