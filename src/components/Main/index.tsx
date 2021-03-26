import React, { useContext } from "react";
import { Context } from "../../Provider/ProviderData";
import { Container } from "./styles";
import Status from "../Status/index";
import Feed from "../Feed/index";

const Main: React.FC = () => {
  const Data = useContext(Context);
  console.log(Data.User);

  return (
    <Container>
      <Status />
      {Data?.User?.map((item) => (
        <Feed
          key={item.name}
          name={item.name}
          imagem="https://img.kalunga.com.br/fotosdeprodutos/479736z_1.jpg"
          description={item.description}
          avatar={item.avatar}
          like={item.like}
        />
      ))}
    </Container>
  );
};

export default Main;
