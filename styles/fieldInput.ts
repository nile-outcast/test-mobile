import styled from "styled-components";

export const Fieldset = styled.fieldset`
  display: inline-block;
  border: 1.5px solid gray;
  border-radius: 5px;
  padding: 1px;
  margin: 1em 2em 2em 0;

  &.correct {
    border-color: seagreen;
  }

  &.wrong {
    border-color: red;
  }

  @media (max-width: 610px) {
    display: block;
    margin: 1em 1em 2em;
  }
`;

export const Legend = styled.legend`

  &.correct {
    color: seagreen;
  }

  &.wrong {
    color: red;
  }
`;

export const Input = styled.input`
  font-size: 1.1em;
  text-align: center;
  padding: 8px 0;
  border: none;
  width: 100%;
  height: 1.5em;
  outline: none;

  &:focus {
    &::placeholder {
      color: white;
    }
  }
`;