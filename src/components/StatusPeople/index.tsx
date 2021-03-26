import React from "react";

import { Container } from "./styles";

interface Props {
  nome: string;
  avatar: string;
}

const StatusPeople: React.FC<Props> = ({ nome, avatar }) => {
  return (
    <Container>
      <img src={avatar} alt={nome} />

      <span> {nome} </span>
    </Container>
  );
};

export default StatusPeople;
