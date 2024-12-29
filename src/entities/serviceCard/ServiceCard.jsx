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
    <div className="container mx-auto pt-">
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
