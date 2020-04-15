import React from "react";
import { MessageConteiner, StatusMessageDiv } from "../styles/statusMessage";
import { MesStatus } from "../interfaces/Status";

interface Props {
  status: MesStatus;
}

const StatusMessage: React.FC<Props> = ({ status }) => (
  <>
    <MessageConteiner display={status.display} />
    <StatusMessageDiv display={status.display} status={status.status}>
      <p>{status.message} </p>
    </StatusMessageDiv>
  </>
);

export default StatusMessage;
