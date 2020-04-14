import {
  useState,
  useEffect,
  useRef,
  FormEvent,
  ChangeEvent,
  FocusEvent,
} from "react";
import FieldInput from "./FieldInput";
import isValidPhone from "../utils/isValidPhone";
import phoneMask from "../utils/phoneMask";
import { Form, Button } from "../styles/formSubmit";
import { Status } from "../interfaces/Status";

interface Props {
  handlerOnSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

const FormSubmit: React.FC<Props> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [phone, setPhone] = useState<string>("+7");
  const [phoneStatus, setPhoneStatus] = useState<Status>({
    valid: "",
    text: "Введите номер",
  });

  const [sum, setSum] = useState<string>("");
  const [sumStatus, setSumStatus] = useState<Status>({
    valid: "",
    text: "Укажите сумму платежа",
  });

  useEffect(() => {
    inputRef.current!.focus();
  }, []);

  const handlerOnChangePhone = (event: ChangeEvent<HTMLInputElement>) => {
    const value: string = event.target.value;
    setPhone((prev) => phoneMask(value));
  };

  const handlerOnBlurPhone = (event: FocusEvent<HTMLInputElement>) => {
    !isValidPhone(phone)
      ? setPhoneStatus((prev) => ({
          valid: "false",
          text: "Не верный номер",
        }))
      : setPhoneStatus((prev) => ({
          valid: "true",
          text: "Номер получателя",
        }));
  };

  const handlerOnChangeSum = (event: ChangeEvent<HTMLInputElement>) => {
    const value: string = event.target.value;
    isNaN(Number(value)) || value.includes(" ")
      ? ""
      : setSum((prev) => (value[0] === "0" ? prev : value));
  };

  const handlerOnBlurSum = (event: FocusEvent<HTMLInputElement>) => {
    !Number(sum) || Number(sum) > 1000
      ? setSumStatus((prev) => ({
          valid: "false",
          text: "Не верная сумма платежа",
        }))
      : setSumStatus((prev) => ({ valid: "true", text: "Сумма платежа" }));
  };

  return (
    <Form onSubmit={props.handlerOnSubmit}>
      <FieldInput
        name="phone"
        value={phone}
        status={phoneStatus}
        handlerOnChange={handlerOnChangePhone}
        handlerOnBlur={handlerOnBlurPhone}
        inputRef={inputRef}
      />
      <FieldInput
        name="sum"
        value={sum}
        status={sumStatus}
        placeholder="не более 1000"
        handlerOnChange={handlerOnChangeSum}
        handlerOnBlur={handlerOnBlurSum}
      />
      <br />
      <Button type="submit">Оплатить</Button>
    </Form>
  );
};

export default FormSubmit;
