import styled from "styled-components";


const ContainerButton = styled.button`
    border: none;
    background-color: var(--second-color) !important;
    border-radius: 10px;
    padding: 10px;
    cursor: pointer;
    background: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    gap: 5px;
    font-weight: bold;
    transition: calc(.3s);
    color: var(--text-color);
    &:hover {
      transform: scale(1.025);
    }
`;

export default function BackButton({ onClick, children }) {
    return (
        <ContainerButton onClick={onClick}>
            {children}
        </ContainerButton>
    );
}