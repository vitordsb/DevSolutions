import styled from "styled-components"
import { FaWhatsapp, FaEye } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useLanguage } from "../../../context/LanguageContext";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    border-radius: 8px;
    transition: calc(.3s);
    cursor: pointer;
    align-items: center;
    justify-content: center;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
    padding: 20px;
    background-color: var(--box-color);
    gap: 10px;
    img {
        width: 100%;
        height: 200px;
    }
    h1 {
        color: var(--text-color);
        text-align: center;
        font-size: 22px;
    }
    p {
        color: var(--text-color);
        text-align: justify;
        font-size: 18px;
        width: 350px;
        hyphens: auto;
    }
    &:hover {
        transform: scale(1.025);
    }
`
const Links = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    a {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        margin-top: 10px;
        padding: 10px;
        border-radius: 5px;
        color: var(--text-color);
        font-weight: bolder;
        background-color: #00f84a;
        transition: calc(.3s);
        &:hover {
            transform: scale(1.025);
            background-color: #009900;
            color: white;
        }
    }
`
const LinkTwo = styled(Link)`
    background-color: var(--second-color) !important;
    color: var(--text-color) !important;
    transition: calc(.3s);
    &:hover {
        transform: scale(1.025);
        background-color: var(--hover-color) !important;
        color: white !important;
    }
`

export default function CardService({ title, description, img, linktwo }) {
    const { language } = useLanguage();
    return (
        <Container>
            <img src={img}/>
            <h1>{title}</h1>
            <p>{description}</p>
            <Links>
                <Link target="_blank" to="https://wa.me/11957519999">
                    <FaWhatsapp />
                    {language === 'pt' ? 'Talk to an expert' : 'Falar com especialista'}
                </Link>
                <LinkTwo to={linktwo}>
                    <FaEye />
                    {language === 'pt' ? 'See more' : 'Ver mais'}
                </LinkTwo>
            </Links>
        </Container>
    )
}