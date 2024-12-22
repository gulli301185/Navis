import CardMain from "../shared/card/CardMain";
import mainLogo from "../assets/headerIcons/Union.svg";
import addressIcon from "../assets/adressIcons/address.png";
import phoneIcon from "../assets/adressIcons/phone.png";
import mailIcon from "../assets/adressIcons/mail.png";
import WhatsApp from "../assets/footerIcons/WhatsApp.svg";
import Music from "../assets/footerIcons/Music.svg";
import Telegram from "../assets/footerIcons/Telegram.svg";
import Instagram from "../assets/footerIcons/Instagram.svg";

export const HelpInfo = () => {
  return (
    <div className="container mx-auto h-full mt-10">
      <h1 className="text-5xl pb-5 p font-bold ">Помощь</h1>
      <div className=" bg-gray-100 rounded-2xl  grid grid-cols-2 ">
        <CardMain className="bg-white m-8 flex flex-col justify-between">
          <h1 className=" leading-tight text-[22px] font-bold whitespace-pre-line pb-8">
            {`Техническая поддержка,\n сотрудничество и PR`}
          </h1>
          <div className="font-semibold ">
            <div className="flex gap-4 pb-6 flex-col md:flex-row cursor-pointer">
              <img src={addressIcon} alt="" className="object-contain w-7" />
              <p>
                Кыргызская республика, г.Бишкек, Проспект Манаса <br /> 64/1
              </p>
            </div>
            <div className="flex gap-4 pb-6 flex-col md:flex-row">
              <img src={phoneIcon} alt="" className="object-contain w-7" />
              <div className="cursor-pointer">
                <div>+996 (502)-800-202 </div>
                <div>+996 (502)-800-202 </div>
              </div>
            </div>
            <a href="/" className="flex gap-4 pb-6 flex-col md:flex-row">
              <img src={mailIcon} alt="" className="object-contain w-7" />
              <p>navischange@mail.com</p>
            </a>
          </div>
          <div className="text-xl font-bold">
            {" "}
            <div className="flex flex-col gap-7 pb-14">
              <h1 className="text-lg md:text-xl">Мы в соцсетях</h1>
              <div className="flex gap-3 md:flex-row flex-col">
                <img
                  src={WhatsApp}
                  alt="WhatsApp"
                  className="object-contain w-10 cursor-pointer"
                />
                <img
                  src={Telegram}
                  alt="Telegram"
                  className="object-contain w-10"
                />
                <img
                  src={Instagram}
                  alt="WhatsApp"
                  className="object-contain w-10 cursor-pointer"
                />
                <img
                  src={Music}
                  alt="WhatsApp"
                  className="object-contain w-10 cursor-pointer"
                />
              </div>
            </div>
          </div>
          <p className="text-gray-500 pr-20 ">
            Если у Вас возникли вопросы технического или финансового плана,
            напишите нам и мы поможем Вам в решении вашего вопроса. Мы отвечаем
            на вопросы в течение 15-60 минут, в зависимости от загрузки сервиса.
          </p>
        </CardMain>
        <div className="flex items-center justify-center flex-col">
          <img src={mainLogo} alt="" width="188px" height="171px" />
          <h1 className="text-[62px] font-bold py-5">AMLnavis</h1>
        </div>
      </div>
    </div>
  );
};
