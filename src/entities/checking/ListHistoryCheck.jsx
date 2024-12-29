/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useNavigate } from "react-router";
import showIcon from "../../assets/cardIcon/FrameIcon.png";

const ListHistoryCheck = ({ data }) => {
  const navigate = useNavigate();

  const showDetailHandler = (address) => {
    console.log(address);

    navigate(`/checkaddress/detail/${address}${titleId}`, {
      state: { address },
    });
  };
  console.log(data);

  return (
    <div className="w-full rounded-2xl bg-gray-100 flex flex-col gap-4">
      <table
        className="border-spacing-20"
        style={{ borderSpacing: "0 10px", borderCollapse: "separate" }}
      >
        <thead>
          <tr className="text-left text-lg  font-bold  border-b-2 border-gray-500">
            <th className="py-5">Адрес кошелька</th>
            <th>Дата и время</th>
            <th>Результат</th>
            <th>Детали</th>
          </tr>
          <tr colSpan={5} className="border-b-2 border-gray-300"></tr>
        </thead>
        <tbody className="">
          {data &&
            data.map((list) => (
              <tr key={list.id} className="  bg-white border-t">
                <td className="p-6 rounded-l-2xl">{list.address}</td>
                <td>{list.date}</td>
                <td>{list.status_of_risk}</td>
                <td className="rounded-r-2xl">
                  <button
                    onClick={() => showDetailHandler(list.address)}
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
