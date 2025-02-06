import React from 'react';
import Hero_bg from '../../assets/hero_bg.jpg';
import Hero_comp from '../../assets/hero_comp.png';

function Hero() {
    return (
        <div className="max-w-[1500px] mx-auto bg-cover bg-center" style={{ backgroundImage: `url(${Hero_bg})`, backgroundSize: 'cover' }}>
            <div className='grid grid-cols-1 gap-5 py-20 px-15 md:grid-cols-[5fr_7fr]'>
                <div className='grid-cols-1 text-white md:pt-0 lg:pt-28'>
                    <h1 className='text-[30px] font-bold leading-[40px]'>Сизнинг бизнесингизни <br />ривожлантириш учун мукаммал <br />'IT' ечимлар!</h1>
                    <p className='text-[18px] mt-7 leading-[25px]'>Лойиҳангизни 10 йилдан ортиқ тажрибага эга <br />мутахассисларга ишониб топширинг ва қисқа вақт ичида <br />юқори муваффақиятларга эришинг.</p>
                    <button className="bg-[#6c2dba] hover:bg-transparent mt-2 text-white font-medium rounded-[20px] px-6 py-2.5 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">Алоқа</button>
                </div>
                <div>
                    <img src={Hero_comp} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Hero;
