// /* eslint-disable react/prop-types */
// // eslint-disable-next-line react/prop-types
// const ModalProfile = ({ formik, closeModal, changeData, closeIcon }) => {
//   return (
//     <div>
//       {changeData && (
//         <form
//           onSubmit={formik.handleSubmit}
//           className="fixed inset-0 bg-gray-500 bg-opacity-50 z-50 flex justify-center items-center"
//         >
//           <div
//             className="bg-white p-8 rounded-2xl w-[500px] shadow-lg"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="flex mx-auto justify-end p-5">
//               <h2 className="text-2xl font-bold px-8">
//                 Изменить личные данные
//               </h2>
//               <img
//                 src={closeIcon}
//                 alt="Закрыть"
//                 className="object-contain pt-2 cursor-pointer"
//                 onClick={closeModal}
//               />
//             </div>
//             <div className="mb-8">
//               <label htmlFor="full_name" className="block text-black mb-2">
//                 ФИО:
//               </label>
//               <input
//                 name="full_name"
//                 onChange={formik.handleChange}
//                 value={formik.values.full_name}
//                 className="bg-slate-200 text-black w-full rounded-xl py-3 pl-4"
//                 autoFocus
//               />
//             </div>
//             <div className="mb-8">
//               <label htmlFor="email" className="block text-black mb-2">
//                 Электронная почта:
//               </label>
//               <input
//                 name="email"
//                 onChange={formik.handleChange}
//                 value={formik.values.email}
//                 className="bg-slate-200 text-black w-full rounded-xl py-3 pl-4"
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full border-2 rounded-md py-3 bg-gradient-to-r from-red-500 to-orange-600 text-white mx-auto flex items-center justify-center"
//             >
//               Сохранить изменения
//             </button>
//           </div>
//         </form>
//       )}
//     </div>
//   );
// };

// export default ModalProfile;

import { Modal, TextInput } from "@mantine/core";
import { postForgotPassword } from "../../api/changePassword";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

// eslint-disable-next-line react/prop-types
const ModalData = ({ close, opened }) => {
  const validationSchema2 = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (newValues) => {
      postForgotPasswordQuery.mutate(newValues);
    },
    validationSchema: validationSchema2,
  });

  const postForgotPasswordQuery = useMutation({
    mutationFn: postForgotPassword,
    onSuccess: () => {
      toast.success("Пороль отправлен в вашу почту: ");
    },
    onError: (error) => {
      toast.error("Ошибка : " + error.message);
    },
  });
  return (
    <Modal opened={opened} onClose={close} title="Authentication">
      <form action="" onSubmit={formik.handleSubmit}>
        <TextInput
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
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder="e-mail"
          error={
            formik.errors.email && formik.touched.email && formik.errors.email
          }
        />

        <button
          type="submit"
          className="w-full bg-red-600 py-3 rounded-xl my-4 text-white"
        >
          отправить
        </button>
      </form>
    </Modal>
  );
};

export default ModalData;
