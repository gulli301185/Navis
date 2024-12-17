import { Blockchein } from "../constants";
import complaneLogo from "../assets/bitcoinLogo/OBJECTS.png";
import searchIcon from "../assets/accadionIcons/Vector.png";
import CapaIcon from "../assets/bitcoinLogo/Capa_1.png";

const ComplanePage = () => {
  return (
    <div className="container mx-auto py-20">
      <h1 className="text-5xl font-bold py-6">Проверка AML</h1>
      <div className="flex flex-col gap-6">
        <div className="flex gap-6">
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
          <div className="bg-pink-300/50 rounded-xl max-w-[300px] p-5">
            <div className=" gap-4 flex flex-col">
              <h1 className="text-2xl font-bold ">
                Жалоба на подозрительный криптоадрес
              </h1>
              <p className="text-gray-500">
                Не оставайтесь в стороне!Отправьте жалобу на криптоадрес,
                связанный с мошенническими действиями
              </p>
            </div>
            <img src={complaneLogo} alt="" className="py-5" />
            <button className="min-w-full bg-black text-white py-4 rounded-xl ">
              Пожаловаться
            </button>
          </div>
        </div>
        <div className="w-full rounded-2xl bg-gray-100 p-5 flex flex-col gap-10">
          <div className="lg:flex lg:justify-between  flex-col lg:flex-row mx-auto lg:mx-0">
            <h1 className="lg:text-3xl text-xl font-semibold">
              История проверок
            </h1>
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
          <div className="text-center items-center flex flex-col lg:px-80 py-10 gap-3">
            <img src={CapaIcon} alt="" />
            <p className="font-bold">Здесь будет история ваших чеков</p>
            <p className="text-gray-500 px-40">
              Проверьте адреса на наличие «грязных» денег. Защититесь от
              мошенников, мошенничества и украденных токенов
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplanePage;
