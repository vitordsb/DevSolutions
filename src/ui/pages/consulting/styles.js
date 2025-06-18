import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    align-content: center;
    justify-content: space-evenly;
    align-items: center;
    display: flex;
    width: 100%;
    background-color: var(--bg-color);
    img {
        width: 600px;
        height: auto;
    }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  background: var(--box-color);
  border-radius: 20px;
  padding: 1rem;
  width: 100%;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
`;

export const Title = styled.h2`
  font-size: 1.6rem;
  text-align: center;
  margin-bottom: 1rem;
  color: var(--text-color);
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Label = styled.label`
  font-size: 0.95rem;
  color: var(--text-color);
`;

export const Input = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid var(--second-color);
  border-radius: 12px;
  font-size: 1rem;
  transition: calc(.3s);

  &:focus {
    border-color: var(--hover-color);
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  padding: 0.75rem 1rem;
  border: 1px solid var(--second-color);
  border-radius: 12px;
  font-size: 1rem;
  resize: none;

  &:focus {
    border-color: var(--hover-color);
    outline: none;
  }
`;

export const Select = styled.select`
  padding: 0.75rem 1rem;
  border-radius: 12px;
  border: 1px solid var(--second-color);
  font-size: 1rem;

  &:focus {
    border-color: var(--hover-color);
    outline: none;
  }
`;

export const Button = styled.button`
  background: var(--second-color);
  color: var(--text-color);
  border: none;
  padding: 0.9rem;
  border-radius: 14px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: calc(.3s);

  &:hover {
    background: var(--hover-color);
    color: white;
  }
`;
