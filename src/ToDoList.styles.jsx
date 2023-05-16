import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: rgb(79,79,79);
    font-family: 'Poppins', sans-serif;
  }
`;

export const Wrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (max-width: 768px) {
    max-width: 600px;
  }

  @media (max-width: 480px) {
    max-width: 300px;
  }
`;

export const Heading = styled.h1`
  display: flex;
  justify-content: center;
  color: white;
  font-size: 2rem;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const ListItems = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding: 0.5rem;
  background-color: #222;
  font-size: 1.25rem;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const StyledUnorderedList = styled.ul`
  color: white;
  background-color: #222;
  font-size: 1.25rem;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const StyledCheckbox = styled.input`
  position: relative;
  appearance: none;
  -webkit-appearance: none;
  width: 2.25rem;
  height: 2.25rem;
  border: 2px solid #ccc;
  border-radius: 0.25rem;
  margin-right: 1rem;
  outline: none;
  cursor: pointer;

  &:checked {
    border-color: #F4C430;
    background-color: #F4C430;
  }

  &:checked:after {
    content: '✔';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.5rem;
    color: white;
  }

  &:hover {
    border-color: #F4C430;
  }

  @media (max-width: 480px) {
    width: 1.75rem;
    height: 1.75rem;
    font-size: 1rem;
  }
`;

export const Label = styled.label`
  font-size: 1.5rem;
  color: white;
  margin-bottom: 1rem;
  text-align: center;
  margin-top: 1rem;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 1rem;
    text-align: right;
  }
`;

export const TaskTitle = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.25rem;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const ContainerForm = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Input = styled.input`
  flex: 1;
  font-size: 1.75rem;
  padding: 1rem 0.5rem;
  margin: 1rem;
  border: 1px solid white;
  border-radius: 0.25rem;
  background: rgb(79,79,79);
  color: white;
  height: 3rem;
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    margin: 1rem 1rem 1rem 0;
  }
`;

export const Button = styled.button`
  outline: 0;
  cursor: pointer;
  border: none;
  padding: 0 1rem;
  height: 3rem;
  line-height: 45px;
  border-radius: 7px;
  background-color: #F4C430;
  color: white;
  font-weight: 400;
  font-size: 3rem;
  box-shadow: 0 4px 14px 0 rgb(244 196 48 / 15%);
  transition: background 0.2s ease,color 0.2s ease,box-shadow 0.2s ease;
  margin-top: 1rem;
  
  @media screen and (min-width: 768px) {
    margin-top: 0;
    width: auto;
  }
`;

export const DeleteButton = styled.button`
  outline: 0;
  margin-right: 1rem;
  cursor: pointer;
  border: none;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background-color: #CC0000;
  color: white;
  font-size: 1rem;
  line-height: 2rem;
  text-align: center;
  box-shadow: 0 4px 14px 0 rgb(204 0 0 / 15%);
  transition: background 0.2s ease,color 0.2s ease,box-shadow 0.2s ease;
  margin-left: 1rem;
  flex-shrink: 0;
  :hover{
      background: rgba(178,0,0,0.9);
      box-shadow: 0 6px 20px rgb(178 0 0 / 23%);
  }
`;
