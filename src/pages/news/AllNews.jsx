import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getNewsAsync } from "../../api/news";
import { useLanguage } from "../../store/language";

const AllNews = () => {
  const language = useLanguage((state) => state.language);

  const { data } = useQuery({
    queryKey: ["news", language],
    queryFn: () => getNewsAsync({ lang: language }),
  });
  console.log(data);

  return (
    <div className="container mx-auto pt-10 ">
      <div className="flex justify-between pb-5">
        <h1 className="text-4xl font-bold">Блог</h1>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-3 gap-y-5">
        {data?.map((news, index) => (
          <Link
            to={`/news/detail/${news.slug}`}
            key={index}
            className="flex flex-col bg-gray-100 rounded-xl "
          >
            <img src={news.image} alt="" />
            <div className=" px-6 gap-1 min-h-16 text-start py-4 mx-auto justify-center flex flex-col">
              <h5 className="text-gray-500">{news.date}</h5>
              <h1 className="text-[26px] font-semibold">{news.title}</h1>
              <p
                className=" text-gray-700 overflow-hidden text-ellipsis line-clamp-2"
                dangerouslySetInnerHTML={{ __html: news.text }}
              />
              <h1
                className="line-clamp-2"
                dangerouslySetInnerHTML={{ __html: news.description }}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllNews;
