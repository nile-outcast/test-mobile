import { RefObject, ChangeEvent } from "react";
import { Fieldset, Legend, Input } from "../styles/fieldInput";
import { Status } from "../interfaces/Status"

type Props = {
  name: string;
  value: string;
  placeholder?: string;
  status: Status;
  inputRef?: RefObject<HTMLInputElement>;
  handlerOnChange(event: ChangeEvent<HTMLInputElement>): void;
  handlerOnBlur(): void;
}

const FieldInput: React.FC<Props> = (props) => {
  let className: string = "";

  if (props.status.valid !== undefined) {
    props.status.valid ? className = "correct" : className = "wrong";
  }

  return (
    <Fieldset className={className}>
      <Legend className={className}>{props.status.text}</Legend>
      <Input
        name={props.name}
        type="text"
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.handlerOnChange}
        onBlur={props.handlerOnBlur}
        ref={props.inputRef}
      />
    </Fieldset>)
};

export default FieldInput;
