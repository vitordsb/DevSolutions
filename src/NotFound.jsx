import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  padding: 20px;
  background-color: transparent;
  color: var(--text-color);
`;

const Title = styled.h1`
  font-size: 5rem;
  margin-bottom: 20px;
  color: var(--text-color);
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 10px;
`;

const Message = styled.p`
  font-size: 1.5rem;
  margin: 10px 0;
`;

const HomeButton = styled(Link)`
  margin-top: 10px;
  padding: 0.5rem 1rem;
  background-color: var(--second-color);
  color: white;
  font-size: 1.5rem;
  text-decoration: none;
  border-radius: 0.5rem;
  font-weight: bold;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

export default function NotFound() {
  return (
    <Container>
      <Title>Erro 404</Title>
      <Subtitle>Poxa, página não encontrada!</Subtitle>
      <Message>Essa página não foi encontrada ou não existe 😢</Message>
      <Message>Por favor, entre em contato com nossos especialistas.</Message>
      <HomeButton to="/">Voltar para a página inicial</HomeButton>
    </Container>
  );
}
