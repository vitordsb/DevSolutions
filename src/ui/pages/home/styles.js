import styled from "styled-components";

// Define common breakpoints
const breakpoints = {
  xs: '360px',   // Mobile portrait
  sm: '640px',   // Mobile landscape / small tablets
  md: '768px',   // Tablets
  lg: '992px',   // Small laptops
  xl: '1200px',  // Laptops/desktops
  xxl: '1440px', // Large desktops
  hd: '1920px',  // Full HD screens
};

export const Container = styled.div`
  height: 100%;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  background-color: var(--bg-color);

  @media (max-width: ${breakpoints.xs}) {
    flex-direction: column;
    padding: 1rem;
  }
  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.md}) {
    flex-direction: column;
    padding: 2rem;
  }
  @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
    justify-content: center;
    padding: 3rem;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex: 1;

  @media (max-width: ${breakpoints.md}) {
    width: 100%;
    margin-bottom: 2rem;
  }
`;

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

  @media (max-width: ${breakpoints.xs}) {
    padding: 20px;
    max-width: 100%;
  }
  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.md}) {
    padding: 30px;
  }

  h1 {
    font-size: 48px;
    @media (max-width: ${breakpoints.md}) {
      font-size: 32px;
    }
  }
  p {
    font-size: 20px;
    @media (max-width: ${breakpoints.md}) {
      font-size: 16px;
      hyphens: auto;
    }
  }
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex: 1;

  @media (max-width: ${breakpoints.md}) {
    display: none; // hide on smaller screens
  }

  p {
    color: var(--text-color);
    font-size: 20px;
    font-weight: bolder;
    @media (max-width: ${breakpoints.lg}) {
      font-size: 18px;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  margin-top: 20px;
  width: 100%;
  gap: 10px;
  justify-content: start;

  @media (max-width: ${breakpoints.md}) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const Button = styled.button`
  border: none;
  background-color: var(--second-color) !important;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  transition: 0.3s;
  color: var(--text-color);

  &:hover {
    background-color: var(--hover-color) !important;
    transform: scale(1.025);
    color: white;
  }

  @media (max-width: ${breakpoints.xs}) {
    padding: 8px;
    font-size: 14px;
  }
`;

export const NewsLetter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  padding: 5px;
  border-radius: 5px;
  color: var(--text-color);
  text-align: center;

  p {
    font-size: 18px;
    font-weight: bolder;
    @media (max-width: ${breakpoints.md}) {
      font-size: 16px;
    }
  }
  a {
    transition: 0.3s;
    text-decoration: none;
    color: var(--hover-color);
    border-bottom: 1px solid var(--hover-color);
  }
`;
