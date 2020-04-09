import styled from "styled-components";

export const HeaderDiv = styled.div`
  padding: 5px 20px;
`;

export const Title = styled.h3`
  display: inline-block;
  color: seagreen;
`;


export const Form = styled.form`
  padding-left: 2em;

  @media (max-width: 610px) {
    padding: 0;
  }
`;

export const Fieldset = styled.fieldset`
  display: inline-block;
  border: 1.5px solid gray;
  border-radius: 5px;
  padding: 1px;
  margin: 1em 2em 2em 0;

  &.true {
    border-color: seagreen;
  }

  &.false {
    border-color: red;
  }

  @media (max-width: 610px) {
    display: block;
    margin: 1em 1em 2em;
  }
`;

export const Legend = styled.legend`
  &.false {
    color: red;
  }

  &.true {
    color: seagreen;
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

export const Button = styled.button`
  float: ${(props) => (props.type == "submit" ? "right" : "left")};
  font-size: 0.9em;
  cursor: pointer;
  padding: 3px 7px;
  margin: 0 2em;
  color: gray;

  &:hover {
    color: black;
  }

  @media (max-width: 610px) {
    float: none;
    margin-bottom: ${(props) => (props.type == "submit" ? "2em" : "0")};
  }
`;

type Props = {
  display?: string;
  status?: number;
}

export const MessageConteiner = styled.div<Props>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  opacity: 0.3;
  background-color: gray;
  display: ${(props) => (props.display === "true" ? "" : "none")};
`;

export const StatusMessageDiv = styled.div<Props>`
  font-size: 1.3em;
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  display: ${(props) => (props.display === "true" ? "" : "none")};
  padding: 0 1em;
  background-color: white;
  border: 1.5px solid gray;
  border-radius: 5px;
  color: ${(props) => (props.status === 200 ? "seagreen" : "red")};
  }
`;
