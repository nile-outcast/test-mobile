import React from "react";
import { Title, HeaderDiv } from "../styles/header";

const Header: React.FC = () => (
  <HeaderDiv>
    <span style={{ verticalAlign: "middle" }}>
      <img style={{ height: "1.3em" }} src="/phone_icon_32.png" alt="phone icon" />
    </span>
    <Title>Оплата мобильной связи</Title>
  </HeaderDiv>
);

export default Header;
