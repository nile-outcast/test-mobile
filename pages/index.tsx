import { GetStaticProps } from "next";
import { List } from "../interfaces/List";

import Operator from "../components/Operator";
import { Title } from "../styles/header";
import fetch from "node-fetch";

type Props = {
  list: List[];
};

const Index: React.FC<Props> = ({ list }) => (
  <>
    <Title>Выберите оператора</Title>
    <Operator list={list} />
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api");
  //const res = await fetch("https://test-mobile.now.sh/api");
  const list: List[] = await res.json();
  return { props: { list } };
};

export default Index;