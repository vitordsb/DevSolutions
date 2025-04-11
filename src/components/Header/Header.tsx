import style from "./Header.module.css"
import { Link } from "react-router-dom"

const Header = () => {

    return (
        <div className={style.header}>
            <div className={style.logo}>    
                <img src="/images/DevSolutionsBlackSemFundo.png" alt="" />
            </div>
            <div className={style.links}>
                <Link to="/">
                    <img src="/icons/homeIcon.svg" alt="" />Início
                </Link>
                <Link to="/services">
                    <img src="/icons/servicesIcon.svg" alt="" />Serviços
                </Link>
                <Link to="/projects">
                    <img src="/icons/projectsIcon.svg" alt="" />Projetos
                </Link>
                <Link to="/aboutus">
                    <img src="/icons/aboutusIcon.svg" alt="" />Sobre nós
                </Link>
            </div>
        </div>
    )
}

export default Header