import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useQuery } from "@tanstack/react-query";
import { getPartnersAsync } from "../../api/partners";

const Client = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: "1024",
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const { data } = useQuery({
    queryKey: ["partner"],
    queryFn: getPartnersAsync,
  });
  return (
    <div className="pt-40">
      <h1 className="pb-9 text-center text-4xl font-semibold">
        Наши довольные клиенты и партнеры
      </h1>
      <Slider {...settings} className="max-w-full">
        {data?.map((partner) => (
          <div
            key={partner.id}
            className="bg-slate-300 rounded-lg text-center flex flex-col p-5 "
          >
            <img src={partner.image} alt="" className="mx-auto w-32 pb-3" />
            <a href="">{partner.url}</a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Client;
