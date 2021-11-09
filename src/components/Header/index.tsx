import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Provider/ProviderData";

import {
  Container,
  Nav,
  HeaderItem,
  Logo,
  InputHeader,
  IconsHeader,
  HomeIcon,
  InboxIcon,
  ExploreIcon,
  LikeIcon,
  AvatarIcon,
  Options,
  Opçoes,
  SaveIcon,
  PerfilIcon,
  ConfigIcon,
  ContaIcon,
  OpçoesSair,
  Data,
  Follow,
  Following,
  Avatar,
} from "./styles";

const Header: React.FC = () => {
  const [Active, setActive] = useState(false);
  const [ActiveFollow, setActiveFollow] = useState(false);

  const Usuario = useContext(Context);

  return (
    <Container>
      <Nav>
        <HeaderItem>
          <Logo>
            <a href="/">
              <div>
                <img
                  src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                  alt="logo"
                />
              </div>
            </a>
          </Logo>
          <InputHeader>
            <input type="text" placeholder="Pesquisar" />
          </InputHeader>

          <IconsHeader>
            <Link to="/">
              <HomeIcon />
            </Link>
            <Link to="/inbox">
              <InboxIcon />
            </Link>
            <Link to="/explore">
              <ExploreIcon />{" "}
            </Link>
            <LikeIcon onClick={() => setActiveFollow(!ActiveFollow)} />
            <AvatarIcon
              onClick={() => setActive(!Active)}
              src={"./usermasc.png"}
            />
          </IconsHeader>
        </HeaderItem>
      </Nav>
      <Options
        style={
          Active === true
            ? { display: "block" }
            : { display: "none" } || ActiveFollow === true
            ? { display: "none" }
            : { display: "block" }
        }
      >
        <Opçoes>
          <PerfilIcon />
          <span>Perfil</span>
        </Opçoes>
        <Opçoes>
          <SaveIcon />
          <span>Salvos</span>
        </Opçoes>
        <Opçoes>
          <ConfigIcon />
          <span>Configuraçoes</span>
        </Opçoes>
        <Opçoes>
          <ContaIcon />
          <span>Trocar de conta</span>
        </Opçoes>
        <OpçoesSair>
          <span>Sair</span>
        </OpçoesSair>
      </Options>

      <Follow
        style={
          ActiveFollow === true
            ? { display: "block" }
            : { display: "none" } || Active === true
            ? { display: "none" }
            : { display: "block" }
        }
      >
        <Data>
          <span>Este mes</span>
        </Data>

        {Usuario?.User?.map((item) => (
          <Following key={item.name}>
            <Avatar src={item.avatar} />
            <div>
              <strong> {item.name} </strong>
              <span> {item.follow} </span>
              <span>2 sem</span>
            </div>
            <button>Seguir</button>
          </Following>
        ))}
      </Follow>
    </Container>
  );
};

export default Header;
