import React from 'react';
import { FaComputer } from "react-icons/fa6";
import { GrUserAdmin } from "react-icons/gr";
import { MdSecurity } from "react-icons/md";
import { FaHeadset } from "react-icons/fa";
import { SiBisecthosting } from "react-icons/si";
import { CiGlobe } from "react-icons/ci";
import { useTranslation } from 'react-i18next';

function Advantages() {
    const { t } = useTranslation();
    return (
        <div className='max-w-[1500px] mx-auto bg-[#161616] text-center'>
            <h1 className='text-[35px] text-white font-bold leading-12'>{t("advantages.title")}</h1>
            <h1 className='text-[35px] text-[#6c2dba] font-bold leading-12 mt-8 w-full'>{t("advantages.title_text")}</h1>
            <div className='grid grid-cols-1 gap-5 py-15 px-5 text-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
                <div className='grid grid-cols-[2fr_5fr] gap-2 py-5 px-3 bg-[#121111] rounded-lg'>
                    <div className='grid grid-cols-1 gap-5 text-center items-center'>
                        <FaComputer className='text-[50px] ml-[25%] text-white' />
                        <p className='text-[30px] text-white mt-[-15%]'>01</p>
                    </div>
                    <div className='grid grid-cols-1 text-start pr-1'>
                        <h1 className='text-[24px] text-white font-bold'>{t("advantages.fact1.title")}</h1>
                        <p className='text-[14px] text-[#b1b1b1] leading-6'>{t("advantages.fact1.text")}</p>
                    </div>
                </div>
                <div className='grid grid-cols-[2fr_5fr] gap-2 py-5 px-3 bg-[#121111] rounded-lg'>
                    <div className='grid grid-cols-1 gap-5 text-center items-center'>
                        <GrUserAdmin className='text-[50px] ml-[25%] text-white' />
                        <p className='text-[30px] text-white mt-[-15%]'>02</p>
                    </div>
                    <div className='grid grid-cols-1 text-start pr-1'>
                        <h1 className='text-[24px] text-white font-bold'>{t("advantages.fact2.title")}</h1>
                        <p className='text-[14px] text-[#b1b1b1] leading-6'>{t("advantages.fact2.text")}</p>
                    </div>
                </div>
                <div className='grid grid-cols-[2fr_5fr] gap-2 py-5 px-3 bg-[#121111] rounded-lg'>
                    <div className='grid grid-cols-1 gap-5 text-center items-center'>
                        <MdSecurity className='text-[50px] ml-[25%] text-white' />
                        <p className='text-[30px] text-white mt-[-15%]'>03</p>
                    </div>
                    <div className='grid grid-cols-1 text-start pr-1'>
                        <h1 className='text-[24px] text-white font-bold'>{t("advantages.fact3.title")}</h1>
                        <p className='text-[14px] text-[#b1b1b1] leading-6'>{t("advantages.fact3.text")}</p>
                    </div>
                </div>
                <div className='grid grid-cols-[2fr_5fr] gap-2 py-5 px-3 bg-[#121111] rounded-lg'>
                    <div className='grid grid-cols-1 gap-5 text-center items-center'>
                        <FaHeadset className='text-[50px] ml-[25%] text-white' />
                        <p className='text-[30px] text-white mt-[-15%]'>04</p>
                    </div>
                    <div className='grid grid-cols-1 text-start pr-1'>
                        <h1 className='text-[24px] text-white font-bold'>{t("advantages.fact4.title")}</h1>
                        <p className='text-[14px] text-[#b1b1b1] leading-6'>{t("advantages.fact4.text")}</p>
                    </div>
                </div>
                <div className='grid grid-cols-[2fr_5fr] gap-2 py-5 px-3 bg-[#121111] rounded-lg'>
                    <div className='grid grid-cols-1 gap-5 text-center items-center'>
                        <SiBisecthosting className='text-[50px] ml-[25%] text-white' />
                        <p className='text-[30px] text-white mt-[-15%]'>05</p>
                    </div>
                    <div className='grid grid-cols-1 text-start pr-1'>
                        <h1 className='text-[24px] text-white font-bold'>{t("advantages.fact5.title")}</h1>
                        <p className='text-[14px] text-[#b1b1b1] leading-6'>{t("advantages.fact5.text")}</p>
                    </div>
                </div>
                <div className='grid grid-cols-[2fr_5fr] gap-2 py-5 px-3 bg-[#121111] rounded-lg'>
                    <div className='grid grid-cols-1 gap-5 text-center items-center'>
                        <CiGlobe className='text-[50px] ml-[25%] text-white' />
                        <p className='text-[30px] text-white mt-[-15%]'>06</p>
                    </div>
                    <div className='grid grid-cols-1 text-start pr-1'>
                        <h1 className='text-[24px] text-white font-bold'>{t("advantages.fact6.title")}</h1>
                        <p className='text-[14px] text-[#b1b1b1] leading-6'>{t("advantages.fact6.text")}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Advantages