import React from "react";

import { Container, BalanceContainer, CircleContainer } from "./Header.styles";

const Header = () => {
  return (
    <Container>
      <BalanceContainer>
        <p>My balance</p>
        <p>$921.48</p>
      </BalanceContainer>
      <CircleContainer>&nbsp;</CircleContainer>
    </Container>
  );
};

export default Header;
