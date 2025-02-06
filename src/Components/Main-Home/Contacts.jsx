import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { FaShareAlt } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";

function Contacts() {
    return (
        <div className='max-w-[1500px] mx-auto bg-[#161616]'>
            <h1 className='pl-10 pt-20 text-white text-[40px] font-bold'>Контактлар</h1>
            <div className='grid grid-cols-1 px-2 lg:px-10 py-15 gap-10 sm:px-5 md:px-7 lg:grid-cols-2 items-center'>
                <div className='grid grid-cols-1 gap-x-5 gap-y-15 sm:grid-cols-2'>
                    <div className='grid grid-cols-1 sm:grid-cols-[1fr_5fr] items-center'>
                        <div className='text-[27px] text-white'>
                            <FaLocationDot />
                        </div>
                        <div className='grid grid-cols-1 gap-y-1.5'>
                            <h1 className='text-[18px] text-white font-bold'>Манзил</h1>
                            <p className='text-[14px] text-[#a1a1a1]'>Тошкент шаҳар Юнусобод тумани</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-[1fr_5fr] items-center'>
                        <div className='text-[27px] text-white'>
                            <FaPhoneVolume />
                        </div>
                        <div className='grid grid-cols-1 gap-y-1.5'>
                            <h1 className='text-[18px] text-white font-bold'>Телефон рақами</h1>
                            <p className='text-[14px] text-[#a1a1a1]'>+998 (95) 770 08 20</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-[1fr_5fr] items-center'>
                        <div className='text-[27px] text-white'>
                            <MdOutlineAccessTimeFilled />
                        </div>
                        <div className='grid grid-cols-1 gap-y-1.5'>
                            <h1 className='text-[18px] text-white font-bold'>Иш вақти</h1>
                            <p className='text-[14px] text-[#a1a1a1]'>9:00 18:00 Душанба-Шанба</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-[1fr_5fr] items-center'>
                        <div className='text-[27px] text-white'>
                            <FaShareAlt />
                        </div>
                        <div className='grid grid-cols-1'>
                            <h1 className='text-[18px] text-white font-bold'>Ижтимоий тармоқлар</h1>
                            <div className='flex text-center mt-1.5'>
                                <FaLinkedinIn className='text-[27px] text-white' />
                                <RiInstagramFill className='text-[27px] text-white ml-4' />
                                <FaTelegramPlane className='text-[27px] text-white ml-4' />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <iframe
                            className="w-full h-[303px] border-none rounded-[15px]"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2995.6582585126985!2d69.285562!3d41.338044!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b5f1f5cfd49%3A0x110bc2a5ed9856b7!2sLIMSA!5e0!3m2!1sru!2sus!4v1738782519643!5m2!1sru!2sus"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts