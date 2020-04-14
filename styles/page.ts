import styled from "styled-components";

export const BodyDiv = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  padding: 3em 0;
  background-color: LemonChiffon;
  flex: auto;
  justify-content: center;

  @media (min-height: 500px) and (min-width: 430px) {
    padding: 3em 0 5em;
  }
`;

export const Conteiner = styled.div`
  display: inline-block;
  margin: 0 auto;
  padding: 1em 1.5em 2em;
  background-color: white;
  border: 0.5px solid DarkGray;
  box-shadow: 0 10px 15px -10px rgba(0,0,0, .5);
`;
