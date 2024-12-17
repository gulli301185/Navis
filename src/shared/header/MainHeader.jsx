import logoIcon from "../../assets/headerIcons/Union.svg";
import Navbar from "./ui/Navbar";
import Property from "../../assets/headerIcons/Property.svg";
import { NavLink } from "react-router";

const MainHeader = () => {
  return (
    <div className="border-b-2 border-gray-300  " id="header">
      <div className="container mx-auto flex items-center justify-between">
        <div className="py-1.5">
          <NavLink to="/" className="py-2.5 flex text-bold items-center gap-3">
            <img src={logoIcon} alt="*" className="w-[61px] h-[42px]" />
            <div className=" font-bold text-3xl  whitespace-pre-line  ">
              {`AML\nnavi`}
            </div>
          </NavLink>
        </div>
        <div className="">
          <Navbar />
        </div>
        <div className=" flex gap-2">
          <div className="flex items-center gap-1 py-2 text-gray-500 font-semibold">
            RU <img src={Property} alt="" />
          </div>
          <NavLink
            to="personal"
            className="text-gray-500 rounded-lg py-3 font-semibold px-6 bg-gray-50"
          >
            Войти
          </NavLink>
          <NavLink
            to="register"
            className="text-white bg-black rounded-lg py-3 font-semibold px-6 "
          >
            Создать аккаунт
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
