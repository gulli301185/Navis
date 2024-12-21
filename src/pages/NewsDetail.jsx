import { Link, useParams } from "react-router";
import { AllAboutNews } from "../constants";
import { useQuery } from "@tanstack/react-query";
import { getNewsDetailAsynk } from "../api/newsDetail";
import { getNewsAsync } from "../api/news";
import { useLanguage } from "../store/language";

const NewsDetail = () => {
  const param = useParams();

  const language = useLanguage((state) => state.language);
  // const slug = useLanguage((state) => state.slug);
  console.log(param);

  const { data } = useQuery({
    queryKey: ["news", language],
    queryFn: () => getNewsAsync({ lang: language }),
  });

  const { datas } = useQuery({
    queryKey: ["newsDetail"],
    queryFn: () => getNewsDetailAsynk(datas.slug),
  });
  const findNews = data?.find((item) => item.id === param.id);
  console.log(datas);

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

              {/* <div className="px-8 gap-4 min-h-16 text-start py-4 mx-auto justify-center flex flex-col">
                <img src={findNews.image} alt={findNews.topic} />
                <h5 className="text-gray-500">{findNews.time}</h5>
                <h1 className="text-3xl font-semibold">{findNews.topic}</h1>
                <p className="text-lg text-gray-700">{findNews.news}</p>
                <h1 className="text-2xl font-bold pt-16">
                  {findNews.secondTopic}
                </h1>
                <p className="text-lg text-gray-700">{findNews.fullNews}</p>
              </div> */}
            </div>
          </div>
          <div className="grid col-span-1 container gap-2 ">
            {data
              ?.filter((item) => item.id !== param.id)
              .map((news, index) => (
                <Link
                  to={`/news/${index + 1}`}
                  key={index}
                  className="flex flex-col bg-gray-100 rounded-xl "
                >
                  <img src={news.image} alt="" />
                  <div className=" px-10 gap-4 min-h-16 text-start py-4 mx-auto justify-center flex flex-col">
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
      </div>
    </section>
  );
};

export default NewsDetail;
