import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Partners } from "../../constants";

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

  return (
    <div className="pt-40">
      <h1 className="pb-9 text-center text-4xl font-semibold">
        Наши довольные клиенты и партнеры
      </h1>
      <Slider {...settings} className="max-w-full">
        {Partners.map((partner) => (
          <div
            key={partner.id}
            className="bg-slate-300 rounded-lg  h-[100px] pt-8"
          >
            <img src={partner.logo} alt="" className="mx-auto " />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Client;
