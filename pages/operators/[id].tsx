import { useRouter } from "next/router";
import Link from "next/link";
import fetch from "node-fetch";
import { useState, useRef, FormEvent } from "react";
import Page from "../../components/Page";
import FormSubmit from "../../components/FormSubmit";
import StatusMessage from "../../components/StatusMessage";
import isValidPhone from "../../utils/isValidPhone";
import { Title } from "../../styles/header";
import { Button } from "../../styles/formSubmit";
import { MesStatus } from "../../interfaces/Status";

interface InputElements {
  phone: HTMLInputElement;
  sum: HTMLInputElement;
}

export default function Operator() {
  const router = useRouter();
  const refFocus = useRef<HTMLDivElement>(null);
  const tabIndex: number = -1;

  const [mesStatus, setMesStatus] = useState<MesStatus>({
    display: false,
  });

  const handlerOnClick = () => {
    if (mesStatus.status == 200) router.push("/");
    setMesStatus((prev) => ({
      display: false,
    }));
    document.body.style.overflow = "auto";
  };

  const handlerOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as typeof event.target & InputElements;
    const phone: string = target.phone.value;
    const sum: string = target.sum.value;

    target.phone.blur();
    target.sum.blur();

    if (!isValidPhone(phone)) {
      target.phone.focus();
      return;
    }

    const isValidSum: boolean = !Number(sum) || Number(sum) > 1000;

    if (isValidSum) {
      target.sum.focus();
      return;
    }

    try {
      const res = await fetch(
        `http://localhost:3000/api/operators/${router.query.id}`
        //`https://test-mobile.now.sh/api/operators/${router.query.id}`
      );
      const data = await res.json();
      setMesStatus((prev) => ({
        display: true,
        status: res.status,
        message: data.message,
      }));
    } catch (err) {
      console.error(err);
    }

    document.body.style.overflow = "hidden";
    refFocus.current!.focus();
  };

  return (
    <Page>
      <Title>{router.query.id}</Title>
      <FormSubmit handlerOnSubmit={handlerOnSubmit} />
      <Link href="/">
        <Button>Выбать оператора</Button>
      </Link>
      <div
        onClick={handlerOnClick}
        onKeyDown={handlerOnClick}
        ref={refFocus}
        tabIndex={tabIndex}
        style={{ clear: "both" }}
      >
        <StatusMessage status={mesStatus} />
      </div>
    </Page>
  );
}
