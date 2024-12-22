import { ProtectedServiceData } from "../constants";
import CardMain from "../shared/card/CardMain";
import banner from "../assets/bitcoinBanner/BannerLogo.png";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getProtectedServiceAsync } from "../api/ProtectedServise";

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
      <div className=" ">
        <div key={data?.id} className=" bg-gray-100 rounded-2xl">
          <CardMain>
            <div className="flex items-center gap-5">
              <img src={data?.logo} width="60px" height="60px" alt="cardIcon" />
              <h1 className="text-2xl font-semibold">{data?.title}</h1>
            </div>
            <p className="text-lg text-gray-500 text-start pt-5">
              {data?.text}
            </p>
          </CardMain>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 p-5">
        {Array.isArray(data?.services) && data.services.length > 0
          ? data.services.map((ser) => (
              <div
                key={ser.id}
                className="bg-gray-100 rounded-2xl hover:bg-black group p-5 "
              >
                <div className="flex gap-5 ">
                  <div className="w-16">
                    <img
                      src={ser.logo}
                      width="full"
                      height="full"
                      alt="cardIcon"
                      className="object-contain "
                    />
                  </div>
                  <h1 className="text-2xl font-semibold group-hover:text-white text-blackc p-4 w-96 ">
                    {ser.title}
                  </h1>
                </div>
                <p>{ser.description}</p>
              </div>
            ))
          : ""}
      </div>
      <img
        src={banner}
        width="100%"
        alt=""
        className="object-contain py-[160px]"
      />
    </div>
  );
};

export default Protectedervice;
