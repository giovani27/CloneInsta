import React from "react";
import Header from "../Header";
import Main from "../Main";

import { Container, Head, MainContainer } from "./styles";
import Sugestoes from "../Sugestoes/index";

const Layout: React.FC = () => {
  return (
    <Container>
      <Head>
        <Header />
      </Head>
      <MainContainer>
        <Main />
        <Sugestoes />
      </MainContainer>
    </Container>
  );
};

export default Layout;
