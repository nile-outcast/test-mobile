import React from 'react'
import Link from "next/link";
import { Ul, Li } from "../styles/operator";
import { List } from "../interfaces/List"

type Props = {
  list: List[];
}

const Operator: React.FC<Props> = ({ list }) => {
  const length: number = list.length;
  return (
    <Ul length={length}>
      {list.map((oper: List) => (
        <Link
          key={oper.id}
          href="/operators/[id]"
          as={`/operators/${oper.name}`}
        >
          <Li>{oper.name}</Li>
        </Link>
      ))}
    </Ul>
  );
};

export default Operator;
