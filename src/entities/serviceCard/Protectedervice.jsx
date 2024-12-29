import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getProtectedServiceAsync } from "../../api/protectedServise";

const Protectedervice = () => {
  const param = useParams();

  const { data } = useQuery({
    queryKey: ["protectedService"],
    queryFn: () => getProtectedServiceAsync({ slug: param.slug }),
  });
  console.log(data);

  return (
    <div className="container mx-auto" id="service">
      <div className="flex justify-between ">
        <h1 className=" whitespace-pre-line py-[38px] text-5xl font-bold leading-tight">
          {` Защитите свой бизнес с AML\n проверками (KYT)`}
        </h1>
        <p className="text-xl text-end flex items-center text-gray-500 w-[390px]">
          Повышенная защита от рисков и мошенничества, соответствие Compliance и
          удобное API решение.
        </p>
      </div>
      <div
        key={data?.id}
        className=" bg-gray-100 rounded-2xl group hover:bg-black"
      >
        <div className="flex  flex-col justify-between p-7 rounded-2xl group">
          <div className=" grid grid-cols-[1fr_9fr] gap-1">
            <div className="w-[60px] h-[60px] flex items-center rounded-full group-hover:bg-[#D4151C]  bg-[#D4151C26] justify-center">
              <img
                src={data?.logo}
                width="24px"
                height="24px"
                className="max-h-[24px]"
                alt="cardIcon"
              />
            </div>
            <h1 className="text-2xl font-semibold group-hover:text-white">
              {data?.title}
            </h1>
          </div>
          <p className="text-lg text-gray-500 text-start pt-5">{data?.text}</p>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 py-5">
        {Array.isArray(data?.services) && data.services.length > 0
          ? data.services.map((ser) => (
              <div
                key={ser.id}
                className="bg-gray-200 rounded-2xl hover:bg-black group p-5 "
              >
                <div className="grid grid-cols-[1fr_3fr] gap-1 ">
                  <div className="w-[60px] h-[60px] flex group-hover:bg-[#D4151C]   items-center rounded-full bg-[#D4151C26] justify-center">
                    <img
                      src={ser?.logo}
                      width="24px"
                      height="24px"
                      className="max-h-[24px]"
                      alt="cardIcon"
                    />
                  </div>
                  <h1 className="text-2xl font-semibold group-hover:text-white text-blackc p-4 ">
                    {ser.title}
                  </h1>
                </div>
                <p
                  dangerouslySetInnerHTML={{ __html: ser.description }}
                  className="group-hover:text-white"
                />
              </div>
            ))
          : ""}
      </div>
      <iframe
        width="100%"
        style={{ aspectRatio: "2/1" }}
        className="rounded-2xl mb-6"
        src="https://www.youtube.com/embed/6jGFVmIZfTY?si=2EIkwpLuzy6hLtoN"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Protectedervice;
