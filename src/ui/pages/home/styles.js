import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    background-color: var(--bg-color);
`
export const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
`
export const LeftBox = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 700px;
    padding: 50px;
    background-color: var(--box-color);
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    align-items: start;
    justify-content: space-between;
    color: var(--text-color);
    gap: 10px;
    text-align: start;
    h1 {
        width: auto;
        font-size: 48px;
    }
    p {
        width: auto;
        text-justify: inter-word;
        text-align: justify;
        hyphens: auto;
        font-size: 20px;
    }
`
export const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    p {
        color: var(--text-color);
        font-size: 20px;
        font-weight: bolder;
    }
`
export const Buttons = styled.div`
    display: flex;
    margin-top: 20px;
    width: 100%;
    gap: 10px;
    justify-content: start;
`
export const Button = styled.button`
    border: none;
    background-color: var(--second-color) !important;
    border-radius: 5px;
    padding: 10px;
    gap: 5px;
    cursor: pointer;
    background: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: bold;
    transition: calc(.3s);
    color: var(--text-color);
    &:hover {
      background-color: var(--hover-color) !important;
      transform: scale(1.025);
      color: white;
    }
`

export const NewsLetter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: auto;
    justify-content: center;
    margin-top: 20px;
    padding: 5px;
    border-radius: 5px;
    color: var(--text-color);
    text-align: center;
    p {
        font-size: 18px;
        font-weight: bolder;
    }
    a {
        transition: calc(.3s);
        text-decoration: none;
        color: var(--hover-color);
        border-bottom: 1px solid var(--hover-color);
    }
`