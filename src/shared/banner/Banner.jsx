import BannerLogo from "../../assets/bitcoinBanner/BannerLogo.png";
import bannerIcon from "../../assets/bitcoinBanner/Glossy.png";

const Banner = () => {
  return (
    <div className="container py-32 relative mx-auto">
      <img
        src={bannerIcon}
        alt=""
        className="absolute left-[90%] top-16 rotate-12"
      />
      <img src={BannerLogo} alt="" className="w-full rounded-2xl" />
    </div>
  );
};

export default Banner;
