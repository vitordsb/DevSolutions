import LanguageSwitcher from "../Switchers/LanguageSwitcher"
import { Container, Links, Title, Side, Hooks } from "./styles"
import { Link } from "react-router-dom"
import ThemeSwitcher from "../Switchers/ThemeSwichers"
import { FaHome, FaCode } from "react-icons/fa"
import { useLanguage } from "../../../context/LanguageContext"
import { BsFillPeopleFill } from "react-icons/bs";
import { useTheme } from "../../../context/ThemeContext"
import { FaNewspaper } from "react-icons/fa";
import { IoIosBusiness } from "react-icons/io";

const SideBar = () => {
    const { theme } = useTheme();
    const logoSrc = theme === "dark" ? "/images/DDarkSemFundo.png" : "/images/D.png";
    
    const {language}  = useLanguage();
    return (
        <Container>
            <Title>
                <Link to="/">
                    <img src={logoSrc} alt="" />
                </Link>
            <Side>
                <Links>
                    <Link to="/">
                        <FaHome />
                        <p>{language === 'pt' ? 'Home' : 'Início'}</p>
                    </Link>
                    <Link to="/services">
                        <FaCode />
                        <p>{language === 'pt' ? 'Services' : 'Serviços'}</p>
                    </Link>
                    <Link to="/aboutus">
                        <FaHome />
                        <p>{language === 'pt' ? 'About us' : 'Sobre nós'}</p>
                    </Link>
                    <Link to="/experience">
                        <IoIosBusiness />
                        <p>{language === 'pt' ? 'Experiences' : 'Experiências'}</p>
                    </Link>
                    <Link to="/consulting">
                        <BsFillPeopleFill />
                        <p>{language === 'pt' ? 'Consultancy' : 'Consultoria'}</p>
                    </Link>
                    <Link to="/newsletter">
                        <FaNewspaper />
                        <p>{language === 'pt' ? 'Newsletter' : 'Novidades'}</p>
                    </Link>
            </Links>
            </Side>
            </Title>
            <Hooks>
                <LanguageSwitcher />
                <ThemeSwitcher />
            </Hooks>
        </Container>
    )
}

export default SideBar