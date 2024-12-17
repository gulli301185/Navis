import { PriceInfo } from "../constants";

const Price = () => {
  return (
    <div className="container mx-auto flex gap-10 flex-col py-20">
      <h1 className="text-5xl font-semibold text-center">
        Безопасность — Ваш Лучший Инвестор!
      </h1>
      <p className="text-xl text-center">
        Доступные Цены на Проверку Криптоадресов!
      </p>
      <div className="grid grid-cols-2 container gap-2 bg-gray-500">
        {PriceInfo.map((priceItem) => (
          <div
            key={priceItem.id}
            className="bg-gray-200 rounded-xl p-5 flex flex-col gap-4"
          >
            <div className="flex justify-between bg-red-200">
              <div>
                <h1 className="text-2xl font-semibold ">{priceItem.topic}</h1>
                <p className="text-gray-500 w-1/2">{priceItem.text}</p>
              </div>
              <div>
                <h1 className="text-5xl font-bold text-end">
                  {priceItem.count}
                </h1>
                <p className="text-gray-500">{priceItem.check}</p>
              </div>
            </div>
            <div className="flex justify-between bg-pink-300 ">
              <div className=" bg-pink-600 font-semibold text-lg flex flex-col gap-2 px-4">
                <div className="flex gap-2">
                  <img src={priceItem.img} alt="" />
                  <p>{priceItem.checking}</p>
                </div>
                <div className="flex gap-2 items-center ">
                  <img src={priceItem.img} alt="" />
                  <p>{priceItem.blockchein}</p>
                </div>
                <div className="flex gap-2 items-center">
                  <img src={priceItem.img} alt="" />
                  <p>{priceItem.monotoring}</p>
                </div>
                <div className="flex gap-2 items-center">
                  <img src={priceItem.img} alt="" />
                  <p>{priceItem.balance}</p>
                </div>
              </div>
              <div className="bg-yellow-500">
                <div className="flex gap-2">
                  <img src={priceItem.img} alt="" />
                  <p>{priceItem.service}</p>
                </div>
                <div className="flex gap-2 items-center ">
                  <img src={priceItem.img} alt="" />
                  <p>{priceItem.sanksyi}</p>
                </div>
                <div className="flex gap-2 items-center">
                  <img src={priceItem.img} alt="" />
                  <p>{priceItem.discount}</p>
                </div>
                <div className="flex gap-2 items-center">
                  <img src={priceItem.img} alt="" />
                  <p>{priceItem.program}</p>
                </div>
              </div>
            </div>
            <button className="bg-orange-600 rounded-xl py-3">Проверить</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Price;
