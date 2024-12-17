import { TariffInfo } from "../constants";
import checkIcon from "../assets/accadionIcons/check.png";

const TariffPage = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-5xl font-bold py-10">Тарифы</h1>
      <div className="grid grid-cols-4 gap-4">
        {TariffInfo.map((tariff) => (
          <div
            key={tariff.id}
            className="bg-gray-200 rounded-xl p-6   flex items-center justify-between flex-col gap-7"
          >
            <h1 className="text-4xl font-semibold flex items-center justify-center">
              {tariff.topic}
            </h1>
            <div className="">
              <span className="text-5xl font-bold text-lime-500">
                {tariff.tariff}
              </span>
              <span className="text-gray-500 font-semibold ">
                {tariff.timing}
              </span>
              <p className="text-gray-500 font-semibold py-4">
                {tariff.checking}
              </p>
            </div>
            <div className="">
              <div className="flex pb-4 text-black font-semibold ">
                {" "}
                <img src={checkIcon} alt="" className="pr-4" />{" "}
                {tariff.countity}
              </div>
              <div className="flex pb-4 text-gray-500 font-semibold pr-4">
                {" "}
                <img
                  src={checkIcon}
                  alt=""
                  className="pr-4 object-contain"
                />{" "}
                {tariff.info}
              </div>
            </div>
            <button className="bg-gradient-to-r from-red-600 to-orange-700 w-full py-3 rounded-xl text-white">
              Получить
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TariffPage;
