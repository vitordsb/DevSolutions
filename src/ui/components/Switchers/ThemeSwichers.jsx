import { useTheme } from '../../../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import styled from 'styled-components';
import { useLanguage } from '../../../context/LanguageContext';

const StyledFaSun = styled(FaSun)`
    color: white;
    font-size: 25px;
`
const StyledFaMoon = styled(FaMoon)`
    color: black;
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
    font-size: 16px;
    gap: 5px;
    font-weight: bold;
    transition: calc(.3s);
    color: var(--text-color);
    &:hover {
      transform: scale(1.025);
      background-color: var(--hover-color) !important;
  }
`

export default function ThemeSwitcher (){
  const {language} = useLanguage();
  const { theme, toggleTheme } = useTheme();
  return (
    <Button onClick={toggleTheme}>
      {theme === 'dark' ? <StyledFaSun /> : <StyledFaMoon />}
      {language === 'pt' ? "Theme" : "Tema"}
    </Button>
  );
};

