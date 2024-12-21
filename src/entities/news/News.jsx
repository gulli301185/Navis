// import { NewsCard } from "../../constants";
import cardIcon from "../../assets/cardIcon/FrameIcon.png";
import { Link, NavLink } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getNewsAsync } from "../../api/news";
import { useLanguage } from "../../store/language";

const News = () => {
  const language = useLanguage((state) => state.language);
  console.log(language);

  const { data } = useQuery({
    queryKey: ["news", language],
    queryFn: () => getNewsAsync({ lang: language }),
  });
  console.log(data);

  return (
    <div className="container mx-auto">
      <div className="flex justify-between  pb-5 ">
        <h1 className="text-4xl font-bold ">Новости</h1>
        <NavLink to="allNews" className="flex gap-2 items-center">
          <p className="text-red-600">Все новости </p>
          <img src={cardIcon} alt="" className="rounded-full bg-pink-100" />
        </NavLink>
      </div>
      <div className="grid grid-cols-3 container gap-2 ">
        {data?.map((news, index) => (
          <Link
            to={`/newsDetail/${index + 1}`}
            key={index}
            className="flex flex-col bg-gray-100 rounded-xl "
          >
            <img src={news.image} alt="" />
            <div className=" px-10 gap-4 min-h-16 text-start py-4 mx-auto justify-center flex flex-col">
              <h5 className="text-gray-500">{parseInt(index + 1)}</h5>
              <h5 className="text-gray-500">{news.date}</h5>
              <h5 className="text-gray-500">{news.slug}</h5>
              <h1 className="text-3xl font-semibold">{news.title}</h1>
              <p className="text-lg text-gray-700 overflow-hidden text-ellipsis line-clamp-2">
                {news.text}
              </p>
              <h1 className="text-lg line-clamp-2">{news.description}</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default News;
