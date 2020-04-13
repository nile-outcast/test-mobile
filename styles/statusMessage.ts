import styled from "styled-components";

interface Props {
  display: string;
  status?: number;
}

export const MessageConteiner = styled.div<Props>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  opacity: 0.3;
  background-color: gray;
  display: ${(props) => (props.display === "true" ? "" : "none")};
`;

export const StatusMessageDiv = styled.div<Props>`
  font-size: 2em;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  display: ${(props) => (props.display === "true" ? "" : "none")};
  padding: 0 1em;
  background-color: white;
  border: 1.5px solid gray;
  border-radius: 5px;
  color: ${(props) => (props.status === 200 ? "seagreen" : "red")};
  }
`;
