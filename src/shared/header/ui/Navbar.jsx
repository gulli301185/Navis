import { NavLink } from "react-router";
import Property from "../../../assets/headerIcons/Property.svg";
const NavItems = [
  {
    id: "1",
    title: "Продукты",
    image: <img src={Property} alt="" />,
    page: "product",
  },
  {
    id: "2",
    title: "Прайс",
    page: "price",
  },
  {
    id: "3",
    title: "Анализ",
    page: "analize",
  },
  {
    id: "4",
    title: "FAQ",
    page: "question",
  },
  {
    id: "5",
    title: "Блог",
    page: "allNews",
  },
  {
    id: "6",
    title: "О нас",
    page: "about",
  },
];

const Navbar = () => {
  return (
    <div className="flex gap-16 text-gray-900 font-normal text-lg ">
      {NavItems.map((item) => (
        <NavLink
          key={item.id}
          to={item.page}
          className="list-none flex items-center gap-2"
        >
          {item.title}
          <div>{item.image}</div>
        </NavLink>
      ))}
    </div>
  );
};

export default Navbar;
