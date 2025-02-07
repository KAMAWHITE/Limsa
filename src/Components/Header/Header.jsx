import React, { useEffect, useState } from "react";
import Logo from "../../assets/Logo.png";
import { useTranslation } from "react-i18next";
import { useLocation, Link } from 'react-router-dom';

function NavLink({ to, children }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`text-[20px] text-white ${isActive ? 'border-b-2 border-purple-500' : ''}`}
    >
      {children}
    </Link>
  );
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const [scrolled, setIsScrolled] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleDropdown = () => setIsOpen(!isOpen);
  const toggleMenu = () => setIsMenu(!isMenu);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`${scrolled ? "bg-black" : "bg-[#191722]"} max-w-[1500px] px-4 sm:px-6 md:px-7 lg:px-8 py-5 mx-auto flex justify-between items-center gap-2`}
    >
      <div className="flex items-center gap-8 ">
        <div className="text-center">
          <img className="w-[150px]" src={Logo} alt="Logo" />
        </div>
        <div className="hidden lg:flex gap-5 text-[20px] items-center text-white">
          <NavLink to="/">
            {t("header.bosh_saxifa")}
          </NavLink>
          <NavLink to="/services">
            {t("header.xizmatlarimiz")}
          </NavLink>
          <NavLink to="/portfolio">
            {t("header.bizning_ishlar")}
          </NavLink>
          <NavLink to="/pricing">
            {t("header.narxlar")}
          </NavLink>
        </div>
        <div className="relative">
          <button
            className="text-[15px] text-white flex items-center gap-2 hover:bg-[#6c2dba] p-2 rounded-lg transition-all duration-300"
            onClick={toggleDropdown}
          >
            {i18n.language.toUpperCase()} ▼
          </button>
          {isOpen && (
            <div className="absolute top-full left-0 mt-2 p-2 rounded-md shadow-lg bg-[#161616] ring-1 ring-black ring-opacity-5">
              <ul className="text-white">
                <li
                  className="p-2 hover:bg-[#6c2dba] cursor-pointer rounded-lg transition-all duration-300"
                  onClick={() => changeLanguage("uz")}
                >
                  {t("lang_drop.uz")}
                </li>
                <li
                  className="p-2 hover:bg-[#6c2dba] cursor-pointer rounded-lg transition-all duration-300"
                  onClick={() => changeLanguage("ru")}
                >
                  {t("lang_drop.ru")}
                </li>
                <li
                  className="p-2 hover:bg-[#6c2dba] cursor-pointer rounded-lg transition-all duration-300"
                  onClick={() => changeLanguage("en")}
                >
                  {t("lang_drop.en")}
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div className="relative lg:hidden">
          <button className="text-[20px] text-white" onClick={toggleMenu}>
            {t("menu")}
          </button>
          {isMenu && (
            <div className="absolute top-full right-0 mt-2 p-2 rounded-md shadow-lg bg-[#161616] ring-1 ring-black ring-opacity-5">
              <div className="grid gap-2 text-white">
                <NavLink to="/">
                  {t("header.bosh_saxifa")}
                </NavLink>
                <NavLink to="/services">
                  {t("header.xizmatlarimiz")}
                </NavLink>
                <NavLink to="/portfolio">
                  {t("header.bizning_ishlar")}
                </NavLink>
                <NavLink to="/pricing">
                  {t("header.narxlar")}
                </NavLink>
              </div>
            </div>
          )}
        </div>
        <button className="w-full text-white rounded-[10px] text-[10px] bg-[#6c2dba] py-1 px-1 sm:text-[15px] sm:px-2 md:px-3 md:py-2 lg:px-5 lg:py-3 lg:rounded-[15px]">
          +998 (95) 770 08 20
        </button>
      </div>
    </div>
  );
}

export default Header;
