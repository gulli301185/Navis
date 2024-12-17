import bitcoinImg from "../../assets/bitcoinIcons/Bitcoin.svg";

const CriptoListItem = () => {
  return (
    <>
      <button className="w-full bg-white border-2 border-gray-300 rounded-md text-black font-semibold flex items-center justify-center h-[50px] gap-2">
        <img src={bitcoinImg} alt="*" /> Bitcoin
      </button>
    </>
  );
};

export default CriptoListItem;
