import { useParams } from "react-router";
import arrowIcon from "../../assets/accadionIcons/arrows.png";
import domenIcon from "../../assets/bitcoinIcons/BitcoinIcon.svg";
import { useQuery } from "@tanstack/react-query";
import { getIntegrationDetailAsync } from "../../api/integration";

const ServiceDetail = () => {
  const { id } = useParams();

  const { data } = useQuery({
    queryKey: ["serviseDetail"],
    queryFn: () => getIntegrationDetailAsync(id),
  });
  console.log(data);

  return (
    <div className="container mx-auto py-10">
      <div className="flex gap-5 items-center ">
        <img src={arrowIcon} alt="" />
        <h1 className="text-3xl font-semibold">
          Детали сервиса {data.identifier}
        </h1>
      </div>
      <div className="bg-pink-300 rounded-2xl p-5">
        <div className="flex justify-between w-full">
          <div className="text-red-600 flex gap-4 text-3xl w-full items-center">
            <img src={domenIcon} alt="" />
            <h2>Домен не потвержден! </h2>
          </div>
          <button className="py-4 px-10 max-w-full bg-red-500 rounded-xl text-white">
            Потвердить снова
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
