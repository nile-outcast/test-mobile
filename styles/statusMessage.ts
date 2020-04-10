import styled from "styled-components";

interface Props {
  display: string;
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