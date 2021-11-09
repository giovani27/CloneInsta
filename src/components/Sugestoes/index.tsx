import React from "react";
import People from "../People/index";

import {
  Container,
  Status,
  AvatarMeu,
  Name,
  Sugestion,
  VerTudo,
  PeopleSugestion,
  Sobre,
  CopyWrite,
} from "./styles";

import { Desconhecido } from "../../Data/index";

let des = Desconhecido.slice(0, 5);

const Sugestoes: React.FC = () => {
  return (
    <Container>
      <Status>
        <AvatarMeu src={"./usermasc.png"} />
        <Name>
          <strong>giovaniantunes27</strong>
          <span>Giovani Antunes</span>
        </Name>
        <button>Mudar</button>
      </Status>
      <Sugestion>
        <VerTudo>
          <span>Sugestoes Para Você</span>
          <button>Ver tudo</button>
        </VerTudo>
        <PeopleSugestion>
          {des.map((item) => (
            <People
              avatar={item.avatar}
              name={item.name}
              description={item.description}
            />
          ))}
        </PeopleSugestion>
      </Sugestion>
      <Sobre>
        <a>Sobre</a> - <a>Ajuda</a> - <a>Imprensa</a> - <a>Api</a> -
        <a>Carreiras</a> - <a>Privacidade</a> - <a>Termos</a> -{" "}
        <a>Localização</a> -<a>Contas Relevantes</a> - <a>HashTag</a> -{" "}
        <a>Idioma</a>
      </Sobre>
      <CopyWrite>
        <span>© 2021 INSTAGRAM DO FACEBOOK</span>
      </CopyWrite>
    </Container>
  );
};

export default Sugestoes;
