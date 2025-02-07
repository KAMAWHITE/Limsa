import React from 'react'
import FormBgi from '../../assets/formbgi.png'
import { useTranslation } from 'react-i18next';

function Form() {
    const { t } = useTranslation();
    return (
        <div className='max-w-[1500px] mx-auto' style={{ backgroundImage: `url(${FormBgi})`, backgroundSize: 'cover' }}>
            <div className='grid grid-cols-1 pt-40 px-5 gap-5 pb-20 md:grid-cols-[5fr_4fr]'>
                <div className='grid grid-cols-1 pb-5'>
                    <h1 className='text-[35px] text-white font-bold leading-11'>{t("form.big_title")}</h1>
                    <p className='text-[#6c2dba] text-[18px]'>{t("form.title")}</p>
                    <div>
                        <h2 className='text-white text-[20px] font-bold'>{t("form.second_title")}</h2>
                        <p className='text-[#8b8b8b] text-[18px] pt-5'>{t("form.text")}</p>
                        <p className='text-[#8b8b8b] text-[18px]' >{t("form.second_text")}</p>
                    </div>
                </div>
                <div className='grid grid-cols-1 gap-y-5'>
                    <h1 className='text-[35px] text-white font-bold leading-11'>{t("form.form_title")}</h1>
                    <input className='text-white rounded-[40px] pl-7 py-4 bg-[#303030]' type="text" placeholder={t("form.ism")} />
                    <input className='text-white rounded-[40px] pl-7 py-4 bg-[#303030]' type="tel" placeholder="+998901234567" name="" id="" />
                    <input className='text-white rounded-[40px] pl-7 py-3 pb-30 bg-[#303030]' type="text" placeholder={t("form.placeholder")} />
                    <button className='w-[170px] bg-[#6c2dba] text-white text-[15px] font-medium py-3 mt-3 px-8 rounded-full'>{t("form.button")}</button>
                </div>
            </div>
        </div>
    )
}

export default Form