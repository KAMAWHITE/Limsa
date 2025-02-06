import React from 'react'
import Fisrt from '../../assets/ataevbahodirbuild.jpg'
import Second from '../../assets/autozoomrental.jpg'
import Third from '../../assets/it-time-academy.png'
import Fourth from '../../assets/homekit.jpg'
import Fifth from '../../assets/uzloyal.jpg'
import Sixth from '../../assets/namanganoits.jpg'
import Seventh from '../../assets/propartnyor.jpg'
import Eighth from '../../assets/zamontour.jpg'

function Projects() {
    return (
        <div className='max-w-[1500px] mx-auto bg-[#161616] text-center py-10'>
            <h1 className='text-[30px] text-white font-bold'>Бизнинг охирги лойиҳаларимиз</h1>
            <div className='grid grid-cols-1 px-2 text-start sm:grid-cols-2 sm:px-3 md:grid-cols-3 md:px-3 lg:px-5'>
                <div className="max-w-full mx-auto bg-[#161616] text-white p-5 sm:p-2 md:p-3 hover:scale-105">
                    <h1 className="text-[20px] font-bold mb-4">ataevbahodirbuild.uz</h1>
                    <div className="w-full overflow-hidden">
                        <img src={Fisrt} alt="Project Screenshot" className="w-full h-[220px] object-cover" />
                    </div>
                    <p className="text-[17px] mt-4 leading-5">Ataev Bahodir Build – сифатли қурилиш ва <br />таъмирлаш хизматлари! Бизни танланг,<br />орзуингиздаги уйни яратинг.</p>
                    <hr className='mt-8 text-gray-500' />
                </div>
                <div className="max-w-full mx-auto bg-[#161616] text-white p-5 sm:p-2 md:p-3 hover:scale-105">
                    <h1 className="text-[20px] font-bold mb-4">autozoomrental.com</h1>
                    <div className="w-full overflow-hidden">
                        <img src={Second} alt="Project Screenshot" className="w-full h-[220px] object-cover" />
                    </div>
                    <p className="text-[17px] mt-4 leading-5">AutoZoomRental – қулай ва ишончли автотранспорт ижараси! Сайоҳатингизни бизнинг автомобиллар <br />билан янада ёқимли қилинг.</p>
                    <hr className='mt-8 text-gray-500' />
                </div>
                <div className="max-w-full mx-auto bg-[#161616] text-white p-5 sm:p-2 md:p-3 hover:scale-105">
                    <h1 className="text-[20px] font-bold mb-4">it-time-academy.uz</h1>
                    <div className="w-full overflow-hidden">
                        <img src={Third} alt="Project Screenshot" className="w-full h-[220px] object-cover" />
                    </div>
                    <p className="text-[17px] mt-4 leading-5">IT Time Academy – замонавий IT билимларнинг <br />манзили! Келажак касбларини биз <br />билан эгалланг.</p>
                    <hr className='mt-8 text-gray-500' />
                </div>
                <div className="max-w-full mx-auto bg-[#161616] text-white p-5 sm:p-2 md:p-3 hover:scale-105">
                    <h1 className="text-[20px] font-bold mb-4">homekit.uz</h1>
                    <div className="w-full overflow-hidden">
                        <img src={Fourth} alt="Project Screenshot" className="w-full h-[220px] object-cover" />
                    </div>
                    <p className="text-[17px] mt-4 leading-5">HomeKit – замонавий ва қулай смарт уй ечимлари! <br />Биз билан уйингиз хавфсизлиги ва қулайлигини <br />таъминланг.</p>
                    <hr className='mt-8 text-gray-500' />
                </div>
                <div className="max-w-full mx-auto bg-[#161616] text-white p-5 sm:p-2 md:p-3 hover:scale-105">
                    <h1 className="text-[20px] font-bold mb-4">uzloyal.uz</h1>
                    <div className="w-full overflow-hidden">
                        <img src={Fifth} alt="Project Screenshot" className="w-full h-[220px] object-cover" />
                    </div>
                    <p className="text-[17px] mt-4 leading-5">UzLoyal – ишончли ва қулай лояллик тизими! <br />Мижозларингизни рағбатлантиришнинг энг <br />самарали усули.</p>
                    <hr className='mt-8 text-gray-500' />
                </div>
                <div className="max-w-full mx-auto bg-[#161616] text-white p-5 sm:p-2 md:p-3 hover:scale-105">
                    <h1 className="text-[20px] font-bold mb-4">namanganoits.uz</h1>
                    <div className="w-full overflow-hidden">
                        <img src={Sixth} alt="Project Screenshot" className="w-full h-[220px] object-cover" />
                    </div>
                    <p className="text-[17px] mt-4 leading-5">Namangan ITS – замонавий IT билимлар ва <br />кўникмалар маркази! Ҳар қадамда янги <br />имкониятларни қўлга киритинг.</p>
                    <hr className='mt-8 text-gray-500' />
                </div>
                <div className="max-w-full mx-auto bg-[#161616] text-white p-5 sm:p-2 md:p-3 hover:scale-105">
                    <h1 className="text-[20px] font-bold mb-4">propartnyor.uz</h1>
                    <div className="w-full overflow-hidden">
                        <img src={Seventh} alt="Project Screenshot" className="w-full h-[220px] object-cover" />
                    </div>
                    <p className="text-[17px] mt-4 leading-5">ProPartnyor – ишончли ва самарали ҳамкорликнинг <br />манзили! Бизнесингизнинг муваффақияти учун <br />биргаликда ҳаракат қиламиз.</p>
                    <hr className='mt-8 text-gray-500' />
                </div>
                <div className="max-w-full mx-auto bg-[#161616] text-white p-5 sm:p-2 md:p-3 hover:scale-105">
                    <h1 className="text-[20px] font-bold mb-4">zamontour.uz</h1>
                    <div className="w-full overflow-hidden">
                        <img src={Eighth} alt="Project Screenshot" className="w-full h-[220px] object-cover" />
                    </div>
                    <p className="text-[17px] mt-4 leading-5">ZamonTour – хушбахт сайёҳлик тажрибасини биз <br />билан тажриба қилинг! Биз билан сафарингиз <br />янада ёқимли бўлиши кафолатланади.</p>
                    <hr className='mt-8 text-gray-500' />
                </div>
            </div>
        </div>
    )
}

export default Projects