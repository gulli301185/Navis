import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getNewsDetailAsynk } from "../../api/newsDetail";

const NewsDetail = () => {
  const param = useParams();

  const { data: newsDetail } = useQuery({
    queryKey: ["newsDetail"],
    queryFn: () => getNewsDetailAsynk({ slug: param.slug }),
  });

  return (
    <section>
      <div className="container mx-auto pt-10">
        <div className="grid grid-cols-3 gap-5 mb-10">
          <div className="col-span-2">
            <div>
              <h1 className="text-[40px] font-bold leading-tight">
                Как изменятся правила ПОД в 2023 году
              </h1>
              <p className="text-gray-400 py-5 text-lg">
                11.06.2024 12:30 <span className="pl-7"> 3 мин чтения</span>
              </p>

              <div className="gap-4 min-h-16 text-start py-4 mx-auto justify-center flex flex-col">
                <img src={newsDetail?.news.image} alt="" />
                <h5 className="text-gray-500">{newsDetail?.news.date}</h5>
                <h1 className="text-3xl font-semibold">
                  {newsDetail?.news.title}
                </h1>
                <p className="text-lg text-gray-700">{newsDetail?.news.slug}</p>
                <p
                  dangerouslySetInnerHTML={{
                    __html: newsDetail?.news?.text || "",
                  }}
                />
                <p
                  dangerouslySetInnerHTML={{
                    __html: newsDetail?.news?.description || "",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="grid col-span-1 container  ">
            <div className="flex flex-col gap-5">
              {newsDetail?.similar_news?.map((news, slug) => (
                <div
                  key={slug}
                  className="flex flex-col bg-gray-100 rounded-xl group "
                >
                  <img src={news.image} alt="" />
                  <div className="p-4 gap-2  text-start mx-auto justify-center flex flex-col">
                    <h5 className="text-gray-500">{news.date}</h5>
                    <h5 className="text-gray-500">{news.slug}</h5>
                    <h1 className="text-3xl font-semibold">{news.title}</h1>
                    <p
                      className=" overflow-hidden text-ellipsis line-clamp-2 group-hover:line-clamp-none"
                      dangerouslySetInnerHTML={{ __html: news.text }}
                    />
                    <p
                      dangerouslySetInnerHTML={{ __html: news.description }}
                      className="line-clamp-2 group-hover:line-clamp-none"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsDetail;
