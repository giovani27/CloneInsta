import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin-left: 7px;
  max-width: 74px;
  > span {
    display: inline-block;
    white-space: nowrap;
    width: 80px;
    overflow: hidden;
    text-overflow: ellipsis;
    align-items: center;
    font-size: 12px;
  }

  padding: 16px 10px;
  > img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 1px solid black;
  }
`;
