import { PriceInfo } from "../constants";

const Price = () => {
  return (
    <div className="container mx-auto flex gap-10 flex-col py-20">
      <h1 className="text-5xl font-semibold text-center">
        Безопасность — Ваш Лучший Инвестор!
      </h1>
      <p className="text-xl text-center text-gray-500">
        Доступные Цены на Проверку Криптоадресов!
      </p>
      <div className="grid grid-cols-2 container gap-4 ">
        {PriceInfo.map((priceItem) => (
          <div
            key={priceItem.id}
            className="bg-gray-100 rounded-xl p-5 flex flex-col gap-6 hover:bg-black group"
          >
            <div className="flex justify-between ">
              <div>
                <h1 className="text-2xl font-semibold group-hover:text-white">
                  {priceItem.topic}
                </h1>
                <p className="text-gray-500 w-1/2 ">{priceItem.text}</p>
              </div>
              <div>
                <h1 className="text-5xl font-bold text-end group-hover:text-white">
                  {priceItem.count}
                </h1>
                <p className="text-gray-500 ">{priceItem.check}</p>
              </div>
            </div>
            <div className="flex gap-16  ">
              <div className="font-bold text-lg flex flex-col gap-4  ">
                <div className="flex gap-2">
                  <img src={priceItem.img} alt="" />
                  <p className="leading-tight group-hover:text-gray-600">
                    {priceItem.checking}
                  </p>
                </div>
                <div className="flex gap-2 items-center ">
                  <img src={priceItem.img} alt="" />
                  <p className="leading-tight group-hover:text-gray-600">
                    {priceItem.blockchein}
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <img src={priceItem.img} alt="" />
                  <p className="leading-tight group-hover:text-gray-600">
                    {priceItem.monotoring}
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <img src={priceItem.img} alt="" />
                  <p className="leading-tight group-hover:text-gray-600">
                    {priceItem.balance}
                  </p>
                </div>
              </div>
              <div className=" flex flex-col gap-4 ">
                <div className="flex gap-2">
                  <img src={priceItem.img} alt="" />
                  <p className="group-hover:text-gray-600">
                    {priceItem.service}
                  </p>
                </div>
                <div className="flex gap-2 items-center ">
                  <img src={priceItem.img} alt="" />
                  <p className="group-hover:text-gray-600">
                    {priceItem.sanksyi}
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <img src={priceItem.img} alt="" />
                  <p className="group-hover:text-gray-600">
                    {priceItem.discount}
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <img src={priceItem.img} alt="" />
                  <p className="group-hover:text-gray-600">
                    {priceItem.program}
                  </p>
                </div>
              </div>
            </div>
            <button className="bg-orange-600 rounded-xl py-3 group-hover:bg-gradient-to-tr from-green-600 to-orange-500">
              Проверить
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Price;
