import BackButton from "../../../../components/BackButton/Button"
import { Link } from "react-router-dom"
import styled from "styled-components"
import {FaWhatsapp, FaEye} from "react-icons/fa"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 20px;
    justify-content: center;
    align-items: center;
    padding: 20px;
`

const Box = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    border-radius: 10px;
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
        font-size: 28px;
    }
    p {
        color: var(--text-color);
        text-align: justify;
        font-size: 16px;
    }
`    

const Resouces = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    border-radius: 10px;
    transition: calc(.3s);
    cursor: pointer;
    align-items: center;
    justify-content: center;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
    padding: 20px;
    background-color: var(--box-color);
    gap: 10px;
    h1 {
        color: var(--text-color);
        text-align: center;
        font-size: 28px;
    }    
    a {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        text-decoration: none;
        color: var(--text-color) !important;
        font-size: 16px;
        transition: calc(.3s);
        &:hover {
            transform: scale(1.025);
        }    
    }
`

export default function Skellet({img, title, description, link}) {
    return (
        <Container>
            <Link to={link}>
                <BackButton>Back</BackButton>
            </Link>
            <Box>
                <img src={img}/>
                <h1>{title}</h1>
                <p>{description}</p>
            </Box>
            <Resouces>
                <Link>
                    <FaWhatsapp />
                    Talk to an expert
                </Link>
                <Link>
                    <FaEye />
                    See more
                </Link>
            </Resouces>
        </Container>
    )
}