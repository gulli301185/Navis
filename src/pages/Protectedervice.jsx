import { ProtectedServiceData } from "../constants";
import CardMain from "../shared/card/CardMain";
import banner from "../assets/bitcoinBanner/BannerLogo.png";

const Protectedervice = () => {
  return (
    <div className="container mx-auto" id="service">
      <h1 className=" whitespace-pre-line py-[38px] text-5xl font-bold leading-tight">
        {` Защитите свой бизнес с AML\n проверками (KYT)`}
      </h1>
      <div className=" grid md:grid-cols-2  grid-cols-1 gap-2">
        {ProtectedServiceData.map((card) => (
          <div key={card.id} className=" bg-gray-100 rounded-2xl">
            <CardMain>
              <div className="flex items-center gap-5">
                <img
                  src={card.logo}
                  width="60px"
                  height="60px"
                  alt="cardIcon"
                />
                <h1 className="text-2xl font-semibold">{card.topic}</h1>
              </div>
              <p className="text-lg text-gray-500 text-start pt-5">
                {card.text}
              </p>
            </CardMain>
          </div>
        ))}
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
