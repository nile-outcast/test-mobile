import React from 'react';
import { MessageConteiner, StatusMessageDiv } from "../styles/id";
import { MesStatus } from "../interfaces/Status"

type Props = {
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
