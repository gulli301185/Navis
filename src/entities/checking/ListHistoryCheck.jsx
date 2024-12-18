import { useNavigate } from "react-router";
import searchIcon from "../../assets/accadionIcons/Vector.png";
import showIcon from "../../assets/cardIcon/FrameIcon.png";
import { historyData } from "../../constants";

const ListHistoryCheck = () => {
  const navigate = useNavigate();

  const showDetailHandler = (address) => {
    console.log(address);

    navigate("/result", { state: { address } });
  };
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
      <table className=" ">
        <thead className=" text-lg font-bold  my-10 border-gray-900 py-10 ">
          <tr className="text-left border-b-2 border-gray-500">
            <th className="py-5">Адрес кошелька</th>
            <th>Дата и время</th>
            <th>Результат</th>
            <th>Детали</th>
          </tr>
        </thead>
        <tbody className="">
          {historyData.map((data) => (
            <tr key={data.id} className="  bg-white border-t ">
              <td className="py-6 ">{data.address}</td>
              <td>{data.date}</td>
              <td>{data.result}</td>
              <td>
                <button
                  onClick={() => showDetailHandler(data.address)}
                  className="text-red-500 px-6 border-red-300 border-2 rounded-xl  gap-2 flex items-center justify-center mt-3"
                >
                  Детали <img src={showIcon} alt="" className="" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListHistoryCheck;
