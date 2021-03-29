import styled from "styled-components";

export const Container = styled.div``;

export const Head = styled.div`
  position: fixed;
  top: 0;
  z-index: 2;
  max-width: 100%;
  width: 100%;
  margin: auto;
`;

export const MainContainer = styled.div`
  margin: auto;
  margin-top: 50px;
  display: flex;
  width: 100%;
  @media (max-width: 1024px) {
    padding: 0 30px;
    max-width: 100vw;
  }
  @media (max-width: 768px) {
    padding: 30px 60px;
  }
  @media (max-width: 425px) {
    margin: 0;
    padding: 0;
    width: 100vw;
  }
`;
