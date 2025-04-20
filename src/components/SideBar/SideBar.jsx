import LanguageSwitcher from "../Switchers/LanguageSwitcher"
import { Container, Links, Title, Side, Partner, Hooks } from "./SideBar"
import { Link } from "react-router-dom"
import ThemeSwitcher from "../Switchers/ThemeSwichers"
import { FaHome, FaCode } from "react-icons/fa"
import { useLanguage } from "../../context/LanguageContext"
import { BsFillPeopleFill } from "react-icons/bs";
import { useTheme } from "../../context/ThemeContext"
import { IoIosBusiness } from "react-icons/io";

const SideBar = () => {
    const { theme } = useTheme();
    const logoSrc = theme === "dark" ? "../../../public/images/DDarkSemFundo.png" : "../../../public/images/D.png";
    
    const {language}  = useLanguage();
    return (
        <Container>
            <Title>
                <Link to="/">
                    <img src={logoSrc} alt="" />
                </Link>
            </Title>
            <Side>
            <Links>
                    <Link to="/services">
                        <FaCode />
                        <p>{language === 'pt' ? 'Services' : 'Serviços'}</p>
                    </Link>
                    <Link to="/about">
                        <FaHome />
                        <p>{language === 'pt' ? 'About us' : 'Sobre nós'}</p>
                    </Link>
                    <Link to="/experience">
                        <IoIosBusiness />
                        <p>{language === 'pt' ? 'Experiences' : 'Experiências'}</p>
                    </Link>
                    <Link to="/consultant">
                        <BsFillPeopleFill />
                        <p>{language === 'pt' ? 'Consultancy' : 'Consultoria'}</p>
                    </Link>
            </Links>
            </Side>
            <Hooks>
                <LanguageSwitcher />
                <ThemeSwitcher />
            </Hooks>
        </Container>
    )
}

export default SideBar