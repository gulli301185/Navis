import { Link, useParams } from "react-router";
import { AllAboutNews } from "../constants";
import { useQuery } from "@tanstack/react-query";
import { getNewsDetailAsynk } from "../api/newsDetail";
import { getNewsAsync } from "../api/news";
import { useLanguage } from "../store/language";

const NewsDetail = () => {
  const param = useParams();

  // const language = useLanguage((state) => state.language);
  // const slug = useLanguage((state) => state.slug);
  console.log(param.id);

  // const { data: newsData } = useQuery({
  //   queryKey: ["news", language],
  //   queryFn: () => getNewsAsync({ lang: language }),
  // });

  const { data: newsDetail } = useQuery({
    queryKey: ["newsDetail"],
    queryFn: () => getNewsDetailAsynk({ slug: param.slug }),
  });
  // const newsDetails = newsData?.find((item) => item.slug === param.slug);
  console.log(newsDetail);

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
                <img src={newsDetail?.news.image} alt="" />
                <h5 className="text-gray-500">{newsDetail?.news.date}</h5>
                <h1 className="text-3xl font-semibold">
                  {newsDetail?.news.title}
                </h1>
                <p className="text-lg text-gray-700">{newsDetail?.news.slug}</p>
                <h1 className="text-2xl font-bold ">{newsDetail?.news.text}</h1>
                <p className="text-lg text-gray-700">
                  {newsDetail?.news.description}
                </p>
              </div>
            </div>
          </div>
          <div className="grid col-span-1 container  ">
            <div className="flex flex-col gap-5">
              {newsDetail?.similar_news?.map((news, slug) => (
                <div
                  // to={`/news/detail/${index + 1}/${news.slug}`}
                  key={slug}
                  className="flex flex-col bg-gray-100 rounded-xl group "
                >
                  <img src={news.image} alt="" />
                  <div className=" px-10 gap-2  text-start py-4 mx-auto justify-center flex flex-col">
                    <h5 className="text-gray-500">{news.date}</h5>
                    <h5 className="text-gray-500">{news.slug}</h5>
                    <h1 className="text-3xl font-semibold">{news.title}</h1>
                    <p className="text-lg text-gray-700 overflow-hidden text-ellipsis line-clamp-2 group-hover:line-clamp-none">
                      {news.text}
                    </p>
                    <h1 className="text-lg line-clamp-2 group-hover:line-clamp-none">
                      {news.description}
                    </h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* <div className="grid col-span-1 container gap-2 ">
            {newsData
              ?.filter((item) => item.slug !== param.slug)
              .map((news, index) => (
                <Link
                  to={`/news/detail/${index + 1}/${news.slug}`}
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
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default NewsDetail;
