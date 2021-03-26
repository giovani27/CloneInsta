import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-top: 15px;
  :first-child {
    margin-top: -3px;
  }
  > button {
    display: flex;
    justify-content: center;
    color: #0095f6;
    font-size: 12px;
  }
  > button {
    display: flex;
    background-color: transparent;
    align-items: center;
  }
`;

export const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;
export const Seguido = styled.div`
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  justify-content: space-between;
  margin-left: 10px;
  > strong {
    font-size: 14px;
    cursor: pointer;
  }
  > span {
    font-size: 12px;
    color: #8e8e8e;
  }
`;
