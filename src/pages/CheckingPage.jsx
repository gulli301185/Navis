import { Blockchein } from "../constants";
import HistoryCheck from "../entities/checking/HistoryCheck";
import ListHistoryCheck from "../entities/checking/ListHistoryCheck";

const CheckingPage = () => {
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
            <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-2">
              {Blockchein.map((chein) => (
                <div
                  key={chein.id}
                  className="flex  justify-center bg-white rounded-xl px-16 py-6"
                >
                  <img src={chein.logo} alt="" className="object-contain" />
                  <p className="px-4 font-semibold text-gray-700 text-xl">
                    {chein.text}
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
        <ListHistoryCheck />
      </div>
    </div>
  );
};

export default CheckingPage;
