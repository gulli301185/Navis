import CapaIcon from "../../assets/bitcoinLogo/Capa_1.png";
import searchIcon from "../../assets/accadionIcons/Vector.png";
import { useQuery } from "@tanstack/react-query";
import { getHistoryCheckaddressAsync } from "../../api/historyCheckAddress";
import ListHistoryCheck from "./ListHistoryCheck";

const HistoryCheck = () => {
  const { data } = useQuery({
    queryKey: ["history"],
    queryFn: getHistoryCheckaddressAsync,
  });
  console.log(data);

  return (
    <div className="w-full rounded-2xl bg-gray-100 p-5 flex flex-col gap-10">
      <div className="lg:flex lg:justify-between  flex-col lg:flex-row mx-auto lg:mx-0">
        <h1 className="lg:text-3xl text-xl font-semibold">История проверок</h1>
        <div className="lg:flex gap-4 ">
          <div className="relative">
            <input
              type="search"
              placeholder="Поиск по адресу / txn "
              className="px-10 py-3 pr-6 rounded-xl m-5 lg:m-0"
            />
            <img
              src={searchIcon}
              alt=""
              className="absolute top-1/3 translate-x-7 lg:top-1/3 lg:translate-x-3 "
            />
          </div>
          <input type="date" className="px-10 py-3 rounded-xl m-5 lg:m-0" />
        </div>
      </div>
      {!data ? (
        <div className="text-center items-center flex flex-col lg:px-80 py-10 gap-3">
          <img src={CapaIcon} alt="" />
          <p className="font-bold">Здесь будет история ваших чеков</p>
          <p className="text-gray-500 px-2">
            Проверьте адреса на наличие «грязных» денег. Защититесь от
            мошенников, мошенничества и украденных токенов
          </p>
        </div>
      ) : (
        <ListHistoryCheck data={data} />
      )}
    </div>
  );
};

export default HistoryCheck;
