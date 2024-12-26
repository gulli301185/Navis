// import CardMain from "../../shared/card/CardMain";
// import FrameIcon from "../../assets/cardIcon/FrameIcon.png";
// import { ServiceData } from "../../constants";
// import { useQuery } from "@tanstack/react-query";
// import { getServiceCardAsync } from "../../api/serviceCard";
// import { useLanguage } from "../../store/language";
// import { Link } from "react-router-dom"; // Обратите внимание, что мы используем "react-router-dom" для Link

// const ServiceCard = () => {
//   const language = useLanguage((state) => state.language);
//   const { data, isLoading, isError } = useQuery({
//     queryKey: ["services", language],
//     queryFn: () => getServiceCardAsync({ lang: language }),
//   });

//   // Логирование данных для отладки
//   console.log(data);

//   // Обработка загрузки и ошибок
//   if (isLoading) {
//     return <div>Загрузка...</div>;
//   }

//   if (isError) {
//     return <div>Ошибка при загрузке данных</div>;
//   }

//   return (
//     <div className="container mx-auto pt-40">
//       <h1 className="pb-[38px] text-4xl font-semibold leading-loose text-center">
//         AMLnavis Услуги
//       </h1>
//       <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2">
//         {data?.map((card) => (
//           <Link
//             to={`/services/detail/${card.slug}`}
//             key={card.id}
//             className="bg-gray-100 rounded-2xl hover:bg-black group"
//           >
//             <CardMain>
//               <div className="flex gap-5">
//                 <div className="w-16">
//                   <img
//                     src={card.logo}
//                     width="full"
//                     height="full"
//                     alt="cardIcon"
//                     className="object-contain"
//                   />
//                 </div>
//                 <h1 className="text-2xl font-semibold group-hover:text-white text-black p-4 w-96">
//                   {card.title}
//                 </h1>
//               </div>

//               <p className="text-lg text-gray-500 text-start">{card.text}</p>
//               {/* <div className=" flex gap-5">
//                 {Array.isArray(card?.services) && card.services.length > 0 ? (
//                   card.services.map((ser) => (
//                     <div
//                       key={ser.id}
//                       className="bg-gray-100 rounded-2xl hover:bg-black group p-5"
//                     >
//                       <div className="flex gap-5">
//                         <div className="w-16">
//                           <img
//                             src={ser.logo}
//                             width="full"
//                             height="full"
//                             alt="serviceIcon"
//                             className="object-contain"
//                           />
//                         </div>
//                         <h1 className="text-2xl font-semibold group-hover:text-white text-black p-4 w-96">
//                           {ser.title}
//                         </h1>
//                       </div>
//                       <p>{ser.description}</p>
//                     </div>
//                   ))
//                 ) : (
//                   <p>hbhbhbhhhhb</p>
//                 )}
//               </div> */}

//               <button className="font-semibold text-orange-600 flex items-center text-lg group-hover:text-white">
//                 Узнать больше! <img src={FrameIcon} alt="FrameIcon" />
//               </button>
//             </CardMain>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ServiceCard;

import FrameIcon from "../../assets/cardIcon/FrameIcon.png";
import { useQuery } from "@tanstack/react-query";
import { getServiceCardAsync } from "../../api/serviceCard";
import { useLanguage } from "../../store/language";
import { Link } from "react-router-dom";

const ServiceCard = () => {
  const language = useLanguage((state) => state.language);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["services", language],
    queryFn: () => getServiceCardAsync({ lang: language }),
  });

  console.log(data);

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (isError) {
    return <div>Ошибка при загрузке данных</div>;
  }

  return (
    <div className="container mx-auto pt-20">
      <h1 className="pb-[38px] text-4xl font-semibold leading-loose text-center">
        AMLnavis Услуги
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2">
        {data?.map((card) => (
          <Link
            to={`/services/detail/${card.slug}`}
            key={card.id}
            className="bg-gray-100 rounded-2xl hover:bg-black group"
          >
            <div className="flex  flex-col justify-between p-7 rounded-2xl">
              <div>
                <div className="w-[60px] h-[60px] bg-[#D4151C] flex justify-center align-center rounded-full">
                  <img
                    src={card.logo}
                    width="24px"
                    height="24px"
                    alt="cardIcon"
                    className="object-contain"
                  />
                </div>
                <div className="text-[26px] group-hover:text-white text-black">
                  {String(card.title).substring(0, 25)}
                </div>
              </div>

              <p className="text-[18px] text-gray-500 text-start">
                {String(card.text).substring(0, 200)}
              </p>

              <button className="font-semibold text-orange-600 flex items-center text-lg group-hover:text-white">
                Узнать больше! <img src={FrameIcon} alt="FrameIcon" />
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
