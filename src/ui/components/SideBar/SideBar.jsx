import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaHome, FaCode, FaNewspaper } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoIosBusiness } from "react-icons/io";
import LanguageSwitcher from "../Switchers/LanguageSwitcher";
import ThemeSwitcher from "../Switchers/ThemeSwichers";
import {
  Sidebar,
  HamburgerButton,
  MobileDrawer,
  SideContent,
  Title as SidebarTitle,
  Links,
  Hooks,
} from "./styles";
import { useLanguage } from "../../../context/LanguageContext";
import { useTheme } from "../../../context/ThemeContext";

export default function SideBar() {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const logoSrc = theme === "dark"
    ? "/images/DevSolutionsAlternate.png"
    : "/images/DevSolutions.png";

  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => setIsOpen(prev => !prev);

  const menuItems = [
    { to: "/", icon: <FaHome />, label: language === 'en' ? 'Início' : 'Home' },
    { to: "/services", icon: <FaCode />, label: language === 'en' ? 'Serviços' : 'Services' },
    { to: "/aboutus", icon: <FaHome />, label: language === 'en' ? 'Sobre nós' : 'About us' },
    { to: "/experience", icon: <IoIosBusiness />, label: language === 'en' ? 'Experiências' : 'Experiences' },
    { to: "/consulting", icon: <BsFillPeopleFill />, label: language === 'en' ? 'Consultoria' : 'Consultancy' },
    { to: "/newsletter", icon: <FaNewspaper />, label: language === 'en' ? 'Novidades' : 'Newsletter' },
  ];

  return (
    <>
      <HamburgerButton onClick={toggleDrawer}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </HamburgerButton>

      <Sidebar>
        <SideContent>

          <Links>
            {menuItems.map(item => (
              <Link key={item.to} to={item.to} onClick={() => setIsOpen(false)}>
                {item.icon}
                <p>{item.label}</p>
              </Link>
            ))}
          </Links>
        </SideContent>

        <Hooks>
          <LanguageSwitcher />
          <ThemeSwitcher />
        </Hooks>
      </Sidebar>

      <MobileDrawer isOpen={isOpen}>
        <SideContent>
          <SidebarTitle>
            <Link to="/">
              <img src={logoSrc} alt="DevSolutions Logo" />
            </Link>
          </SidebarTitle>

          <Links>
            {menuItems.map(item => (
              <Link key={item.to} to={item.to} onClick={toggleDrawer}>
                {item.icon}
                <p>{item.label}</p>
              </Link>
            ))}
          </Links>

          <Hooks>
            <LanguageSwitcher />
            <ThemeSwitcher />
          </Hooks>
        </SideContent>
      </MobileDrawer>
    </>
  );
}
