import { NavLink } from "react-router";
import homeIcon from "../../assets/accadionIcons/Vector.png";

export const headerItems = [
  {
    id: "1",
    img: homeIcon,
    topic: "Проверка AML",
    page:"check"
  },
  {
    id: "2",
    img: homeIcon,
    topic: "Интеграция",
    page:"integration"
  },
  {
    id: "3",
    img: homeIcon,
    topic: "Тарифы",
    page:"tariff"
  },
  {
    id: "4",
    img: homeIcon,
    topic: "Профиль",
    page:"profile"
  },
  {
    id: "5",
    img: homeIcon,
    topic: " Помощь",
    page:"help"
  },
];

const SecondHeader = () => {
  return (
    <div className="flex flex-col container mx-auto gap-4">
      <div className="pt-16 gap-2 lg:gap-0 flex flex-col lg:flex-row lg:justify-between">
        {headerItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.page}
            className="flex gap-3 group relative" 
          >
            <img src={item.img} alt={item.topic} className="w-6 h-6" />
            <p className="font-semibold">{item.topic}</p>

            <div className="absolute -bottom-[28px] rounded-xl left-0 w-0 lg:group-hover:w-full   h-2 bg-red-500 transition-all"></div>
          </NavLink>
        ))}
      </div>
      <hr className="w-full h-0.5 border-0 bg-gray-500 mt-2" />
    </div>
  );
};

export default SecondHeader;

