import { Modal, PasswordInput } from "@mantine/core";
import { Switch } from "@mantine/core";
// import { useDisclosure } from "@mantine/hooks";
// import {
//   postDisabledDataAsync,
//   postEnableDataAsync,
// } from "../../api/disabledData";
// import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
// import { postChangePassword } from "../../api/changePassword";
import * as Yup from "yup";
// import { toast } from "react-toastify";

const ProtectedProfile = ({ data }) => {
  // const [opened, { open, close }] = useDisclosure(false);

  // const patchChangeMutation = useMutation({
  //   mutationFn: postChangePassword,
  //   onSuccess: () => {
  //     toast("success");
  //   },
  //   onError: () => {
  //     toast("invalid");
  //   },
  // });

  const validationSchema = Yup.object({
    password: Yup.string()
      .min(6, "Пароль должен содержать минимум 6 символов")
      .required("Пароль обязателен"),
    confirm_password: Yup.string()
      .oneOf([Yup.ref("password"), null], "Пароли не совпадают")
      .required("Повторите пароль обязателен"),
  });

  const formik = useFormik({
    initialValues: {
      password: "",
      confirm_password: "",
    },
    validationSchema,
    enableReinitialize: true,
    onSubmit: (newValue) => {
      console.log(newValue);

      //     patchChangeMutation.mutate(newValue);
    },
  });

  // console.log(formik.errors);

  // const patchDisabledDataAsync = useMutation({
  //   mutationFn: postDisabledDataAsync,
  //   onSuccess: () => {},
  // });
  // const patchEnableDataAsync = useMutation({
  //   mutationFn: postEnableDataAsync,
  //   onSuccess: () => {},
  // });

  // const disabledDatas = () => {
  //   console.log(data);

  //   const userInfo = JSON.parse(localStorage.getItem("token"));
  //   console.log(userInfo);

  //   if (data?.is_two_factor_enabled) {
  //     patchDisabledDataAsync.mutate({ opt: userInfo.opt });
  //   } else {
  //     patchEnableDataAsync.mutate({ opt: userInfo.opt });
  //   }
  // };
  return (
    <div>
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
            <Switch
              onChange={disabledDatas}
              checked={data?.is_two_factor_enabled}
              color="red"
              className="items-center flex justify-center"
            />
          </div>
          <div className=" bg-white  rounded-xl py-4 flex justify-between px-4">
            <div>
              <h1 className="font-semibold text-black text-xl">
                Сменить пароль
              </h1>
              <div>............</div>
            </div>
            <button
              onClick={open}
              className="w-[156px] text-red-600 flex  items-center border-red-600 border-2 rounded-xl font-bold justify-center"
            >
              Изменить
            </button>
          </div>
          <Modal opened={opened} onClose={close} title="Authentication">
            <form action="" onSubmit={formik.handleSubmit}>
              <PasswordInput
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
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                placeholder="password"
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
                error={
                  formik.errors.confirm_password &&
                  formik.touched.confirm_password &&
                  formik.errors.confirm_password
                }
                placeholder="confirm password"
              />
              <button
                type="submit"
                className="w-full bg-red-600 py-3 rounded-xl my-4 text-white"
              >
                отправить
              </button>
            </form>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default ProtectedProfile;
