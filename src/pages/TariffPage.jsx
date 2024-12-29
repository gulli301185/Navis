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

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-5xl font-bold py-10">Тарифы</h1>
      <div className="grid grid-cols-3 gap-2">
        {data.map((tariff) => (
          <div
            key={tariff.id}
            className="bg-gray-200 rounded-xl px-3 py-4   flex items-center justify-between flex-col gap-2"
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
            <p
              className="text-gray-500 font-semibold py-2 px-3  "
              dangerouslySetInnerHTML={{ __html: tariff.description }}
            />

            <div className="">
              <div className="flex pb-2 text-black font-semibold text-xl">
                {" "}
                <img src={checkIcon} alt="" className="pr-2 " />{" "}
                {tariff.request_display}
              </div>
              <div className="flex pb-4 text-gray-500 font-semibold pr-2 text-xl">
                {" "}
                <img
                  src={checkIcon}
                  alt=""
                  className="pr-2 object-contain"
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
