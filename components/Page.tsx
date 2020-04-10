import React, { ReactNode } from "react";
import { BodyDiv, Conteiner } from "../styles/page";
import Header from "./Header";
import Footer from "./Footer"

const Page: React.FC<{ children: ReactNode }> = ({ children }) => (
  <div>
    <Header />
    <BodyDiv>
      <Conteiner>{children}</Conteiner>
    </BodyDiv>
    <Footer />
  </div>
);

export default Page;
