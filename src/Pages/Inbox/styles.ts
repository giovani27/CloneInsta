import styled from "styled-components";

import { AiOutlineDown, AiOutlineInbox } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";

export const Container = styled.div``;

export const Wrapper = styled.div`
  width: 1108px;
  height: 541px;
  padding: 20px;
  margin-left: 170px;
`;
export const Main = styled.div`
  display: flex;
  width: 1108px;
  height: 541px;
  max-width: 935px;
  max-height: 541px;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
`;
export const LadoEsquerdo = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid rgba(0, 0, 0, 0.3);
`;
export const Status = styled.div`
  display: flex;
  width: 340px;
  justify-content: space-between;

  padding: 0 0 0 80px;
  align-items: center;
  height: 60px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  > div {
    display: flex;
    > span {
      font-size: 16px;
      font-weight: bold;
    }
  }
`;

export const IconDown = styled(AiOutlineDown)`
  width: 20px;
  height: 20px;
  margin-left: 5px;
  cursor: pointer;
`;
export const IconEdit = styled(FiEdit)`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const Tab = styled.div`
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);

  > button {
    width: 104px;
    height: 43px;
    background: transparent;
    padding: 12px 0;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
  }
  > button + button {
    opacity: 0.2;
  }
  > button + button + button {
    width: 140px;
    height: 43px;
    color: #0095f6;
    opacity: 1;
  }
`;
export const StatusPeoples = styled.div`
  width: 349px;
  height: 480px;
  padding: 10px;
  overflow-y: scroll;
  overflow-x: hidden;
  white-space: nowrap;
`;
export const Peoples = styled.div`
  width: 332px;
  height: 72px;
  display: flex;
  align-items: center;
  margin-left: 10px;
  > div {
    display: flex;
    flex-direction: column;
    margin-left: 10px;

    > span {
      font-size: 14px;
    }
    > span + span {
      font-size: 14px;
      color: #8e8e8e;
    }
  }
`;
export const Avatar = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
`;
export const LadoDireito = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Principal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 586px;
  > h3 {
    font-size: 22px;
    font-weight: normal;
  }
  > span {
    font-size: 14px;
  }
  > button {
    margin-top: 20px;
    background: #0095f6;
    color: white;
    width: 129px;
    height: 30px;
    border-radius: 4px;
    font-weight: bold;
  }
`;
export const Icon = styled(AiOutlineInbox)`
  width: 96px;
  height: 96px;
`;
