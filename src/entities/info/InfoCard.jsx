import peopleIcon from "../../assets/infoIcons/people.svg";
import kubokIcon from "../../assets/infoIcons/kubok.svg";
import likeIcon from "../../assets/infoIcons/likeIcon.png";
import starIcon from "../../assets/infoIcons/starIcon.png";
import showIcon from "../../assets/infoIcons/icon (9).svg";

const InfoCard = () => {
  return (
    <div className="container mx-auto pt-40">
      <h1 className="pb-5 font-semibold text-[40px] text-center">
        Почему AMLnavis?
      </h1>
      <div className="flex gap-4 ">
        <div className="h-full w-full bg-gray-100 rounded-lg ">
          <img src={peopleIcon} alt="" className="mx-auto py-16" />
          <div className="w-[505px] text-start mx-auto text-xl text-gray-500 pb-8">
            <h3 className="text-black font-bold text-2xl pb-5">
              Индивидуальный подход
            </h3>
            <p className="">
              AMLBot предлагает широкий спектр комплаенс-решений, адаптированных
              для каждого клиента. Мы уверены в том, что сможем удовлетворить
              ваши требования, ведь мы помогли 300+ криптовалютным организациям
              всех размеров в 25 юрисдикциях.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 h-full w-full">
          <div className=" bg-gray-100 rounded-lg ">
            <div className="w-[550px] text-start mx-auto text-xl text-gray-500 pt-8">
              <h3 className="text-black font-bold text-2xl pb-5">
                Интегрированная платформа обеспечения соответвия
              </h3>
              <p className="">
                Оценка рисков в AMLBot основана на многочисленных источниках
                данных, что обеспечивает получение наиболее достоверной
                информации в отрасли.
              </p>
              <img src={kubokIcon} alt="" className="mx-auto" />
            </div>
          </div>
          <div className=" flex w-full gap-3">
            <div className=" text-start pl-10 w-full  bg-gradient-to-bl from-orange-500 to-green-500 rounded-xl">
              <img src={likeIcon} alt="" className="py-6" />
              <h1 className=" text-[40px] font-bold uppercase text-white ">
                +8k
              </h1>
              <p className="text-[15px]  text-gray-200 pb-8 ">
                провайдеров <br />
                проверено
              </p>
            </div>
            <div className=" text-start pl-10 w-full  bg-orange-700 rounded-xl">
              <img src={starIcon} alt="" className="py-6" />
              <h1 className=" text-[40px] font-bold uppercase text-white ">
                ISO{" "}
                <div className="text-lg font-semibold leading-3">
                  сертификация
                </div>
              </h1>
              <img
                src={showIcon}
                alt=""
                className="absolute translate-x-40 -translate-y-5"
              />
              <p className="text-[15px]  text-gray-200 py-5 ">узнать больше</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
