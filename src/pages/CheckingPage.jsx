import { useQuery } from "@tanstack/react-query";
import { Blockchein } from "../constants";
import { getBlockcheinAsync } from "../api/blockchein";
import HistoryCheck from "../entities/checking/HistoryCheck";
// import HistoryCheck from "../entities/checking/HistoryCheck";
// import ListHistoryCheck from "../entities/checking/ListHistoryCheck";

const CheckingPage = () => {
  const { data } = useQuery({
    queryKey: ["blockchein"],
    queryFn: getBlockcheinAsync,
  });

  console.log(data);

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-5xl font-bold py-6">Проверка AML</h1>
      <div className="flex flex-col gap-6">
        <div className="bg-gray-100 rounded-2xl p-4 flex flex-col justify-between gap-10">
          <div>
            <h1 className="text-black text-2xl font-semibold pb-4 pl-2">
              {" "}
              1. Введите адрес/транзакцию
            </h1>
            <input
              type="text"
              placeholder="Введите адрес/транзакцию"
              className="w-full py-4 rounded-xl pl-4 font-semibold "
            />
          </div>
          <div>
            <h1 className="text-black text-2xl font-semibold pb-4 pl-2">
              2. Укажите блокчейн
            </h1>
            <div className="grid grid-cols-3 gap-5">
              {data?.map((chain) => (
                <div
                  key={chain.id}
                  className="flex  justify-center bg-white rounded-xl px-16 py-6"
                >
                  <img
                    src={chain.logo}
                    alt=""
                    width="30px"
                    className="object-contain"
                  />
                  <p className="px-4 font-semibold text-gray-700 text-xl">
                    {chain.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <button className="bg-gradient-to-r from-red-600 to-orange-700 w-full py-3 text-xl rounded-xl text-white">
            Проверить
          </button>
        </div>
        <HistoryCheck />
      </div>
    </div>
  );
};

export default CheckingPage;
