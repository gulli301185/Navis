import Mental from "../../assets/cardIcon/MentalIcon.png";
import Accordion from "../../components/ui/Accardeon";
import { useState } from "react";
import accardionPlus from "../../assets/accadionIcons/accardeonPlusIcon.svg";
import accardionMinus from "../../assets/accadionIcons/accardeonMinusIcon.svg";
import { useQuery } from "@tanstack/react-query";
import { getPopularQuestionsAsynk } from "../../api/popularQuestions";
import { useLanguage } from "../../store/language";

function PopularQuestion() {
  const [openIndex, setOpenIndex] = useState(null);
  const language = useLanguage((state) => state.language);

  const { data } = useQuery({
    queryKey: ["faq", language],
    queryFn: () => getPopularQuestionsAsynk({ lang: language }),
  });

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="container pt-40 mx-auto">
      <h1 className="text-[40px] font-bold pb-8 text-center">
        Популярные вопросы
      </h1>
      <div className="grid grid-cols-3  gap-10">
        <div className="h-[545px]  flex  flex-col justify-between p-7 rounded-2xl  bg-gradient-to-bl to-red-700 from-orange-600 relative ">
          <div className="flex flex-col gap-5">
            <h1 className="text-[26px] leading-tight text-white w-72 text-start font-semibold">
              Интегрированная платформа обеспечения соответвия
            </h1>
            <p className="text-gray-100 text-start  w-72 text-lg">
              AMLBot автоматизирует AML / KYC процедуры и снижает расходы{" "}
            </p>
          </div>
          <img src={Mental} alt="" className="-bottom-0 left-0 absolute" />
        </div>
        <div className="col-span-2">
          {data?.map((info, index) => (
            <Accordion key={info.id}>
              <button className="w-full  md:text-2xl text-3xl font-medium text-black flex justify-between ">
                <span className="text-start"> {info.question}</span>
                {openIndex === index - 1 ? (
                  <img
                    src={accardionMinus}
                    alt="*"
                    onClick={() => toggleAccordion(index - 1)}
                  />
                ) : (
                  <img
                    src={accardionPlus}
                    alt="*"
                    onClick={() => toggleAccordion(index - 1)}
                  />
                )}
              </button>
              {openIndex === index - 1 && (
                <p className=" bg-white text-gray-500 text-xl md:text-xl text-start py-7">
                  {info.answer}
                </p>
              )}
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PopularQuestion;
