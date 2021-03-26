import React, { useContext } from "react";
import Header from "../../components/Header";
import { Context } from "../../Provider/ProviderData";

import {
  Container,
  Wrapper,
  Main,
  LadoEsquerdo,
  Status,
  IconDown,
  IconEdit,
  Tab,
  StatusPeoples,
  Peoples,
  Avatar,
  LadoDireito,
  Principal,
  Icon,
} from "./styles";

const Inbox: React.FC = () => {
  const Data = useContext(Context);
  return (
    <Container>
      <Header />
      <Wrapper>
        <Main>
          <LadoEsquerdo>
            <Status>
              <div>
                <span>giovaniantunes27</span>
                <IconDown />
              </div>
              <IconEdit />
            </Status>
            <Tab>
              <button>PRINCIPAL</button>
              <button>GERAL</button>
              <button>Solicitaçoes</button>
            </Tab>
            <StatusPeoples>
              {/* <Peoples>
                <Avatar />
                <div>
                  <span>giovaniantunes</span>
                  <span>Online há 4 horas</span>
                </div>
              </Peoples>
              <Peoples>
                <Avatar />
                <div>
                  <span>giovaniantunes</span>
                  <span>Online há 4 horas</span>
                </div>
              </Peoples>
              <Peoples>
                <Avatar />
                <div>
                  <span>giovaniantunes</span>
                  <span>Online há 4 horas</span>
                </div>
              </Peoples>
              <Peoples>
                <Avatar />
                <div>
                  <span>giovaniantunes</span>
                  <span>Online há 4 horas</span>
                </div>
              </Peoples>
              <Peoples>
                <Avatar />
                <div>
                  <span>giovaniantunes</span>
                  <span>Online há 4 horas</span>
                </div>
              </Peoples> */}
              {Data?.User?.map((item) => (
                <Peoples>
                  <Avatar src={item.avatar} />
                  <div>
                    <span> {item.name} </span>
                    <span>Online há 4 horas</span>
                  </div>
                </Peoples>
              ))}
            </StatusPeoples>
          </LadoEsquerdo>
          <LadoDireito>
            <Principal>
              <Icon />
              <h3>Suas Mensagens</h3>
              <span>
                Envie fotos e mensagens privadas para um amigo ou grupo.
              </span>
              <button>Enviar Mensagem</button>
            </Principal>
          </LadoDireito>
        </Main>
      </Wrapper>
    </Container>
  );
};

export default Inbox;
