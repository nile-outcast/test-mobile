import React from "react";
import { HeadTitle, HeaderDiv } from "../styles/header";

const Header: React.FC = () => (
  <HeaderDiv>
    <span style={{ verticalAlign: "middle" }}>
      <img
        style={{ height: "1em", marginRight: "0.5em" }}
        src="/icon.png"
        alt="phone icon"
      />
    </span>
    <HeadTitle>Оплата мобильной связи</HeadTitle>
  </HeaderDiv>
);

export default Header;
