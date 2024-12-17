import { Link, useParams } from "react-router";
import { AllAboutNews } from "../constants";

const NewsDetail = () => {
  const param = useParams();
  const findNews = AllAboutNews.find((item) => item.id === param.id);
  console.log(findNews);

  return (
    <section>
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-3 gap-5 mb-10">
          <div className="col-span-2">
            <div>
              <h1 className="text-5xl font-bold leading-tight">
                Как изменятся правила ПОД в 2023 году
              </h1>
              <p className="text-gray-400 py-5 text-lg">
                11.06.2024 12:30 <span className="pl-7"> 3 мин чтения</span>
              </p>

              <div className="px-8 gap-4 min-h-16 text-start py-4 mx-auto justify-center flex flex-col">
                <img src={findNews.logo} alt={findNews.topic} />
                <h5 className="text-gray-500">{findNews.time}</h5>
                <h1 className="text-3xl font-semibold">{findNews.topic}</h1>
                <p className="text-lg text-gray-700">{findNews.news}</p>
                <h1 className="text-2xl font-bold pt-16">
                  {findNews.secondTopic}
                </h1>
                <p className="text-lg text-gray-700">{findNews.fullNews}</p>
              </div>
            </div>
          </div>
          <div className="grid col-span-1 container gap-2 ">
            {AllAboutNews.filter((item) => item.id !== param.id).map((news) => (
              <Link
                to={"/news/" + news.id}
                key={news.id}
                className="flex flex-col bg-gray-100 rounded-xl cursor-pointer "
              >
                <img src={news.logo} alt={news.topic} />
                <div className="px-8 gap-4 min-h-16 text-start py-4 mx-auto justify-center flex flex-col">
                  <h5 className="text-gray-500">{news.time}</h5>
                  <h1 className="text-3xl font-semibold">{news.topic}</h1>
                  <p className="text-lg text-gray-700">{news.news}</p>
                  <h1 className="text-2xl font-bold pt-16">
                    {news.secondTopic}
                  </h1>
                  <p className="text-lg text-gray-700">{news.fullNews}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsDetail;