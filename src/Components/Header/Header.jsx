import React, { useEffect, useState } from 'react';
import Logo from '../../assets/Logo.png';
import { NavLink } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const [scrolled, setIsScrolled] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  const toggleMenu = () => setIsMenu(!isMenu);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`${scrolled ? "bg-black" : "bg-[#191722]"} max-w-[1500px] px-10 py-5 mx-auto flex justify-between items-center gap-2`}>
      <div className="flex items-center gap-5">
        <div className="text-center">
          <img className="w-[150px]" src={Logo} alt="Logo" />
        </div>
        <div className="hidden lg:flex gap-3 text-[20px] items-center text-white">
          <NavLink to="/">Бош сахифа</NavLink>
          <NavLink to="/services">Хизматларимиз</NavLink>
          <NavLink to="/portfolio">Бизнинг ишлар</NavLink>
          <NavLink to="/pricing">Нархлар</NavLink>
        </div>
        <div className="relative">
          <button className='text-[20px] text-white items-center text-center' onClick={toggleDropdown}>Уз</button>
          {isOpen && (
            <div className="absolute top-full left-0 mt-2 p-2 rounded-md shadow-lg bg-[#161616] ring-1 ring-black ring-opacity-5">
              <div className="grid gap-2 text-white">
                <a href="#">Уз</a>
                <a href="#">Ру</a>
                <a href="#">Eng</a>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div className="relative lg:hidden">
          <button className="text-[20px] text-white" onClick={toggleMenu}>Меню</button>
          {isMenu && (
            <div className="absolute top-full right-0 mt-2 p-2 rounded-md shadow-lg bg-[#161616] ring-1 ring-black ring-opacity-5">
              <div className="grid gap-2 text-white">
                <NavLink to="/" onClick={() => setIsMenu(false)}>Бош сахифа</NavLink>
                <NavLink to="/services" onClick={() => setIsMenu(false)}>Хизматларимиз</NavLink>
                <NavLink to="/portfolio" onClick={() => setIsMenu(false)}>Бизнинг ишлар</NavLink>
                <NavLink to="/pricing" onClick={() => setIsMenu(false)}>Нархлар</NavLink>
              </div>
            </div>
          )}
        </div>
        <button className="w-full text-white rounded-[10px] text-[10px] bg-[#6c2dba] py-1 px-1 sm:text-[15px] sm:px-2 md:px-3 md:py-2 lg:px-5 lg:py-3 lg:rounded-[15px]">+998 (95) 770 08 20</button>
      </div>
    </div>
  );
}

export default Header;