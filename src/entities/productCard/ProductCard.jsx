import bitcoinIcon from "../../assets/bitcoinIcons/BitcoinIcon.svg";
import Wallet from "../../assets/cardIcon/Wallet.svg";
import FrameCard from "../../assets/cardIcon/Frame 7.svg";
import Button from "../../components/ui/Button";
import ComponentIcon from "../../shared/icons/ComponentIcon";
import Client from "../client/Client";
import ServiceCard from "../serviceCard/ServiceCard";
import InfoCard from "../info/InfoCard";
import Team from "../team/Team";
import { CriptoBanner } from "../../shared/banner/CriptoBanner";
import Banner from "../../shared/banner/Banner";
import News from "../news/News";
import PopularQuestion from "../questions/PopularQuestion";

const ProductCard = () => {
  return (
    <div className="  ">
      <div className="text-center flex justify-center pt-[51px] flex-col items-center container mx-auto">
        <h1 className=" md:text-6xl text-3xl font-semibold text-black max-w-[944px] container mx-auto">
          Комплексный комплаенс продукт для крипто бизнеса
        </h1>
        <p className="w-[434px] py-[24px] text-lg text-gray-500 ">
          AMLBot автоматизирует AML / KYC процедуры и снижает расходы на
          соблюдение требований законодательства
        </p>
        <div className=" grid grid-cols-5 gap-4">
          <div className="text-start flex flex-col justify-between py-10 px-7 bg-gradient-to-r from-red-700 to-orange-700 rounded-2xl w-full">
            <img src={bitcoinIcon} width="60px" height="60px" alt="cardIcon" />
            <p className="text-[22px] text-white">
              AMLnavis автоматизирует AML / KYC процедуры и снижает расходы на
              соблюдение требований законодательства
            </p>
          </div>{" "}
          <div className="bg-gray-100  rounded-lg mt-[53%]  h-[313px] ">
            <div className="justify-center flex    flex-col py-16 px-4">
              <h1 className=" text-[40px] font-bold uppercase ">+$10k</h1>
              <p className="text-[16px] font-sans">
                обнаруженных рискованных активов
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between  ">
            <Button className="bg-gradient-to-r from-red-600 to-orange-500 mt-3 flex items-center justify-center text-white ">
              Получить демо
            </Button>
            <img src={Wallet} alt="" width="100%" />
          </div>
          <div className="bg-green-200  rounded-lg mt-[53%] h-[313px]">
            <div className="justify-center flex items-center   flex-col py-16 ">
              <h1 className=" text-[40px] font-bold uppercase ">+8k</h1>
              <p className="text-[16px] font-sans">провайдеров проверено</p>
            </div>
          </div>
          <div>
            <div className="bg-green-600 p-4 rounded-full absolute ml-48 top-[370px]">
              <ComponentIcon
                fill="inherit"
                stroke="inherit"
                path={{ stroke: "inherit" }}
              />
            </div>
            <img src={FrameCard} width="100%" alt="*" />
          </div>
        </div>
      </div>
      <div className=" w-full ">
        <Client />
      </div>
      <ServiceCard />
      <CriptoBanner />
      <InfoCard />
      <Team />
      <Banner />
      <News />
      <PopularQuestion />
    </div>
  );
};

export default ProductCard;
