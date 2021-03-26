import React from "react";

import { Container, Avatar, Seguido } from "./styles";

interface Props {
  name: string;
  avatar: string;
  description: string;
}

const People: React.FC<Props> = ({ name, avatar, description }) => {
  return (
    <Container>
      <Avatar src={avatar} />
      <Seguido>
        <strong> {name} </strong>
        <span> {description}</span>
      </Seguido>
      <button>Seguir</button>
    </Container>
  );
};

export default People;
