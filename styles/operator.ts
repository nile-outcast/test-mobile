import styled from "styled-components";

export const Li = styled.li`
  position: relative;
  left: 0;
  display: inline-block;
  font-size: 1.2em;
  list-style: none;
  cursor: pointer;
  width: 130px;
  height: 2em;
  line-height: 2em;
  margin: 1em 0;
  margin-right: 40px;
  background-color: #e9f2ec;
  border: 1.5px solid lightgray;
  border-radius: 5px;
  box-shadow: 0 10px 8px -10px rgba(0,0,0, .5);
  transition: .3s ease-in-out;

  &:hover {
    width: 150px;
    left: -10px;
    margin-right: 20px;
    font-weight: bold;
    background-color: #b2d9c0;    
    box-shadow: 0 15px 15px -10px rgba(0,0,0, .5);
    border: 1.5px solid gray;
  }
`;

type Props = {
  length: number;
};

export const Ul = styled.ul`
  margin: 0;
  padding-left: 40px;

  @media (min-width: ${(props: Props) => (props.length >= 8 ? "1500px" : "")}) {
    width: 1385px;
  }

  @media (max-width: 1480px) {
    width: ${(props) => (props.length >= 7 ? "1215px" : "")};
  }

  @media (max-width: 1310px) {
    width: ${(props) => (props.length >= 6 ? "1045px" : "")};
  }

  @media (max-width: 1140px) {
    width: ${(props) => (props.length >= 5 ? "875px" : "")};
  }

  @media (max-width: 970px) {
    width: ${(props) => (props.length >= 4 ? "705px" : "")};
  }

  @media (max-width: 800px) {
    width: ${(props) => (props.length >= 3 ? "535px" : "")};
  }

  @media (max-width: 630px) {
    width: 365px;
  }

  @media (max-width: 460px) {
    width: 225px;
  }
`;
