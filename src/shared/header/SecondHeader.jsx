import { NavLink, Outlet, useLocation } from "react-router";
import { SettingIcon } from "../icons/SettingIcon";
import TariffIcon from "../icons/TariffIcon";
import UserIcon from "../icons/UserIcon";
import HelpIcon from "../icons/HelpIcon";
import NavigationIcon from "../icons/Navigation";

const headerItems = [
  {
    id: "1",
    img: <NavigationIcon paths={{ stroke: "inherit" }} stroke="inherit" />,
    topic: "Проверка AML",
    page: "/secondHeader/?aml",
  },
  {
    id: "2",
    img: <SettingIcon paths={{ stroke: "inherit" }} stroke="inherit" />,
    topic: "Интеграция",
    page: "integration",
  },
  {
    id: "3",
    img: <TariffIcon paths={{ stroke: "inherit" }} stroke="inherit" />,
    topic: "Тарифы",
    page: "tariff",
  },
  {
    id: "4",
    img: <UserIcon paths={{ stroke: "inherit" }} stroke="inherit" />,
    topic: "Профиль",
    page: "profile",
  },
  {
    id: "5",
    img: <HelpIcon paths={{ stroke: "inherit" }} stroke="inherit" />,
    topic: " Помощь",
    page: "help",
  },
];

const SecondHeader = () => {
  const location = useLocation();
  console.log(location);

  return (
    <div className="flex flex-col container mx-auto gap-4">
      <div className="pt-16 gap-2 lg:gap-0 flex flex-col lg:flex-row lg:justify-between ">
        {headerItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.page}
            className={
              "flex gap-3 text-black stroke-black group" +
              ((location.search
                ? `${location.pathname}${location.search}`
                : location.pathname
              ).includes(item.page)
                ? " text-red-500 fill-red-600 stroke-red-700"
                : "")
            }
          >
            {item.img}
            <p className="font-semibold">{item.topic}</p>
            {/* <div className="absolute -bottom-[28px] rounded-xl left-0 w-0 lg:group-hover:w-full   h-2 bg-red-500 transition-all"></div> */}
          </NavLink>
        ))}
      </div>
      <hr className="w-full h-0.5 border-0 bg-gray-500 mt-2" />
      <Outlet />
    </div>
  );
};

export default SecondHeader;
