import styled from "@emotion/styled";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 35%;
  padding: 24px;
  background-color: rgba(67, 67, 67, 0.3);
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const InputName = styled.span`
  margin-bottom: 16px;
  font-weight: 600;
  font-size: 24px;
  color: rgb(75 75 75);
`;

export const Input = styled.input`
  width: 400px;
  height: 40px;
  padding: 8px 24px;
  font-size: 18px;
  box-shadow: rgb(0 0 0 / 15%) 2px 2px 3px;
  background-color: rgba(228, 228, 228, 0.5);
  outline: none;
  border: none;
  margin-bottom: 16px;
`;

export const Button = styled.button`
  width: 450px;
  height: 50px;
  /* padding: 12px 24px; */
  font-size: 18px;
  color: white;
  box-shadow: rgb(0 0 0 / 15%) 2px 2px 3px;
  background-color: rgb(93 203 152);
  outline: none;
  cursor: pointer;
  border: none;
  margin-top: 40px;
`;
