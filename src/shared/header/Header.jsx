import logoIcon from "../../assets/headerIcons/Union.svg";
import Navbar from "./ui/Navbar";
import Property from "../../assets/headerIcons/Property.svg";
import SignLogo from "../../assets/cardIcon/cardLogo.svg";

const Header = () => {
  return (
    <div>
      <div className="container mx-auto flex items-center justify-between">
        <div className="py-1.5">
          <div className="py-2.5 flex text-bold items-center gap-3">
            <img src={logoIcon} alt="*" className="w-[61px] h-[42px]" />
            <div className=" font-bold text-3xl  whitespace-pre-line  ">
              {`AML\nnavi`}
            </div>
          </div>
        </div>
        <div className="">
          <Navbar />
        </div>
        <div className=" flex gap-2 ">
          <div className="flex items-center gap-1 py-2 pr-6 text-gray-500 font-semibold ">
            RU <img src={Property} alt="*" />
          </div>
          <img src={SignLogo} alt="*" />
        </div>
      </div>
    </div>
  );
};

export default Header;
