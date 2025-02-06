import React, { useState } from 'react';
import QBoy from '../../assets/questions_boy.png';
import QGirl from '../../assets/questions_girl.png';
import Marquee from 'react-fast-marquee'

function Questions() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleDropdown = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "Нега нархлар арзон?",
            answer: "Бизда нархлар сифатдан ташқари оптимал ечимлар асосида ишлаб чиқилган.",
        },
        {
            question: "Келажакда сайтни ўзим таҳрир қила оламанми?",
            answer: "Ҳа, сиз учун қулай таҳрир қилиш имкониятларини яратиб берамиз.",
        },
        {
            question: "Сайт битганидан кейин қўллаб-қувватлаб турасизларми?",
            answer: "Албатта, биз сайтни ишга туширгандан кейин ҳам хизматлар кўрсатамиз.",
        },
    ];

    return (
        <div className="max-w-[1500px] mx-auto bg-[#161616]">
            <div className="grid grid-cols-1 gap-x-2 text-center items-center md:grid-cols-2 py-20 px-10">
                <div className="grid grid-cols-2 gap-x-2">
                    <div>
                        <img src={QBoy} alt="" />
                    </div>
                    <div className="pt-15">
                        <img src={QGirl} alt="" />
                    </div>
                </div>
                <div className="px-0 mb-25 sm:px-10 lg:px-25 ">
                    <h1 className="font-bold text-white text-[40px] text-start">Энг кўп бериладиган <br />саволлар</h1>
                    {faqs.map((faq, index) => (
                        <div key={index} className="border rounded-[15px] border-gray-600 my-3">
                            <button
                                onClick={() => toggleDropdown(index)}
                                className={`w-full text-left flex justify-between items-center py-3 px-4 focus:outline-none ${openIndex === index ? "text-indigo-600" : "text-white"
                                    }`}
                            >
                                <span>{faq.question}</span>
                                <span>
                                    {openIndex === index ? "▲" : "▼"}
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
                    <div>
                        <h1>ВЕБ САЙТ ЯРАТИШ ХИЗМАТИ</h1>
                    </div>
                    <div>/</div>
                    <div>
                        <h1>МОБИЛ ИЛОВАЛАР</h1>
                    </div>
                    <div>/</div>
                    <div>
                        <h1>АВТОМАТЛАШТИРИШ ТИЗИМЛАРИ</h1>
                    </div>
                    <div>/</div>
                    <div>
                        <h1>РАКАМЛИ ЕЧИМЛАР</h1>
                    </div>
                    <div>/</div>
                </div>
            </Marquee>
        </div>
    );
}

export default Questions;
