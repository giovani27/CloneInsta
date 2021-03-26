import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Cards = styled.div`
  width: 975px;
  height: 641px;
  margin: 0 200px 30px;
  padding: 30px 10px 0;

  .big {
    position: absolute;
    width: 614px;
    height: 614px;
  }
`;
export const Card = styled.img`
  width: 292px;
  height: 292px;
  margin-right: 20px;
  margin-bottom: 23px;
`;

export const Card1 = styled.div`
  max-width: 963px;
  max-height: 641px;
`;
export const Card2 = styled.div`
  display: flex;
  max-width: 963px;
  max-height: 320px;
`;
