// import CriptoBannerIcon from "../../assets/bitcoinBanner/banner.svg";

// export const CriptoBanner = () => {
//   return (
//     <div className="">
//       <img src={CriptoBannerIcon} alt="*" width="100%" />
//     </div>
//   );
// };

import d3Logo from "../../assets/bitcoinLogo/Ediable 3D icons (1).png";
import mindsetLogo from "../../assets/bitcoinLogo/7_Mindset_3D_Metal_Security (1).png";
import BLogo from "../../assets/bitcoinLogo/Bitcoin (BTC).png";

export const CriptoBanner = () => {
  return (
    <div className="h-[366px] w-full mt-40 bg-gradient-to-tr from-red-600 to-orange-500">
      {/* <img src={CriptoBannerIcon} alt="*" width="100%" /> */}
      <div className="container  mx-auto relative grid grid-cols-[1fr_2fr_1fr]  h-[366px]">
        <div>
          <img
            src={mindsetLogo}
            alt="*"
            className="absolute -translate-y-36 -left-20"
          />
          <img src={d3Logo} alt="*" className="absolute -left-10 -top-5" />
        </div>
        <div className="grid justify-center text-[20px] items-center py-10  text-white leading-tight translate-x-40">
          По нашей статистике, <br />{" "}
          <p className="text-[40px] ">
            {" "}
            каждый четвертый кошелек — подозрительный.
          </p>
          Потратив пару долларов на проверку, вы можете <br /> уберечь себя от
          потерь на несколько тысяч долларов.
        </div>
        <img
          src={BLogo}
          alt="*"
          className=" absolute -right-20 top-16 justify-self-end
        "
        />
      </div>
    </div>
  );
};
