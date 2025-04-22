import { useLanguage } from '../../../context/LanguageContext';
import { GiBrazilFlag, GiUsaFlag } from "react-icons/gi";
import styled from 'styled-components';

const StyledGiBrazilFlag = styled(GiBrazilFlag)`
  color: #f6f601;
  background-color: #03b600;
  border-radius: 50%;
  font-size: 25px;
`
const StyledGiUsaFlag = styled(GiUsaFlag)`
  color: #ff0000;
  border-radius: 50%;
  background-color: #d5d5d5;
  font-size: 25px;
` 

const Button = styled.button`
  border: none;
  background-color: var(--second-color) !important;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  gap: 5px;
  font-weight: bold;
  transition: calc(.3s);
  color: var(--text-color);
  &:hover {
    transform: scale(1.025);
    background-color: var(--hover-color) !important;
  }
`;  

export default function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button onClick={toggleLanguage}>
      {language === 'pt' ? <StyledGiBrazilFlag /> : <StyledGiUsaFlag />}
      {language === 'pt' ? "PT-BR" : "EN-US"}
    </Button>
  );
};

