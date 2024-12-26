import bitcoinIcon from "../../assets/bitcoinIcons/BitcoinIcon.svg";
import Wallet from "../../assets/cardIcon/Wallet.svg";
import FrameCard from "../../assets/cardIcon/Frame 7.svg";
import ComponentIcon from "../../shared/icons/ComponentIcon";

const MainProduct = () => {
  return (
    <div className="text-center flex justify-center pt-[51px]  flex-col items-center container mx-auto">
      <h1 className=" md:text-[64px] text-[54px] leading-tight font-semibold text-black container mx-auto">
        Комплексный комплаенс <br /> продукт для крипто бизнеса
      </h1>
      <p className="w-[434px] py-[24px] text-lg text-gray-500 leading-tight">
        AMLBot автоматизирует AML / KYC процедуры и снижает расходы на
        соблюдение требований законодательства
      </p>
      <div className="  grid grid-cols-5 gap-2">
        <div className="text-start flex flex-col justify-between py-10 gap-10 px-7 bg-gradient-to-r from-red-700 to-orange-700 rounded-2xl w-full">
          <img src={bitcoinIcon} width="60px" height="60px" alt="cardIcon" />
          <p className="text-[22px] text-white">
            AMLnavis автоматизирует AML / KYC процедуры и снижает расходы на
            соблюдение требований законодательства
          </p>
        </div>{" "}
        <div className="bg-gray-100  rounded-lg mt-32 mx-2">
          <div className="justify-center flex    flex-col py-16 px-4">
            <h1 className=" text-[40px] font-bold uppercase ">+$10k</h1>
            <p className="text-[16px] font-sans">
              обнаруженных рискованных активов
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between  ">
          <button className="bg-gradient-to-r from-red-600 to-orange-500 mt-3 py-3 px-6 rounded-xl flex items-center justify-center text-white ">
            Получить демо
          </button>
          <img src={Wallet} alt="" width="100%" />
        </div>
        <div className="bg-green-200  rounded-lg mt-28 mx-2">
          <div className="justify-center flex items-center   flex-col py-16 px-20 ">
            <h1 className=" text-[40px] font-bold uppercase ">+8k</h1>
            <p className="text-[16px] font-sans">провайдеров проверено</p>
          </div>
        </div>
        <div className="min-h-full ">
          <div className="bg-green-600 p-4 rounded-full absolute ml-[160px] top-[380px]">
            <ComponentIcon
              fill="inherit"
              stroke="inherit"
              paths={{ stroke: "inherit" }}
            />
          </div>
          <img
            src={FrameCard}
            className="object-cover min-h-full rounded-2xl"
            alt="*"
          />
        </div>
      </div>
    </div>
  );
};

export default MainProduct;
