import React from 'react';
import styled from 'styled-components';
import { useLanguage } from '../../../context/LanguageContext';
import { FaExternalLinkAlt, FaGithub, FaCalendarAlt, FaUsers } from 'react-icons/fa';

const Container = styled.div`
  min-height: 100vh;
  background-color: var(--bg-color);
  padding: var(--space-3xl);

  @media (max-width: 768px) {
    padding: var(--space-xl);
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: var(--space-4xl);

  h1 {
    font-size: var(--font-size-4xl);
    color: var(--text-color);
    margin-bottom: var(--space-lg);
    font-weight: 700;

    @media (max-width: 768px) {
      font-size: var(--font-size-3xl);
    }
  }

  p {
    font-size: var(--font-size-xl);
    color: var(--text-color);
    opacity: 0.8;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;

    @media (max-width: 768px) {
      font-size: var(--font-size-lg);
    }
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: var(--space-2xl);
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }
`;

const ProjectCard = styled.div`
  background-color: var(--box-color);
  border-radius: var(--radius-xl);
  padding: var(--space-2xl);
  box-shadow: 0 8px 25px var(--shadow-medium);
  transition: var(--transition-normal);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--second-color), var(--hover-color));
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px var(--shadow-heavy);
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, var(--second-color), var(--hover-color));
  border-radius: var(--radius-lg);
  margin-bottom: var(--space-xl);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-4xl);
  color: white;
  font-weight: bold;
`;

const ProjectTitle = styled.h3`
  font-size: var(--font-size-2xl);
  color: var(--text-color);
  margin-bottom: var(--space-lg);
  font-weight: 700;
`;

const ProjectDescription = styled.p`
  font-size: var(--font-size-base);
  color: var(--text-color);
  opacity: 0.9;
  line-height: 1.6;
  margin-bottom: var(--space-xl);
`;

const ProjectMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-lg);
  margin-bottom: var(--space-xl);
  font-size: var(--font-size-sm);
  color: var(--text-color);
  opacity: 0.8;

  span {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
  margin-bottom: var(--space-xl);
`;

const TechTag = styled.span`
  background-color: var(--second-color);
  color: var(--text-color);
  padding: var(--space-xs) var(--space-md);
  border-radius: var(--radius-md);
  font-size: var(--font-size-xs);
  font-weight: 600;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: var(--space-lg);

  a {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    padding: var(--space-md) var(--space-lg);
    background-color: var(--hover-color);
    color: white;
    text-decoration: none;
    border-radius: var(--radius-md);
    font-weight: 600;
    transition: var(--transition-normal);

    &:hover {
      background-color: var(--second-color);
      transform: translateY(-2px);
    }
  }
`;

const StatsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--space-2xl);
  margin: var(--space-4xl) 0;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const StatCard = styled.div`
  text-align: center;
  background-color: var(--box-color);
  padding: var(--space-2xl);
  border-radius: var(--radius-xl);
  box-shadow: 0 8px 25px var(--shadow-medium);

  h3 {
    font-size: var(--font-size-4xl);
    color: var(--hover-color);
    font-weight: 700;
    margin-bottom: var(--space-md);
  }

  p {
    font-size: var(--font-size-lg);
    color: var(--text-color);
    font-weight: 600;
  }
`;

const Experience = () => {
  const { language } = useLanguage();

  const projects = [
    {
      title: language === 'pt' ? 'Sistema de Gestão Empresarial' : 'Business Management System',
      description: language === 'pt' 
        ? 'Sistema completo de gestão empresarial com módulos de vendas, estoque, financeiro e relatórios avançados. Desenvolvido para uma empresa de médio porte com mais de 200 funcionários.'
        : 'Complete business management system with sales, inventory, financial and advanced reporting modules. Developed for a medium-sized company with over 200 employees.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
      year: '2024',
      team: '5 pessoas',
      duration: '8 meses'
    },
    {
      title: language === 'pt' ? 'Aplicativo de Delivery' : 'Delivery App',
      description: language === 'pt'
        ? 'Aplicativo mobile para delivery de comida com sistema de pagamento integrado, rastreamento em tempo real e painel administrativo para restaurantes.'
        : 'Mobile food delivery app with integrated payment system, real-time tracking and administrative panel for restaurants.',
      tech: ['React Native', 'Firebase', 'Stripe', 'Google Maps'],
      year: '2024',
      team: '4 pessoas',
      duration: '6 meses'
    },
    {
      title: language === 'pt' ? 'Plataforma de E-learning' : 'E-learning Platform',
      description: language === 'pt'
        ? 'Plataforma educacional online com sistema de videoaulas, exercícios interativos, certificados digitais e acompanhamento de progresso dos alunos.'
        : 'Online educational platform with video lessons system, interactive exercises, digital certificates and student progress tracking.',
      tech: ['Vue.js', 'Laravel', 'MySQL', 'AWS'],
      year: '2023',
      team: '6 pessoas',
      duration: '10 meses'
    },
    {
      title: language === 'pt' ? 'Sistema de IoT Industrial' : 'Industrial IoT System',
      description: language === 'pt'
        ? 'Sistema de monitoramento industrial com sensores IoT, dashboard em tempo real e alertas automáticos para otimização de processos produtivos.'
        : 'Industrial monitoring system with IoT sensors, real-time dashboard and automatic alerts for production process optimization.',
      tech: ['Python', 'MQTT', 'InfluxDB', 'Grafana'],
      year: '2023',
      team: '3 pessoas',
      duration: '12 meses'
    }
  ];

  const stats = [
    { number: '50+', label: language === 'pt' ? 'Projetos Concluídos' : 'Completed Projects' },
    { number: '30+', label: language === 'pt' ? 'Clientes Satisfeitos' : 'Satisfied Clients' },
    { number: '5+', label: language === 'pt' ? 'Anos de Experiência' : 'Years of Experience' },
    { number: '100%', label: language === 'pt' ? 'Taxa de Sucesso' : 'Success Rate' }
  ];

  return (
    <Container>
      <Header>
        <h1>{language === 'pt' ? 'Nossas Experiências' : 'Our Experiences'}</h1>
        <p>
          {language === 'pt'
            ? 'Conheça alguns dos projetos que desenvolvemos e os resultados que alcançamos para nossos clientes.'
            : 'Learn about some of the projects we have developed and the results we have achieved for our clients.'
          }
        </p>
      </Header>

      <StatsSection>
        {stats.map((stat, index) => (
          <StatCard key={index} className="fade-in">
            <h3>{stat.number}</h3>
            <p>{stat.label}</p>
          </StatCard>
        ))}
      </StatsSection>

      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index} className="fade-in">
            <ProjectImage>
              {project.title.charAt(0)}
            </ProjectImage>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectMeta>
              <span>
                <FaCalendarAlt />
                {project.year}
              </span>
              <span>
                <FaUsers />
                {project.team}
              </span>
              <span>
                <FaCalendarAlt />
                {project.duration}
              </span>
            </ProjectMeta>
            <TechStack>
              {project.tech.map((tech, techIndex) => (
                <TechTag key={techIndex}>{tech}</TechTag>
              ))}
            </TechStack>
            <ProjectLinks>
              <a href="#" onClick={(e) => e.preventDefault()}>
                <FaExternalLinkAlt />
                {language === 'pt' ? 'Ver Projeto' : 'View Project'}
              </a>
              <a href="#" onClick={(e) => e.preventDefault()}>
                <FaGithub />
                {language === 'pt' ? 'Código' : 'Code'}
              </a>
            </ProjectLinks>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </Container>
  );
};

export default Experience;

