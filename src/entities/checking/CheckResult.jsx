import { Link, useLocation } from "react-router";
import arrowIcon from "../../assets/accadionIcons/arrows.png";
import bitkoinIcon from "../../assets/bitcoinIcons/logo (2).png";
import logo from "../../assets/bitcoinIcons/options.png";
import ReactApexChart from "react-apexcharts";
import { useState } from "react";
import { walletData } from "../../constants";

export const CheckResult = () => {
  const location = useLocation();
  const { address } = location.state || {};

  const [state, setState] = useState({
    series: [30, 10, 50, 30, 100],
    options: {
      chart: {
        type: "bar",
      },
      stroke: {
        colors: ["#fff"],
      },
      fill: {
        opacity: 0.8,
      },
      labels: [
        "Санкции 60%",
        "Category 2",
        "Category 3",
        "Category 4",
        "Category 5",
        "Category 6",
        "Category 7",
        "Category 8",
        "Category 9",
      ],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });
  const [stateBar, setStateBar] = useState({
    series: [
      {
        name: "Процент риска", // Название серии
        data: [44, 55, 67, 83, 90], // Данные для столбцов
      },
    ],
    options: {
      chart: {
        type: "bar",
      },
      plotOptions: {
        bar: {
          horizontal: true,
          endingShape: "flat",
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [
          "Category 1",
          "Category 2",
          "Category 3",
          "Category 4",
          "Category 5",
        ],
      },
      yaxis: {
        title: {
          text: "Значение (%)", // Подпись оси Y
        },
      },
      fill: {
        opacity: 0.9, // Прозрачность
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + "%"; // Форматирование данных в тултипе
          },
        },
      },
    },
  });

  return (
    <div className="container mx-auto py-10 flex flex-col gap-6">
      <Link to="/checking">
        <img src={arrowIcon} className="object-contain" />
      </Link>
      <h1 className="text-4xl font-semibold">
        Результаты проверки - {address}
      </h1>
      <div className="flex flex-col gap-4">
        {/* part-1 */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="flex py-32 bg-gray-200 rounded-xl">
              Уровень риска:
            </h1>
            <h1 className="flex py-32 bg-pink-200 rounded-xl">
              Процент риска:
            </h1>
          </div>
          <div className=" bg-pink-300 rounded-2xl">
            <ReactApexChart
              series={state.series}
              options={state.options}
              type="pie"
            />
          </div>
        </div>
        {/* part-2 */}
        <div className="p-5 bg-gray-200 rounded-2xl">
          <h1 className="flex gap-4 text-2xl font-bold py-6">
            Кошелек:{" "}
            <div className="flex gap-2 text-xl font-semibold justify-center items-center">
              <img src={bitkoinIcon} alt="" />
              Bitcoin
            </div>
          </h1>
          <div className="grid grid-cols-4 gap-4">
            {walletData.map((wallet) => (
              <div
                key={wallet.id}
                className="p-10 bg-white rounded-2xl flex flex-col gap-4 "
              >
                <div>
                  <img src={logo} alt="" />
                </div>
                <p className="text-gray-500">Текущий баланс:</p>
                <div className="text-3xl font-bold">$738</div>
              </div>
            ))}
          </div>
        </div>
        {/* part-3 */}
        <div className="p-10 bg-gray-300 rounded-2xl ">
          <h1 className="text-3xl font-bold  py-10">Транзакции по адресам:</h1>
          <div className=" grid grid-cols-2 gap-5">
            <div className="bg-white rounded-xl p-5">
              <ReactApexChart
                series={stateBar.series}
                options={stateBar.options}
                type="bar"
              />
            </div>
            <div className="bg-white rounded-xl p-5">
              <ReactApexChart
                series={stateBar.series}
                options={stateBar.options}
                type="bar"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
