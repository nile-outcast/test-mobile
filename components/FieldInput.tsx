import { RefObject, ChangeEvent, FocusEvent } from "react";
import { Fieldset, Legend, Input } from "../styles/fieldInput";
import { Status } from "../interfaces/Status"

type Props = {
  name: string;
  value: string;
  placeholder?: string;
  status: Status;
  inputRef?: RefObject<HTMLInputElement>;
  handlerOnChange(event: ChangeEvent<HTMLInputElement>): void;
  handlerOnBlur(event: FocusEvent<HTMLInputElement>): void;
}

const FieldInput: React.FC<Props> = (props) => (
  <Fieldset className={props.status.valid}>
    <Legend className={props.status.valid}>{props.status.text}</Legend>
    <Input
      name={props.name}
      type="text"
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.handlerOnChange}
      onBlur={props.handlerOnBlur}
      ref={props.inputRef}
    />
  </Fieldset>
);

export default FieldInput;
