import styled from "styled-components";

export const Container = styled.div`
    width: auto;
    background-color: var(--menuBar-color);
    position: sticky;
    justify-content: space-between;
    flex-direction: column;
    display: flex;
    align-items: center;
    height: 100vh;
    top: 0;
    border-right: 1px solid rgba(0, 0, 0, 0.2);
`
export const Side = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    height: auto;
    justify-content: space-between;
    align-items: start;
    padding: 20px;
`

export const Title = styled.div`
    display: flex;
    align-items: start;
    gap: 10px;
    flex-direction: column;
    img {
        width: 150px;
    }
`  
export const Partner = styled.div`
    padding: 12px;
    align-items: center;
    border-radius: 10px;
    background-color: var(--second-color);
    display: flex;
    gap: 10px;
    color: var(--text-color);
    display: flex;
    font-weight: bold;
`
export const Links = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    a {
        display: flex;
        gap: 5px;
        text-decoration: none;
        color: var(--text-color);
        font-weight: bold;
    }
    
`
export const Hooks = styled.div`
    display: flex;
    margin-bottom: 20px;
    align-items: start;
    justify-content: start;
    flex-direction: column;
    gap: 20px;
`