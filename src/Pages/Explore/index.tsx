import React from "react";
import Header from "../../components/Header";

import { Container, Main, Cards, Card, Card1, Card2 } from "./styles";

const Explore: React.FC = () => {
  return (
    <Container>
      <Header />
      <Main>
        <Cards>
          <Card1>
            <Card src={"./Main1.jpg"} />
            <Card className="big" src={"./Main2.jpg"} />
            <Card src={"./Main3.jpg"} />
          </Card1>

          <Card2>
            <Card src={"./Main1.jpg"} />
            <Card src={"./Main2.jpg"} />
            <Card src={"./Main3.jpg"} />
          </Card2>

          <Card2>
            <Card src={"./Main1.jpg"} />
            <Card src={"./Main2.jpg"} />
            <Card src={"./Main3.jpg"} />
          </Card2>

          <Card2>
            <Card src={"./Main1.jpg"} />
            <Card src={"./Main2.jpg"} />
            <Card src={"./Main3.jpg"} />
          </Card2>
        </Cards>
      </Main>
    </Container>
  );
};

export default Explore;
