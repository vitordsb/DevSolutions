import React, {useState, useEffect} from 'react'
import { Container, RightSide, LeftSide, LeftBox, Buttons, Button, NewsLetter } from './styles'
import { useTheme } from '../../../context/ThemeContext'
import { Link } from 'react-router-dom';
import { useLanguage } from '../../../context/LanguageContext';
import { FaArrowRight } from 'react-icons/fa';

const phrases = [
    "Software",
    "Apps Mobile",
    "UI/UX design",
]

const Home = () => {
    const { theme } = useTheme(); 
    const logoSrc = theme === "dark" ? "/images/DevSolutionsAlternade.png" : "/images/DevSolutions.png";
    const {language}  = useLanguage();

    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed, setSpeed] = useState(100);
    useEffect(() => {
    const current = phrases[index % phrases.length];
    
    const type = () => {
      setText(prev =>
        isDeleting ? current.substring(0, prev.length - 1) : current.substring(0, prev.length + 1)
      );

      setSpeed(isDeleting ? 50 : 100); 

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1500); 
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setIndex(prev => prev + 1);
      }
    };

    const timer = setTimeout(type, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, index, speed]);

    return (
        <Container>
            <LeftSide>
                <LeftBox>
                    <h1>{language === 'pt' ? 'Development and solution of' : 'Desenvolvimento e solução de'} {text}<span style={{ color: 'var(--second-color)' }}>|</span></h1>
                    <p>{language === 'pt' ? 'We are your partner to digital transformation. Regardless of your business, we deliver customized projects to meet your needs.' : 'Somos o seu parceiro para a transformação digital. Independente do seu negócio, entregamos projetos personalizados para as suas necessidades.'}</p>
                    <Buttons>
                        <Link to="/partner">
                            <Button>
                                {language === 'pt' ? 'Be a partner' : 'Seja um parceiro'}
                                <FaArrowRight/>
                            </Button>
                        </Link>
                        <Link to="/consulting">
                            <Button>
                                {language === 'pt' ? 'Schedule consultation' : 'Agendar consultoria'}
                                <FaArrowRight/>
                            </Button>
                        </Link>
                        <Link to="/app">
                            <Button>
                                {language === 'pt' ? 'Meeting our App' : 'Conheça nosso App'}
                                <FaArrowRight/>
                            </Button>
                        </Link>
                    </Buttons>
                    <NewsLetter>
                        <p>{language === 'pt' ? 'Stay up to date with the news' : 'Fique por dentro das novidades'} <Link to="/news">{language === 'pt' ? 'clicking here' : 'clicando aqui'}</Link></p>
                    </NewsLetter>
                </LeftBox>
            </LeftSide>
            <RightSide>
                    <img src={logoSrc} alt="" />
                    <p>{language === 'pt' ? 'Come join in our team' : 'Venha fazer parte da nossa equipe'}</p>
            </RightSide>
        </Container>
    )
}

export default Home