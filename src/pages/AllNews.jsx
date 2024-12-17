import { Link } from "react-router";
import { AllAboutNews } from "../constants";

const AllNews = () => {
  return (
    <div className="container mx-auto pt-10 pb-32">
      <div className="flex justify-between pb-5">
        <h1 className="text-4xl font-bold">Блог</h1>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-3 gap-y-5">
        {AllAboutNews.map((news) => (
          <Link
            to={"/news/" + news.id}
            key={news.id}
            className="flex flex-col bg-gray-100 rounded-xl cursor-pointer"
          >
            <img src={news.logo} alt={news.topic} />
            <div className="px-8 gap-4 min-h-16 text-start py-4 mx-auto justify-center flex flex-col">
              <h5 className="text-gray-500">{news.time}</h5>
              <h1 className="text-3xl font-semibold">{news.topic}</h1>
              <p className="line-clamp-2 overflow-hidden text-ellipsis text-lg text-gray-700">
                {news.news}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllNews;
