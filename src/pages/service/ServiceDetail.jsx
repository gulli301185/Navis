import { useParams } from "react-router";
import arrowIcon from "../../assets/accadionIcons/arrows.png";
import domenIcon from "../../assets/bitcoinIcons/BitcoinIcon.svg";
import { useQuery } from "@tanstack/react-query";
import { getIntegrationDetailAsync } from "../../api/integration";

const ServiceDetail = () => {
  const { id } = useParams();

  const { data } = useQuery({
    queryKey: ["serviseDetail"],
    queryFn: () => getIntegrationDetailAsync(id),
  });
  console.log(data);

  return (
    <div className="container mx-auto py-10">
      <div className="flex gap-5 items-center ">
        <img src={arrowIcon} alt="" />
        <h1 className="text-3xl font-semibold">
          Детали сервиса {data.identifier}
        </h1>
      </div>
      <div className="bg-pink-300 rounded-2xl p-5">
        <div className="flex justify-between w-full">
          <div className="text-red-600 flex gap-4 text-3xl w-full items-center">
            <img src={domenIcon} alt="" />
            <h2>Домен не потвержден! </h2>
          </div>
          <button className="py-4 px-10 max-w-full bg-red-500 rounded-xl text-white">
            Потвердить снова
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;

// import { useParams } from "react-router";
// import arrowIcon from "../../assets/accadionIcons/arrows.png";
// import domenIcon from "../../assets/bitcoinIcons/BitcoinIcon.svg";
// import { useMutation, useQuery } from "@tanstack/react-query";
// import {
//   getIntegrationDetailAsync,
//   postModerationAsync,
// } from "../../api/integration";
// import { Button, NativeSelect, TextInput, rem } from "@mantine/core";
// import { IconChevronDown } from "@tabler/icons-react";
// import { useFormik } from "formik";

// const ServiceDetail = () => {
//   const { id } = useParams();

//   const { data } = useQuery({
//     queryKey: ["serviseDetail", id],
//     queryFn: () => getIntegrationDetailAsync(id),
//   });

//   const moderationMutate = useMutation({
//     mutationFn: postModerationAsync,
//     onSuccess: () => {
//       console.log("Модерация прошла успешно!");
//     },
//     onError: () => {
//       console.log("Ошибка при модерации!");
//     },
//   });

//   const formik = useFormik({
//     initialValues: {
//       id: "",
//       nameBitcoin: "",
//       secretKey: "",
//       comission: "",
//       domain: "",
//       doubleKey: "",
//     },
//     onSubmit: () => {},
//   });

//   const postModeration = () => {
//     moderationMutate.mutate(id);
//   };

//   return (
//     <div className="container mx-auto py-10">
//       <div className="flex gap-5 items-center">
//         <img src={arrowIcon} alt="Arrow icon" />
//         <h1 className="text-3xl font-semibold">
//           Детали сервиса {data?.identifier}
//         </h1>
//       </div>
//       <div className="bg-pink-300 rounded-2xl p-5">
//         <div className="flex justify-between w-full">
//           <div className="text-red-600 flex gap-4 text-3xl w-full items-center">
//             <img src={domenIcon} alt="Bitcoin icon" />
//             {data?.is_confirmed ? (
//               data?.is_verified ? (
//                 <h2>Успешно прошло!</h2>
//               ) : (
//                 <h2>Модерация не прошла!</h2>
//               )
//             ) : (
//               <h2>Домен не подтвержден!</h2>
//             )}
//           </div>
//           <Button
//             color="red"
//             w="280px"
//             h="50px"
//             styles={{
//               button: {
//                 backgroundColor: "#f7f7f7",
//                 color: "#6b7280",
//                 padding: "75px",
//                 borderRadius: "8px",
//                 border: "none",
//                 fontSize: "14px",
//               },
//             }}
//             type="button"
//             onClick={postModeration}
//           >
//             {moderationMutate.error
//               ? " Потвердить снова"
//               : "Отправить на модерацию"}
//           </Button>
//         </div>
//         {moderationMutate.error ? (
//           <ul className="list-disc p-5 text-xl">
//             <li>Скачать payeer_2079113746.txt</li>
//             <li>
//               Разместите в корне сайта:{" "}
//               <span className="border-b-2 border-black">{data?.domain}</span>
//             </li>
//             <li>Нажмите кнопку “Подтвердить”</li>
//           </ul>
//         ) : (
//           <div>
//             <div>Модерация не прошла! </div>
//             <ul>
//               <li>
//                 Причина отказа: На модерацию необходимо отправлять уже полностью
//                 готовый сайт с профессиональным дизайном, подробным описанием
//                 проекта (включая описание платных услуг и товаров), доменом
//                 второго уровня, правилами и контактами.
//               </li>
//               <li>
//                 Пока Ваш мерчант не прошел модерацию, оплату производить может
//                 только владелец кошелька. Прежде чем отправлять мерчант на
//                 модерацию, убедитесь, что Ваш веб-сайт полностью закончен и
//                 работоспособен. Проверка сайта занимает 1-3 дня. Если у Вас
//                 возникли какие-либо вопросы, пожалуйста, напишите в поддержку
//                 выбрав соответствующий раздел.
//               </li>
//             </ul>
//           </div>
//         )}
//       </div>
//       <form onSubmit={formik.handleSubmit} className="p-5 w-2/3">
//         <div className="grid grid-cols-2 gap-3">
//           <div>
//             <TextInput
//               styles={{
//                 input: {
//                   backgroundColor: "#f7f7f7",
//                   color: "#6b7280",
//                   padding: "25px",
//                   borderRadius: "8px",
//                   border: "none",
//                   fontSize: "14px",
//                   marginBottom: "10px",
//                 },
//               }}
//               name="id"
//               onChange={formik.handleChange}
//               value={formik.values.id}
//               label="ID"
//               placeholder="ID"
//             />
//             <TextInput
//               styles={{
//                 input: {
//                   backgroundColor: "#f7f7f7",
//                   color: "#6b7280",
//                   padding: "25px",
//                   borderRadius: "8px",
//                   border: "none",
//                   fontSize: "14px",
//                   marginBottom: "10px",
//                 },
//               }}
//               onChange={formik.handleChange}
//               name="secretKey"
//               value={formik.values.secretKey}
//               label="Секретный ключ"
//               placeholder="Секретный ключ"
//             />
//           </div>
//           <div>
//             <TextInput
//               styles={{
//                 input: {
//                   backgroundColor: "#f7f7f7",
//                   color: "#6b7280",
//                   padding: "25px",
//                   borderRadius: "8px",
//                   border: "none",
//                   fontSize: "14px",
//                   marginBottom: "10px",
//                 },
//               }}
//               onChange={formik.handleChange}
//               value={formik.values.nameBitcoin}
//               name="nameBitcoin"
//               label="Название"
//             />
//             <NativeSelect
//               styles={{
//                 input: {
//                   backgroundColor: "#f7f7f7",
//                   color: "#6b7280",
//                   padding: "25px",
//                   borderRadius: "8px",
//                   border: "none",
//                   fontSize: "14px",
//                   marginBottom: "10px",
//                 },
//               }}
//               onChange={formik.handleChange}
//               value={formik.values.comission}
//               name="comission"
//               rightSection={
//                 <IconChevronDown style={{ width: rem(16), height: rem(16) }} />
//               }
//               label="Кто платит комиссию"
//               data={["по умолчанию"]}
//               mt="md"
//             />
//           </div>
//         </div>
//         <div className="py-10 flex flex-col gap-5">
//           <TextInput
//             styles={{
//               input: {
//                 backgroundColor: "#f7f7f7",
//                 color: "#6b7280",
//                 padding: "25px",
//                 borderRadius: "8px",
//                 border: "none",
//                 fontSize: "14px",
//                 marginBottom: "10px",
//               },
//             }}
//             onChange={formik.handleChange}
//             value={formik.values.doubleKey}
//             label="Ключ для шифрования дополнительных параметров"
//             name="doubleKey"
//           />
//           <TextInput
//             styles={{
//               input: {
//                 backgroundColor: "#f7f7f7",
//                 color: "#6b7280",
//                 padding: "25px",
//                 borderRadius: "8px",
//                 border: "none",
//                 fontSize: "14px",
//                 marginBottom: "10px",
//               },
//             }}
//             onChange={formik.handleChange}
//             value={formik.values.domain}
//             label="Домен"
//             name="domain"
//           />
//           <Button type="submit" color="red" fullWidth>
//             Сохранить изменения
//           </Button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ServiceDetail;
