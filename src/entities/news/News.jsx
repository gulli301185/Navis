import { NewsCard } from "../../constants";
import cardIcon from "../../assets/cardIcon/FrameIcon.png";
import { Link, NavLink } from "react-router";

const News = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between  pb-5 ">
        <h1 className="text-4xl font-bold ">Новости</h1>
        <NavLink to="news" className="flex gap-2 items-center">
          <p className="text-red-600">Все новости </p>
          <img src={cardIcon} alt="" className="rounded-full bg-pink-100" />
        </NavLink>
      </div>
      <div className="grid grid-cols-3 container gap-2 ">
        {NewsCard.map((news) => (
          <Link
            to={"/news/" + news.id}
            key={news.id}
            className="flex flex-col bg-gray-100 rounded-xl "
          >
            <img src={news.logo} alt="" />
            <div className=" px-16 gap-4 min-h-16 text-start py-4 mx-auto justify-center flex flex-col">
              <h5 className="text-gray-500">{news.time}</h5>
              <h1 className="text-3xl font-semibold">{news.topic}</h1>
              <p className="text-lg line-clamp-2 text-gray-700 overflow-hidden text-ellipsis">
                {news.news}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default News;
