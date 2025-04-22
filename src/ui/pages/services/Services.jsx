import CardService from "./ServiceCard"
import styled from "styled-components"
import { useLanguage } from "../../../context/LanguageContext"

const Container = styled.div`
  display: grid;
  padding: 50px;
  height: 100%;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
  align-content: center;
  justify-content: space-around;
  width: auto;
  gap: 20px;
`;

export default function Services() {
  const { language } = useLanguage();

  return (
    <Container>
      <CardService 
        img="/icons/svgs/services/DevService.svg" 
        title={language === 'pt' ? 'Software Development' : 'Desenvolvimento de Software'}
        description={
          language === 'pt'
            ? 'We build efficient, scalable custom systems tailored to your business needs.'
            : 'Desenvolvemos sistemas personalizados, eficientes e escaláveis para atender às necessidades específicas do seu negócio.'
        }
        linktwo="/service/development"
      />
      
      <CardService 
        img="/icons/svgs/services/DesignService.svg" 
        title="UI/UX Designer"
        description={
          language === 'pt'
            ? 'We design modern, functional interfaces that ensure usability, accessibility, and an exceptional user experience.'
            : 'Projetamos interfaces modernas e funcionais, garantindo usabilidade, acessibilidade e a melhor experiência para o usuário final.'
        }
        linktwo="/service/designer"
      />
      
      <CardService 
        img="/icons/svgs/services/ConsultService.svg" 
        title={language === 'pt' ? 'Training & Consultancy' : 'Treinamento e Consultoria'}
        description={
          language === 'pt'
            ? 'We provide strategic training and consulting to boost your team’s performance and business outcomes.'
            : 'Oferecemos treinamentos e consultorias estratégicas para impulsionar a performance da sua equipe e da sua empresa.'
        }
      />
      
      <CardService 
        img="/icons/svgs/services/HardwareService.svg" 
        title={language === 'pt' ? 'Maintenance & Hardware' : 'Manutenção e Hardware'}
        description={
          language === 'pt'
            ? 'We deliver preventive and corrective maintenance with expert technical support to ensure peak performance.'
            : 'Realizamos manutenção preventiva e corretiva, além de suporte técnico especializado para garantir máxima performance.'
        }
      />
      
      <CardService 
        img="/icons/svgs/services/IAService.svg" 
        title={language === 'pt' ? 'Artificial Intelligence' : 'Inteligência Artificial'}
        description={
          language === 'pt'
            ? 'We apply AI to automate processes, optimize decisions, and turn data into strategic results.'
            : 'Aplicamos IA para automatizar processos, otimizar decisões e transformar dados em resultados estratégicos.'
        }
      />
      
      <CardService 
        img="/icons/svgs/services/CyberService.svg" 
        title={language === 'pt' ? 'Cybersecurity' : 'Cibersegurança'}
        description={
          language === 'pt'
            ? 'We implement robust solutions to protect your data, systems, and networks from threats and cyberattacks.'
            : 'Implementamos soluções robustas para proteger seus dados, sistemas e redes contra ameaças e ataques cibernéticos.'
        }
      />
    </Container>
  );
}
