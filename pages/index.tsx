import { GetStaticProps } from 'next'
import { List } from "../interfaces/List"

import Page from "../components/Page";
import Operator from "../components/Operator";
import { Title } from "../styles/id";
import fetch from "node-fetch";

type Props = {
  list: List[];
}

const Index: React.FC<Props> = ({ list }) => {
  return (
    <Page>
      <Title>Выберите оператора</Title>
      <Operator list={list} />
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api");
  const list: List = await res.json();
  return { props: { list } };
}

export default Index;
