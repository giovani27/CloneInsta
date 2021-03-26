import styled from "styled-components";

import { GrFormNext } from "react-icons/gr";
import { IoIosArrowBack } from "react-icons/io";

export const Container = styled.div`
  display: flex;
  width: 614px;
  height: 118px;
  border-radius: 3px;
  margin-bottom: 24px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  overflow-y: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const Stats = styled.div`
  display: flex;
  transform: scale(1);
  transition: all ease 0.2s;
`;

export const IconNext = styled.div`
  position: absolute;
  margin-top: 30px;
  margin-left: 580px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  background-color: white;
  z-index: 1;
  border-radius: 50%;
  justify-content: center;
  cursor: pointer;
  opacity: 1;
  transition: all ease 0.5s;
`;
export const IconBack = styled.div`
  position: absolute;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  background-color: white;
  z-index: 1;
  border-radius: 50%;
  justify-content: center;
  cursor: pointer;
  opacity: 1;
  transition: all ease 0.5s;
`;

export const BackIcon = styled(IoIosArrowBack)`
  width: 25px;
  height: 25px;
`;
export const NextIcon = styled(GrFormNext)`
  width: 25px;
  height: 25px;
`;
