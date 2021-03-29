import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 980px;
  width: 100%;
  padding: 30px;

  @media (max-width: 1024px) {
    margin: 0;
    padding: 0;
  }
`;
