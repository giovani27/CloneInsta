import React, { useContext } from "react";
import {
  Container,
  HeaderFeed,
  Logo,
  LogoIcon,
  Button,
  IconThreePoints,
  Video,
  PlayIcon,
  Footer,
  HeaderFooter,
  Icons,
  LikeIcon,
  ComentsIcon,
  CompartilharIcon,
  Save,
  SaveIcon,
  Visualization,
  Legend,
  Coments,
  Comentarios,
  AddComents,
  SmileIcon,
  LogoI,
} from "./styles";

import { Context } from "../../Provider/ProviderData";

interface Props {
  name: string;
  imagem: string;
  description: string;
  avatar: string;
  like: string;
}

const Feed: React.FC<Props> = ({ name, imagem, avatar, description, like }) => {
  const Data = useContext(Context);
  let date = Data.User.slice(0, 3);

  return (
    <Container>
      <HeaderFeed>
        <Logo>
          <LogoIcon src={avatar} />
          <span>{name}</span>
        </Logo>
        <Button>
          <IconThreePoints />
        </Button>
      </HeaderFeed>
      <Video>
        <PlayIcon src={imagem} />
      </Video>
      <Footer>
        <HeaderFooter>
          <Icons>
            <LikeIcon />
            <ComentsIcon />
            <CompartilharIcon />
          </Icons>
          <Save>
            <SaveIcon />
          </Save>
        </HeaderFooter>
        <Visualization>
          <LogoI src={avatar} />
          <span> {like} </span>
        </Visualization>
        <Legend>
          <strong>Giovani</strong>
          <span> ola galera</span>
        </Legend>
        <Coments>
          <span> Ver todos os 7 comentarios</span>
        </Coments>
        <Comentarios>
          {date.map((item, k) => (
            <div key={k}>
              <strong> {item.name} </strong>
              <span> {item.comments} </span>
            </div>
          ))}
        </Comentarios>
      </Footer>
      <AddComents>
        <SmileIcon />
        <input type="text" placeholder="Adicione um Comentario" />
        <button>Publicar</button>
      </AddComents>
    </Container>
  );
};

export default Feed;
