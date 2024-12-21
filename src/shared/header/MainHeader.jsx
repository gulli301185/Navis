import logoIcon from "../../assets/headerIcons/Union.svg";
import Navbar from "./ui/Navbar";
import Property from "../../assets/headerIcons/Property.svg";
import { Link, NavLink } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getProfileAsync } from "../../api/profil";
import mainHeaderIcon from "../../assets/headerIcons/sign.png";
import { NativeSelect } from "@mantine/core";
import { useLanguage } from "../../store/language";

const MainHeader = () => {
  const { language, setLanguage } = useLanguage((state) => state);

  const { data } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfileAsync,
  });

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
        {!data ? (
          <div className=" flex gap-2">
            <NativeSelect
              data={[
                { label: "RU", value: "ru" },
                { label: "EN", value: "en" },
              ]}
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            />
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
        ) : (
          <div className=" flex gap-2">
            <NativeSelect
              data={[
                { label: "RU", value: "ru" },
                { label: "EN", value: "en" },
              ]}
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            />
            <Link to="/secondHeader">
              <img src={mainHeaderIcon} alt="" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainHeader;
