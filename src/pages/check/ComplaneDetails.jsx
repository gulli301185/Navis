// import { Link } from "react-router";
// import arrowIcon from "../assets/accadionIcons/arrows.png";

// const ComplaneDetails = () => {
//   return (
//     <div className="container mx-auto py-10 flex flex-col gap-6">
//       <Link to="/check">
//         <img src={arrowIcon} className="object-contain" />
//       </Link>
//       <h1 className="text-5xl font-semibold">
//         Жалоба на подозрительный криптоадрес
//       </h1>
//       <p className="text-gray-500 whitespace-pre-line w-full ">
//         {`Если  вас есть информация o мошенническом криптоадресе, введите  ниже и добавьте любые \n имеющиеся доказательства (файлы или ссылки), чтобы помочь нам в расследовании.`}
//       </p>
//       <div className="w-[660px] flex flex-col gap-5">
//         <div className="bg-gray-100 rounded-xl p-5 flex flex-col gap-5">
//           <h1 className="text-2xl font-semibold">
//             1. Данные подозрительного адреса
//           </h1>
//           <div className="mb-8">
//             <label htmlFor="name" className="block text-black mb-2">
//               Адрес подозрительного кошелька
//             </label>
//             <input
//               placeholder="Адрес подозрительного кошелька"
//               className="rounded-xl py-5 text-black w-full bg-white pl-4"
//             />
//           </div>
//           <div className="mb-8">
//             <label htmlFor="name" className="block text-black mb-2">
//               Категория нелегальности
//             </label>
//             <input
//               placeholder="Например: обман, кража"
//               className="rounded-xl py-5 text-black w-full bg-white pl-4"
//             />
//           </div>
//           <div className="mb-8">
//             <label htmlFor="name" className="block text-black mb-2">
//               Комментарий
//             </label>
//             <textarea
//               placeholder="Опишите подробности инцидента"
//               className="rounded-xl py-5 text-black w-full bg-white pl-4 min-h-[193px] resize-none"
//             />
//           </div>
//         </div>
//         <button className=" w-full  border-2  rounded-md py-3 bg-gradient-to-r from-red-500 to-orange-600 text-white mx-auto flex items-center justify-center">
//           Пожаловаться
//         </button>
//         <button className=" w-full     border-2 border-black rounded-md py-2 font-semibold text-lg text-gray-600 mx-auto flex items-center justify-center">
//           <span className="text-3xl pb-1 pr-5">+</span> Добавить ещё один адрес
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ComplaneDetails;

import { Link } from "react-router";
import arrowIcon from "../../assets/accadionIcons/arrows.png";
import { useMutation } from "@tanstack/react-query";
import { postComplainAsync } from "../../api/complane";
import { useFormik } from "formik";

const ComplaneDetails = () => {
  const mutatation = useMutation({
    mutationFn: postComplainAsync,
    onSuccess: () => {},
    onError: () => {},
  });
  const formik = useFormik({
    initialValues: {
      address: "",
      category: "",
      text: "",
    },
    onSubmit: (newValue) => {
      mutatation.mutate(newValue);
    },
  });
  return (
    <div className="container mx-auto py-10 flex flex-col gap-6">
      <Link to="/check">
        <img src={arrowIcon} className="object-contain" />
      </Link>
      <h1 className="text-5xl font-semibold">
        Жалоба на подозрительный криптоадрес
      </h1>
      <p className="text-gray-500 whitespace-pre-line w-full ">
        {`Если  вас есть информация o мошенническом криптоадресе, введите  ниже и добавьте любые \n имеющиеся доказательства (файлы или ссылки), чтобы помочь нам в расследовании.`}
      </p>
      <form
        onSubmit={formik.handleSubmit}
        className="w-[660px] flex flex-col gap-5"
      >
        <div className="bg-gray-100 rounded-xl p-5 flex flex-col gap-5">
          <h1 className="text-2xl font-semibold">
            1. Данные подозрительного адреса
          </h1>
          <div className="mb-8">
            <label htmlFor="name" className="block text-black mb-2">
              Адрес подозрительного кошелька
            </label>
            <input
              value={formik.values.address}
              name="address"
              onChange={formik.handleChange}
              placeholder="Адрес подозрительного кошелька"
              className="rounded-xl py-5 text-black w-full bg-white pl-4"
            />
          </div>
          <div className="mb-8">
            <label htmlFor="name" className="block text-black mb-2">
              Категория нелегальности
            </label>
            <input
              value={formik.values.category}
              name="category"
              onChange={formik.handleChange}
              placeholder="Например: обман, кража"
              className="rounded-xl py-5 text-black w-full bg-white pl-4"
            />
          </div>
          <div className="mb-8">
            <label htmlFor="name" className="block text-black mb-2">
              Комментарий
            </label>
            <textarea
              value={formik.values.text}
              name="text"
              onChange={formik.handleChange}
              placeholder="Опишите подробности инцидента"
              className="rounded-xl py-5 text-black w-full bg-white pl-4 min-h-[193px] resize-none"
            />
          </div>
        </div>
        <button
          type="submit"
          className=" w-full  border-2  rounded-md py-3 bg-gradient-to-r from-red-500 to-orange-600 text-white mx-auto flex items-center justify-center"
        >
          Пожаловаться
        </button>
        <button
          type="button"
          className=" w-full     border-2 border-black rounded-md py-2 font-semibold text-lg text-gray-600 mx-auto flex items-center justify-center"
        >
          <span className="text-3xl pb-1 pr-5">+</span> Добавить ещё один адрес
        </button>
      </form>
    </div>
  );
};

export default ComplaneDetails;
