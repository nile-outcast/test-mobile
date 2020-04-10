import React from 'react';
import { MessageConteiner, StatusMessageDiv } from "../styles/statusMessage";
import { MesStatus } from "../interfaces/Status"

interface Props {
  status: MesStatus;
}

const StatusMessage: React.FC<Props> = ({ status }) => (
  <div>
    <MessageConteiner display={status.display} />
    <StatusMessageDiv status={status.status} display={status.display} >
      <p>{status.message} </p>
    </StatusMessageDiv>
  </div>
);

export default StatusMessage;
