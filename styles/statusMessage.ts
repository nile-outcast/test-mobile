import styled from "styled-components";
import { MesStatus } from "../interfaces/Status"

export const MessageConteiner = styled.div<MesStatus>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  opacity: 0.3;
  background-color: gray;
  display: ${(props) => (props.display ? "" : "none")};
`;

export const StatusMessageDiv = styled.div<MesStatus>`
  font-size: 2em;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  display: ${(props) => (props.display ? "" : "none")};
  padding: 0 1em;
  background-color: white;
  border: 1.5px solid gray;
  border-radius: 5px;
  color: ${(props) => (props.status === 200 ? "seagreen" : "red")};
  }
`;
