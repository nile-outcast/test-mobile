import styled from "styled-components";

export const Li = styled.li`
  display: inline-block;
  font-size: 1.2em;
  list-style: none;
  cursor: pointer;
  width: 130px;
  height: 2em;
  line-height: 2em;
  margin: 1em 0;
  margin-right: 2em;
  border: 1.5px solid lightgray;
  border-radius: 5px;

  &:hover {
    font-weight: bold;
    background-color: lightgray;
  }
`;

type Props = {
  length: number,
}

export const Ul = styled.ul`
  margin: 0;
  padding-left: 2em;

  @media (min-width: ${(props: Props) => props.length >= 8 ? '1500px' : ''}) {
    width: 1380px;
  }

  @media (max-width: 1460px) {
    width: ${props => props.length >= 7 ? '1200px' : ''};
  }

  @media (max-width: 1290px) {
    width: ${props => props.length >= 6 ? '1030px' : ''};
  }

  @media (max-width: 1110px) {
    width: ${props => props.length >= 5 ? '860px' : ''};
  }

  @media (max-width: 940px) {
    width: ${props => props.length >= 4 ? '690px' : ''};
  }

  @media (max-width: 770px) {
    width: ${props => props.length >= 3 ? '520px' : ''};
  }

  @media (max-width: 600px) {
    width: 350px;
  }

  @media (max-width: 430px) {
    width: 225px;
  }
`;
