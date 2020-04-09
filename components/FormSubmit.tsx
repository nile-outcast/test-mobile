import { useState, useEffect, useRef } from "react";
import FieldInput from "./FieldInput";
import isValidPhone from "../utils/isValidPhone";
import phoneMask from "../utils/phoneMask";
import { Form, Button } from "../styles/id";

type Status = {
  valid: string;
  text: string;
}

interface Props {
  handlerOnSubmit: (event: React.FormEvent<HTMLFormElement>) => void
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

  useEffect(() => { inputRef.current!.focus() }, []);

  const handlerOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    if (name === "phone") {
      setPhone((prev) => phoneMask(value));
    }

    if (name === "sum") {
      isNaN(Number(value)) || value.includes(" ")
        ? ""
        : setSum((prev) => (value[0] === "0" ? prev : value));
    }
  };

  const handlerOnBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const name = event.target.name;

    if (name === "phone") {
      !isValidPhone(phone)
        ? setPhoneStatus((prev) => ({
          valid: "false",
          text: "Не верный номер",
        }))
        : setPhoneStatus((prev) => ({
          valid: "true",
          text: "Номер получателя",
        }));
    }
    if (name === "sum") {
      !Number(sum) || Number(sum) > 1000
        ? setSumStatus((prev) => ({
          valid: "false",
          text: "Не верная сумма платежа",
        }))
        : setSumStatus((prev) => ({ valid: "true", text: "Сумма платежа" }));
    }
  };

  return (
    <Form onSubmit={props.handlerOnSubmit}>
      <FieldInput
        name="phone"
        value={phone}
        text={phoneStatus.text}
        valid={phoneStatus.valid}
        handlerOnChange={handlerOnChange}
        handlerOnBlur={handlerOnBlur}
        inputRef={inputRef}
      />
      <FieldInput
        name="sum"
        value={sum}
        text={sumStatus.text}
        valid={sumStatus.valid}
        placeholder="не более 1000"
        handlerOnChange={handlerOnChange}
        handlerOnBlur={handlerOnBlur}
      />
      <br />
      <Button type="submit">Оплатить</Button>
    </Form>
  );
}

export default FormSubmit;