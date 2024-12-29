import CardMain from "../shared/card/CardMain";
import bitcoinIcon from "../assets/bitcoinIcons/Bitcoin.png";
import mainLogo from "../assets/headerIcons/Union.svg";
import person from "../assets/serviceIcons/give.png";
import InfoCard from "../entities/info/InfoCard";

const About = () => {
  return (
    <div className="container mx-auto">
      <div className=" bg-gray-100 rounded-2xl  grid grid-cols-2 mt-10">
        <div className="bg-white m-6 flex  flex-col justify-between p-7 rounded-2xl ">
          <h1 className="p-5 leading-tight text-[64px] font-bold">
            Комплексный комплаенс продукт для{" "}
            <div className="flex text-red-600 ">
              крипто{" "}
              <img src={bitcoinIcon} alt="" className="object-contain px-6" />{" "}
            </div>
            бизнеса{" "}
          </h1>
          <p className="text-gray-500 text-lg p-5">
            Если у Вас возникли вопросы технического или финансового плана,
            напишите нам и мы поможем Вам в решении вашего вопроса. Мы отвечаем
            на вопросы в течение 15-60 минут, в зависимости от загрузки сервиса.
          </p>
        </div>
        <div className="flex items-center justify-center flex-col">
          <img src={mainLogo} alt="" width="188px" height="171px" />
          <h1 className="text-[62px] font-bold py-5">AMLnavis</h1>
        </div>
      </div>
      <div className="mx-auto py-[130px]  text-center  px-20">
        <p className="text-[40px] font-bold  text-center leading-tight pb-8">
          Онлайн оценка криптоадресов и транзакций, основана в 2019 году
          командой специалистов RegTech в соответствии с международными
          рекомендациями FATF
        </p>
        <button className="py-3 px-8 text-white bg-gradient-to-br from-red-700 to bg-orange-700 rounded-xl">
          обсудить проект
        </button>
      </div>
      <CardMain className="bg-gray-100 mx-auto grid grid-cols-2 gap-10">
        <img src={person} width="100%" alt="" />
        <div className="p-5">
          <h1 className="text-3xl font-bold ">Наша миссия</h1>
          <p className="px-5 py-5 font-semibold text-xl">
            Мы считаем, что любой успех в AMLBot обусловлен двумя вещами: нашими
            людьми и нашей культурой. <br /> Онлайн оценка криптоадресов и
            транзакций, основана в 2019 году командой специалистов RegTech в
            соответствии с международными рекомендациями FATF двумя вещами:
            нашими людьми и нашей культурой. <br /> Онлайн оценка криптоадресов
            и транзакций,{" "}
          </p>
        </div>
      </CardMain>
      <InfoCard />
    </div>
  );
};

export default About;
