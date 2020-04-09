import React from "react";
import { BodyDiv, Conteiner } from "../styles/page";
import Header from "./Header";

const Page: React.FunctionComponent<{ children: React.ReactNode }> = ({ children }) => (
  <div>
    <Header />
    <BodyDiv>
      <Conteiner>{children}</Conteiner>
    </BodyDiv>
  </div>
);

export default Page;
