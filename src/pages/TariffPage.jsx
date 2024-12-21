import { TariffInfo } from "../constants";
import checkIcon from "../assets/accadionIcons/check.png";
import { useQuery } from "@tanstack/react-query";
import { getTariffAsync } from "../api/tariff";

const TariffPage = () => {
  const { data, isPending } = useQuery({
    queryKey: ["tariff"],
    queryFn: getTariffAsync,
  });
  if (isPending) {
    return "loading";
  }
  console.log(data);

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-5xl font-bold py-10">Тарифы</h1>
      <div className="grid grid-cols-3 gap-4">
        {data.map((tariff) => (
          <div
            key={tariff.id}
            className="bg-gray-200 rounded-xl p-6   flex items-center justify-between flex-col gap-4"
          >
            <h1 className="text-4xl font-semibold flex items-center justify-center">
              {tariff.tariff_category}
            </h1>
            <div className="">
              <span className="text-3xl font-bold text-lime-500">
                {tariff.price}
              </span>
              <span className="text-gray-500 font-semibold ">
                / {tariff.deadline}
              </span>
            </div>
            <p className="text-gray-500 font-semibold py-4 px-6  ">
              {tariff.description}
            </p>
            <div className="">
              <div className="flex pb-4 text-black font-semibold text-2xl">
                {" "}
                <img src={checkIcon} alt="" className="pr-4 " />{" "}
                {tariff.request_display}
              </div>
              <div className="flex pb-4 text-gray-500 font-semibold pr-4 text-2xl">
                {" "}
                <img
                  src={checkIcon}
                  alt=""
                  className="pr-4 object-contain"
                />{" "}
                {tariff.services_display}
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
