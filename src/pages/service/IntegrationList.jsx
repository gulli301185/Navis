import { getIntegrationAsync } from "../../api/integration";
import { useQuery } from "@tanstack/react-query";
import CapaIcon from "../../assets/bitcoinLogo/Capa_1.png";
import showIcon from "../../assets/cardIcon/FrameIcon.png";
import checkIcon from "../../assets/accadionIcons/check.png";
import closeIcon from "../../assets/accadionIcons/close.png";
import { Link } from "react-router";

const IntegrationList = () => {
  const { data } = useQuery({
    queryKey: ["history"],
    queryFn: getIntegrationAsync,
  });
  return (
    <div className="w-full rounded-2xl bg-gray-100 p-5 flex flex-col gap-10">
      {!data ? (
        <div className="text-center items-center flex flex-col lg:px-80 py-10 gap-3">
          <img src={CapaIcon} alt="" />
          <p className="font-bold">Здесь будет история ваших чеков</p>
          <p className="text-gray-500 px-40">
            Проверьте адреса на наличие «грязных» денег. Защититесь от
            мошенников, мошенничества и украденных токенов
          </p>
        </div>
      ) : (
        <table
          className="border-spacing-"
          style={{ borderSpacing: "0 10px", borderCollapse: "separate" }}
        >
          <thead className="text-lg font-bold my-10 border-b-4 border-gray-900 ">
            <tr className="text-left   ">
              <th className="py-5">Сервис</th>
              <th>ID</th>
              <th>Потверждение</th>
              <th>Модерация</th>
              <th>Действие</th>
            </tr>
            <td colSpan={5} className="border-b-2 border-gray-300"></td>
          </thead>

          <tbody>
            {data?.map((service) => (
              <tr key={service.id} className="bg-white bg-r-2xl  shadow-lg">
                <td className="p-6 flex flex-col text-gray-500 rounded-l-2xl bg-red-00">
                  <span className="text-red-500">{service.domain}</span>
                  {service.name}
                </td>
                <td className="p-5 font-semibold ">{service.identifier}</td>
                <td className="">
                  {service.is_confirmed ? (
                    <img
                      src={checkIcon}
                      alt=""
                      className="p-2 bg-green-500 rounded-full"
                    />
                  ) : (
                    <img
                      src={closeIcon}
                      alt=""
                      className="p-3 bg-red-500 rounded-full"
                    />
                  )}
                </td>
                <td className="">
                  {service.is_verified ? (
                    <img
                      src={checkIcon}
                      alt=""
                      className="p-3 bg-green-500 rounded-full"
                    />
                  ) : (
                    <img
                      src={closeIcon}
                      alt=""
                      className="p-3 bg-red-500 rounded-full"
                    />
                  )}
                </td>
                <Link
                  to={"/secondHeader/integration/" + service.id}
                  className=" rounded-r-2xl"
                >
                  <button className="text-red-500 px-6 border-red-300 border-2 rounded-xl gap-2 flex items-center justify-center mt-3">
                    <img src={showIcon} alt="" /> Изменить
                  </button>
                </Link>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default IntegrationList;
