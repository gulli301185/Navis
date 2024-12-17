import cardIcon from "../../assets/cardIcon/cardLogo.svg";
import FrameIcon from "../../assets/cardIcon/FrameIcon.png";

const Card = () => {
  return (
    <div className="flex gap-3 flex-col p-7 bg-slate-100 rounded-2xl h-[459px] w-[373px]">
      <img src={cardIcon} width="60px" height="60px" alt="cardIcon" />
      <h1 className="text-2xl font-semibold ">AML/KYС Процедуры</h1>
      <p className="text-lg text-gray-500">
        Запустите свой криптовалютный проект с легкостью, простотой и
        уверенностью, используя наш консалтинг по вопросам AML и KYC,
        обеспечивающий беспрепятственное соблюдение требований и эффективное
        управление рисками с самого начала.
      </p>
      <button className=" font-semibold text-orange-600 flex items-center  text-lg">
        Узнать больше! <img src={FrameIcon} alt="FrameIcon" />
      </button>
    </div>
  );
};

export default Card;
