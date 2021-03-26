import styled, { css } from "styled-components";
import {
  FaEllipsisH,
  FaRegComment,
  FaShareSquare,
  FaRegSmile,
} from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { GiSaveArrow } from "react-icons/gi";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.3);

  max-width: 614px;
  margin-bottom: 30px;
`;

export const HeaderFeed = styled.div`
  display: flex;
  justify-content: space-between;
  width: 614px;
  height: 60px;
  padding: 16px;
`;
export const Logo = styled.div`
  display: flex;
  align-items: center;

  > span {
    margin-left: 10px;
    font-size: 14px;
    font-weight: bold;
  }
`;
export const LogoIcon = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;
export const Button = styled.div`
  display: flex;
  align-items: center;
`;

export const IconThreePoints = styled(FaEllipsisH)`
  width: 16px;
  height: 16px;
  fill: black;
`;

export const Video = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 614px;
  width: 614px;
  background-color: black;
`;

export const PlayIcon = styled.img`
  height: 614px;
  width: 614px;
`;
export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  width: 614px;
  height: auto;
  padding: 5px 14px;
`;
export const HeaderFooter = styled.div`
  display: flex;
  justify-content: space-between;
  width: auto;
  height: 35px;
`;
export const Icons = styled.div``;

const iconCSS = css`
  width: 26px;
  height: 26px;
  margin-right: 20px;
  cursor: pointer;
`;
export const LikeIcon = styled(AiOutlineHeart)`
  ${iconCSS}
`;
export const ComentsIcon = styled(FaRegComment)`
  ${iconCSS}
`;
export const CompartilharIcon = styled(FaShareSquare)`
  ${iconCSS}
`;
export const Save = styled.div`
  display: flex;
  align-items: center;
`;
export const SaveIcon = styled(GiSaveArrow)`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
export const Visualization = styled.div`
  display: flex;
  align-items: center;
  > span {
    margin-left: 5px;
    font-size: 14px;
  }
`;
export const LogoI = styled.img`
  border-radius: 50%;
  width: 20px;
  height: 20px;
`;
export const Legend = styled.div`
  margin-top: 10px;
  > strong {
    font-size: 14px;
  }
  > span {
    font-size: 14px;
    font-weight: 300px;
  }
`;

export const Coments = styled.div`
  margin-top: 5px;
  cursor: pointer;
  > span {
    color: #8e8e8e;
    font-size: 14px;
  }
`;
export const Comentarios = styled.div`
  margin-top: 5px;
  > div strong {
    font-size: 14px;
  }
  > div span {
    font-size: 14px;
  }
`;

export const AddComents = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px 0 10px;
  width: 614px;
  height: 56px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);

  margin-top: 35px;
  > input {
    width: 491px;
    height: 40px;
  }
  > button {
    opacity: 0.3;
  }
`;
export const SmileIcon = styled(FaRegSmile)`
  width: 26px;
  height: 26px;
  cursor: pointer;
`;
