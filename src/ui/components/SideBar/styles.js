import styled from "styled-components";

const breakpoints = {
  xs: '360px', 
  sm: '640px', 
  md: '768px',   
  lg: '992px',  
  xl: '1200px', 
};

export const Sidebar = styled.div`
  background-color: var(--menuBar-color);
  position: sticky;
  height: 100vh;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid rgba(0, 0, 0, 0.2);

  @media (max-width: ${breakpoints.md}) {
    display: none;
  }
`;

// Botão hamburger para mobile, oculto em desktops
export const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 2000;

  @media (max-width: ${breakpoints.md}) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
  }
`;

export const MobileDrawer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 250px;
  background-color: var(--menuBar-color);
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;
  z-index: 1500;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  @media (min-width: ${breakpoints.md}) {
    display: none;
  }
`;

export const SideContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  img {
    width: 150px;
    height: auto;
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
  width: 100%;

  a {
    display: flex;
    gap: 5px;
    color: var(--text-color);
    font-weight: bold;
    padding: 10px;
    border-radius: 5px;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
      background-color: var(--second-color);
      color: white;
    }
  }
`;

export const Hooks = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
`;
