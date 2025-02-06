import React from 'react'
import FormBgi from '../../assets/formbgi.png'

function Form() {
    return (
        <div className='max-w-[1500px] mx-auto' style={{ backgroundImage: `url(${FormBgi})`, backgroundSize: 'cover' }}>
            <div className='grid grid-cols-1 pt-40 px-5 gap-5 pb-20 md:grid-cols-[5fr_4fr]'>
                <div className='grid grid-cols-1 pb-5'>
                    <h1 className='text-[35px] text-white font-bold leading-11'>Бизнесингиз учун веб сайтга хозироқ буюртма беринг, Ва биздан кичик бир совға 10% чегирмага эга бўлинг!</h1>
                    <p className='text-[#6c2dba] text-[18px]'>Ҳар бир мижозни рози қилиш бу бизнинг олий мақсадимиз - LIMSA</p>
                    <div>
                        <h2 className='text-white text-[20px] font-bold'>Саҳифалар</h2>
                        <p className='text-[#8b8b8b] text-[18px] pt-5'>Бош саҳифа</p>
                        <p className='text-[#8b8b8b] text-[18px]' >Хизматларимиз</p>
                    </div>
                </div>
                <div className='grid grid-cols-1 gap-y-5'>
                    <h1 className='text-[35px] text-white font-bold leading-11'>Маълумотингизни қолдиринг</h1>
                    <input className='text-white rounded-[40px] pl-7 py-4 bg-[#303030]' type="text" placeholder="Исмингиз" />
                    <input className='text-white rounded-[40px] pl-7 py-4 bg-[#303030]' type="tel" placeholder="+998901234567" name="" id="" />
                    <input className='text-white rounded-[40px] pl-7 py-3 pb-30 bg-[#303030]' type="text" placeholder="Сизнинг хабарингиз" />
                    <button className='w-[170px] bg-[#6c2dba] text-white text-[15px] font-medium py-3 mt-3 px-8 rounded-full'>Юбориш</button>
                </div>
            </div>
        </div>
    )
}

export default Form