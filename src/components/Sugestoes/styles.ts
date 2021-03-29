import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 293px;
  height: 625px;
  margin: 30px 0px 0px 30px;
  position: fixed;
  right: 200px;
  @media (max-width: 1024px) {
    position: fixed;
    right: 50px;
  }
  @media (max-width: 768px) {
    display: none;
  } ;
`;

export const Status = styled.div`
  display: flex;
  width: 293px;
  height: 53px;
  justify-content: space-between;
  margin-top: 25px;
  > button {
    background: transparent;
    font-size: 12px;
    color: #0095f6;
    margin: -2px 0 -3px 0;

    display: block;
    cursor: pointer;
  }
`;
export const AvatarMeu = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  cursor: pointer;
`;
export const Name = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 20px;
  > strong {
    font-size: 14px;
  }
  > span {
    font-size: 14px;
    color: #8e8e8e;
  }
`;
export const Sugestion = styled.div`
  margin: 15px 0 0 0;
`;
export const VerTudo = styled.div`
  display: flex;
  justify-content: space-between;
  > span {
    font-size: 14px;
    color: #8e8e8e;
    margin-top: 5px;
  }
  > button {
    color: black;
    background: transparent;
    cursor: pointer;
    font-size: 12px;
    font-weight: bold;
  }
`;
export const PeopleSugestion = styled.div`
  width: 293px;
  height: 256px;
  padding: 8px 0;
  margin-top: 10px;
  max-height: 256px;
  overflow-y: hidden;
`;
export const Sobre = styled.div`
  margin-top: 20px;
  color: #c7c7c7;
  > a {
    cursor: pointer;
    display: inline-block;
    margin-left: 5px;
    font-weight: 600;
    font-size: 11px;
    line-height: 12px;
    opacity: 0.8;
    color: #c7c7c7;
    font-family: "proxima-semibold", PingFangSC, sans-serif;
    :hover {
      text-decoration: text-underline-offset;
    }
  }
`;
export const CopyWrite = styled.div`
  margin-top: 10px;
  > span {
    display: inline-block;
    margin-left: 5px;
    font-weight: 600;
    font-size: 11px;
    line-height: 12px;
    opacity: 0.8;
    color: #c7c7c7;
  }
`;
