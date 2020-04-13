import styled from "styled-components";

export const BodyDiv = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  padding: 3em 0;
  background-color: LemonChiffon;
  flex: auto;
  justify-content: center;

  @media (min-height: 500px) and (min-width: 420px) {
    padding: 3em 0 5em;
  }
`;

export const Conteiner = styled.div`
  display: inline-block;
  margin: 0 auto;
  padding: 1em 1.5em 2em;
  text-align: center;
  background-color: white;
  border: 0.5px solid DarkGray;
`;
