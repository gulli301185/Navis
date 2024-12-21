import CardMain from "../../shared/card/CardMain";
import Mental from "../../assets/cardIcon/MentalIcon.png";
import Accordion from "../../components/ui/Accardeon";
import { useState } from "react";
import accardionPlus from "../../assets/accadionIcons/accardeonPlusIcon.svg";
import accardionMinus from "../../assets/accadionIcons/accardeonMinusIcon.svg";
import { useQuery } from "@tanstack/react-query";
import { getPopularQuestionsAsynk } from "../../api/popularQuestions";
import { useLanguage } from "../../store/language";

function PopularQuestion({ className, children }) {
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
    <div className="container py-40 mx-auto">
      <h1 className="text-3xl font-bold pb-8">Популярные вопросы</h1>
      <div className="grid grid-cols-3  gap-20 ">
        <CardMain className="h-[545px]  bg-gradient-to-bl to-red-700 from-orange-600 relative ">
          <div>
            <h1 className="text-2xl text-white w-72 text-start font-semibold">
              Интегрированная платформа обеспечения соответвия
            </h1>
            <p className="text-gray-100 text-start  w-72 text-lg">
              AMLBot автоматизирует AML / KYC процедуры и снижает расходы{" "}
            </p>
          </div>
          <img
            src={Mental}
            width="407px"
            alt=""
            className=" absolute -bottom-4"
          />
        </CardMain>
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
