import React from 'react'
import Fisrt from '../../assets/ataevbahodirbuild.jpg'
import Second from '../../assets/autozoomrental.jpg'
import Third from '../../assets/it-time-academy.png'
import Fourth from '../../assets/homekit.jpg'
import Fifth from '../../assets/uzloyal.jpg'
import Sixth from '../../assets/namanganoits.jpg'
import Seventh from '../../assets/propartnyor.jpg'
import Eighth from '../../assets/zamontour.jpg'
import { useTranslation } from 'react-i18next';

function Projects() {
    const { t } = useTranslation();
    return (
        <div className='max-w-[1500px] mx-auto bg-[#161616] text-center py-10'>
            <h1 className='text-[30px] text-white font-bold'>{t("projects.title")}</h1>
            <div className='grid grid-cols-1 px-1 text-start sm:grid-cols-2 sm:px-3 md:grid-cols-3 md:px-3 lg:px-5'>
                <div className="max-w-full mx-auto bg-[#161616] text-white p-5 sm:p-2 md:p-3 hover:scale-105">
                    <h1 className="text-[20px] font-bold mb-4">ataevbahodirbuild.uz</h1>
                    <div className="w-full overflow-hidden">
                        <img src={Fisrt} alt="Project Screenshot" className="w-full h-[220px] object-cover" />
                    </div>
                    <p className="text-[17px] mt-4 leading-5">{t("projects.p1")}</p>
                    <hr className='mt-8 text-gray-500' />
                </div>
                <div className="max-w-full mx-auto bg-[#161616] text-white p-5 sm:p-2 md:p-3 hover:scale-105">
                    <h1 className="text-[20px] font-bold mb-4">autozoomrental.com</h1>
                    <div className="w-full overflow-hidden">
                        <img src={Second} alt="Project Screenshot" className="w-full h-[220px] object-cover" />
                    </div>
                    <p className="text-[17px] mt-4 leading-5">{t("projects.p2")}</p>
                    <hr className='mt-8 text-gray-500' />
                </div>
                <div className="max-w-full mx-auto bg-[#161616] text-white p-5 sm:p-2 md:p-3 hover:scale-105">
                    <h1 className="text-[20px] font-bold mb-4">it-time-academy.uz</h1>
                    <div className="w-full overflow-hidden">
                        <img src={Third} alt="Project Screenshot" className="w-full h-[220px] object-cover" />
                    </div>
                    <p className="text-[17px] mt-4 leading-5">{t("projects.p3")}</p>
                    <hr className='mt-8 text-gray-500' />
                </div>
                <div className="max-w-full mx-auto bg-[#161616] text-white p-5 sm:p-2 md:p-3 hover:scale-105">
                    <h1 className="text-[20px] font-bold mb-4">homekit.uz</h1>
                    <div className="w-full overflow-hidden">
                        <img src={Fourth} alt="Project Screenshot" className="w-full h-[220px] object-cover" />
                    </div>
                    <p className="text-[17px] mt-4 leading-5">{t("projects.p4")}</p>
                    <hr className='mt-8 text-gray-500' />
                </div>
                <div className="max-w-full mx-auto bg-[#161616] text-white p-5 sm:p-2 md:p-3 hover:scale-105">
                    <h1 className="text-[20px] font-bold mb-4">uzloyal.uz</h1>
                    <div className="w-full overflow-hidden">
                        <img src={Fifth} alt="Project Screenshot" className="w-full h-[220px] object-cover" />
                    </div>
                    <p className="text-[17px] mt-4 leading-5">{t("projects.p5")}</p>
                    <hr className='mt-8 text-gray-500' />
                </div>
                <div className="max-w-full mx-auto bg-[#161616] text-white p-5 sm:p-2 md:p-3 hover:scale-105">
                    <h1 className="text-[20px] font-bold mb-4">namanganoits.uz</h1>
                    <div className="w-full overflow-hidden">
                        <img src={Sixth} alt="Project Screenshot" className="w-full h-[220px] object-cover" />
                    </div>
                    <p className="text-[17px] mt-4 leading-5">{t("projects.p6")}</p>
                    <hr className='mt-8 text-gray-500' />
                </div>
                <div className="max-w-full mx-auto bg-[#161616] text-white p-5 sm:p-2 md:p-3 hover:scale-105">
                    <h1 className="text-[20px] font-bold mb-4">propartnyor.uz</h1>
                    <div className="w-full overflow-hidden">
                        <img src={Seventh} alt="Project Screenshot" className="w-full h-[220px] object-cover" />
                    </div>
                    <p className="text-[17px] mt-4 leading-5">{t("projects.p7")}</p>
                    <hr className='mt-8 text-gray-500' />
                </div>
                <div className="max-w-full mx-auto bg-[#161616] text-white p-5 sm:p-2 md:p-3 hover:scale-105">
                    <h1 className="text-[20px] font-bold mb-4">zamontour.uz</h1>
                    <div className="w-full overflow-hidden">
                        <img src={Eighth} alt="Project Screenshot" className="w-full h-[220px] object-cover" />
                    </div>
                    <p className="text-[17px] mt-4 leading-5">{t("projects.p8")}</p>
                    <hr className='mt-8 text-gray-500' />
                </div>
            </div>
        </div>
    )
}

export default Projects