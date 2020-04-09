import { Fieldset, Legend, Input } from "../styles/id";

type Props = {
  name: string;
  text: string;
  value: string;
  valid: string;
  placeholder?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
  handlerOnChange(event: React.ChangeEvent<HTMLInputElement>): void;
  handlerOnBlur(event: React.FocusEvent<HTMLInputElement>): void;
}

const FieldInput: React.FC<Props> = (props) => {
  return (
    <Fieldset className={props.valid}>
      <Legend className={props.valid}>{props.text}</Legend>
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
};

export default FieldInput;
