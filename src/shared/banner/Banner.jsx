import ellipsIcon from "../../assets/bitcoinIcons/Ellipse 19 (1).png";
import bannerIcon from "../../assets/bitcoinIcons/Glossy (2).png";
import bitcoinIcons from "../../assets/bitcoinIcons/Frame 1 (2).png";

const Banner = () => {
  return (
    <div className="container mt-40 h-[340px] relative mx-auto bg-gradient-to-tr from-red-600 to-orange-600 rounded-2xl ">
      <div className="grid grid-cols-3 gap-4 items-center">
        <div className="flex justify-center">
          <img
            src={bitcoinIcons}
            alt=""
            className=" left-0 bottom-0 h-full absolute rotate-8"
          />
        </div>

        <div className=" text-center flex flex-col gap-5 items-center justify-center pl-10 mt-20 ">
          <p className="text-white text-[40px] text-semibold w-[669px] text-center leading-tight ">
            Мы помогли 300+ криптовалютным организациям всех размеров в 25
            юрисдикциях
          </p>
          <button className="px-6 py-3 bg-white rounded-xl">
            обсудить проект
          </button>
        </div>

        <div className="relative">
          <img
            src={bannerIcon}
            alt=""
            className="absolute left-[55%] -bottom-5"
          />
          <img
            src={ellipsIcon}
            alt=""
            className="absolute left-[47%] -bottom-18"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
