import styled from "styled-components";

import { GrFormNext } from "react-icons/gr";
import { IoIosArrowBack } from "react-icons/io";

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  max-width: 614px;
  height: 118px;
  border-radius: 3px;
  margin-bottom: 24px;
  margin: 10px auto;
  border: 1px solid rgba(0, 0, 0, 0.3);
  overflow-y: hidden;
  @media (max-width: 1024px) {
    margin: 55px 0 10px 0;
    padding: 0;
  }

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
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  background-color: white;
  z-index: 1;
  border-radius: 50%;
  justify-content: center;
  cursor: pointer;
  opacity: 1;
  transition: all ease 0.5s;
  width: 100%;
  margin: 30px auto;

  max-width: 25px;
`;
export const IconBack = styled.div`
  position: absolute;
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
  left: 0;
  width: 100%;
  margin: 30px auto;
  max-width: 25px;
`;

export const BackIcon = styled(IoIosArrowBack)`
  width: 25px;
  height: 25px;
`;
export const NextIcon = styled(GrFormNext)`
  width: 25px;
  height: 25px;
`;
