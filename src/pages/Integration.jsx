import CapaIcon from "../assets/bitcoinLogo/Capa_1.png";

const Integration = () => {
  return (
    <div className="container mx-auto py-20">
      <h1 className="text-5xl font-semibold py-6">Интеграция</h1>
      <div className="w-full rounded-2xl bg-gray-100 p-5 flex flex-col gap-10">
        <div className="lg:flex lg:justify-between  flex-col lg:flex-row mx-auto lg:mx-0">
          <h1 className="lg:text-3xl text-xl font-semibold">Мои сервисы</h1>
          <div className="lg:flex gap-4 ">
            <button className="  bg-gradient-to-r from-red-500 to-orange-600 rounded-md py-2 px-5 font-semibold text-lg text-white  mx-auto flex items-center justify-center">
              <span className="text-3xl pb-1 pr-5">+</span> Добавить сервис
            </button>
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
  );
};

export default Integration;
