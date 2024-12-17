import CardMain from "../../shared/card/CardMain";
import FrameIcon from "../../assets/cardIcon/FrameIcon.png";
import { ServiceData } from "../../constants";

const ServiceCard = () => {
  return (
    <div className="container mx-auto py-20">
      <h1 className="pb-[38px] text-4xl font-semibold leading-loose text-center">
        AMLnavis Услуги
      </h1>
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2">
        {ServiceData.map((card, index) => (
          <div
            key={card.id}
            className={`${
              index === ServiceData.length - 1 ? "col-span-2" : ""
            } bg-gray-100 rounded-2xl hover:bg-black group`}
          >
            <CardMain>
              <div className="flex items-center gap-5 ">
                <img
                  src={card.logo}
                  width="60px"
                  height="60px"
                  alt="cardIcon"
                />
                <h1 className="text-2xl font-semibold group-hover:text-white text-black">
                  {card.topic}
                </h1>
              </div>
              <p className="text-lg text-gray-500 text-start">{card.text}</p>
              <button className="font-semibold text-orange-600 flex items-center text-lg group-hover:text-white">
                Узнать больше! <img src={FrameIcon} alt="FrameIcon" />
              </button>
            </CardMain>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
