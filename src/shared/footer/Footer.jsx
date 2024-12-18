import logoIcon from "../../assets/headerIcons/Union.svg";
import WhatsApp from "../../assets/footerIcons/WhatsApp.svg";
import Music from "../../assets/footerIcons/Music.svg";
import Telegram from "../../assets/footerIcons/Telegram.svg";
import Instagram from "../../assets/footerIcons/Instagram.svg";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="min-h-[360px]  bg-black text-white flex items-center hover:bg-white hover:text-black group">
      <div className="w-full ">
        <div className="container   mx-auto flex justify-between flex-col lg:flex-row  mb-14">
          <div className="flex flex-col gap-6 w-full sm:w-80">
            <div className="flex items-center gap-4 ">
              <img src={logoIcon} alt="*" className="w-[61px] h-[55px]" />
              <span className="hidden group-hover:block font-bold text-black text-xl ">
                AMLnavis
              </span>
            </div>
            <p className="text-base text-gray-500">
              Это международный сервис, где вам быстро и надежно восстановят ваш
              забытый криптокошелёк
            </p>
            <a
              href="/"
              className="text-2xl font-semibold text-red-700 uppercase"
            >
              AMLnavis@mail.com
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:mt-0 mt-6">
            <div className="flex flex-col gap-7">
              <p>Основное</p>
              <ul className="text-gray-500  flex space-y-4 flex-col">
                <Link to="/about">О нас</Link>
                <li>Контакты</li>
                <Link to="/partner">Партнеры</Link>
                <Link
                  to="/service"
                  className="whitespace-pre-line"
                >{`Почему \nNavisAsset?`}</Link>
              </ul>
            </div>
            <div className="flex flex-col gap-7">
              <p>Пользователям</p>
              <ul className="text-gray-500 flex space-y-4 flex-col">
                <Link to={{ pathname: "/protectedService", hash: "service" }}>
                  Услуги
                </Link>
                <li>Отзывы</li>
                <Link to="/price">Прайс</Link>
                <Link to="/news">Новости</Link>
              </ul>
            </div>
            <div className="flex flex-col gap-7">
              <h1>Мы в соцсетях</h1>
              <div className="flex gap-3">
                <img src={WhatsApp} alt="WhatsApp" />
                <img src={Telegram} alt="Telegram" />
                <img src={Instagram} alt="WhatsApp" />
                <img src={Music} alt="WhatsApp" />
              </div>
            </div>
          </div>
        </div>
        <hr className="border-1 border-gray-500 mb-5" />
        <div className=" text-gray-500 container mx-auto ">
          <div className="flex justify-between">
            <div className="text-base ">
              © 2024 NavisAsset Все права защищены
            </div>
            <div className="font-bold text-gray-500 ">
              Made with ❤️ by{" "}
              <span
                className="text-orange-800  border-orange-800 border-b-2
              "
              >
                NavisDevs
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
