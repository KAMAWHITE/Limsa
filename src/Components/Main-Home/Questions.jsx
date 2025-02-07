import React, { useState } from 'react';
import QBoy from '../../assets/questions_boy.png';
import QGirl from '../../assets/questions_girl.png';
import Marquee from 'react-fast-marquee';
import { useTranslation } from 'react-i18next';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function Questions() {
    const { t } = useTranslation();

    const [openIndex, setOpenIndex] = useState(null);

    const toggleDropdown = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: t("question.question1"),
            answer: t("question.answer1"),
        },
        {
            question: t("question.question2"),
            answer: t("question.answer2"),
        },
        {
            question: t("question.question3"),
            answer: t("question.answer3"),
        },
    ];

    return (
        <div className="max-w-[1500px] mx-auto bg-[#161616]">
            <div className="grid grid-cols-1 gap-x-2 text-center items-center md:grid-cols-2 py-20 px-5 sm:px-8 md:px-10">
                <div className="grid grid-cols-2 gap-x-2">
                    <div>
                        <img src={QBoy} alt="Savollar berayotgan bola rasmi" />
                    </div>
                    <div className="pt-[60px]">
                        <img src={QGirl} alt="Savollar berayotgan qiz rasmi" />
                    </div>
                </div>
                <div className="px-0 mb-[25px] sm:px-10 lg:px-25">
                    <h1 className="font-bold text-white text-[40px] text-start">
                        {t("question.title")}
                    </h1>
                    {faqs.map((faq, index) => (
                        <div key={index} className="border rounded-[15px] border-gray-600 my-3">
                            <button
                                onClick={() => toggleDropdown(index)}
                                className={`w-full text-left flex justify-between items-center py-3 px-4 focus:outline-none ${openIndex === index ? "text-indigo-600" : "text-white"
                                    }`}
                            >
                                <span>{faq.question}</span>
                                <span>
                                    {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                                </span>
                            </button>
                            {openIndex === index && (
                                <div className="text-white text-sm pb-3 px-4">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <Marquee direction='right' speed={250}>
                <div className='flex ml-20 gap-20 mb-10 font-bold text-[30px] text-white'>
                    <h1>{t("marquee.h1")}</h1>
                    <div>/</div>
                    <h1>{t("marquee.h2")}</h1>
                    <div>/</div>
                    <h1>{t("marquee.h3")}</h1>
                    <div>/</div>
                    <h1>{t("marquee.h4")}</h1>
                    <div>/</div>
                </div>
            </Marquee>
        </div>
    );
}

export default Questions;
