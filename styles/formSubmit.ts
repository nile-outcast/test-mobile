import styled from "styled-components";

export const Form = styled.form`
  padding-left: 2em;

  @media (max-width: 610px) {
    padding: 0;
  }
`;

export const Button = styled.button`
  float: ${(props) => (props.type == "submit" ? "right" : "left")};
  font-size: 0.9em;
  cursor: pointer;
  padding: 3px 7px;
  margin: 0 2em;
  color: gray;
  border: 1.5px solid lightgray;

  &:hover {
    color: black;
    background-color: PowderBlue;
    border: 1.5px solid gray;
  }

  @media (max-width: 610px) {
    float: none;
    margin-bottom: ${(props) => (props.type == "submit" ? "2em" : "0")};
  }
`;
