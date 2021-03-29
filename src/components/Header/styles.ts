import styled, { css } from "styled-components";

import { AiFillHome, AiOutlineInbox, AiOutlineHeart } from "react-icons/ai";
import { MdExplore, MdPerson } from "react-icons/md";
import { GiSaveArrow, GiAnticlockwiseRotation } from "react-icons/gi";
import { GrConfigure } from "react-icons/gr";

export const Container = styled.div`
  background-color: #ffffff;
`;

export const Nav = styled.nav`
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;

export const HeaderItem = styled.div`
  width: 100vw;
  display: flex;
  height: 54px;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  max-width: 980px;
`;

export const Logo = styled.div`
  > div img {
    width: 103px;
    height: 29px;
  }
`;

export const InputHeader = styled.div`
  display: flex;
  align-items: center;
  > input {
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 2px;
    text-align: center;
    width: 215px;
    height: 28px;
    font-size: 14px;
  }
  @media (max-width: 600px) {
    > input {
      display: none;
    }
  }
`;
export const IconsHeader = styled.div`
  display: flex;
  align-items: center;

  > a {
    color: black;
    text-decoration: none;
  }
`;

const iconCSS = css`
  width: 23px;
  height: 23px;
  margin-right: 20px;
  cursor: pointer;
`;

export const HomeIcon = styled(AiFillHome)`
  ${iconCSS}
`;
export const InboxIcon = styled(AiOutlineInbox)`
  ${iconCSS}
`;
export const ExploreIcon = styled(MdExplore)`
  ${iconCSS}
`;
export const LikeIcon = styled(AiOutlineHeart)`
  ${iconCSS}
`;
export const AvatarIcon = styled.img`
  ${iconCSS}
  border-radius: 50%;
`;

export const Options = styled.div`
  display: none;
  background-color: white;
  position: absolute;
  right: 190px;
  border-radius: 5px;
  box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.2);

  z-index: 10;
`;

export const Opçoes = styled.div`
  padding: 8px 16px;
  width: 230px;
  height: 37px;
  cursor: pointer;

  > span {
    margin-left: 10px;
    font-size: 14px;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const OpçoesSair = styled.div`
  padding: 8px 16px;
  width: 230px;
  height: 37px;
  border-top: 1px solid rgba(0, 0, 0, 0.3);

  > span {
    margin-left: 5px;
  }
`;

const iconCss = css`
  width: 16px;
  height: 16px;
`;

export const SaveIcon = styled(GiSaveArrow)`
  ${iconCss}
`;

export const PerfilIcon = styled(MdPerson)`
  ${iconCss}
`;

export const ConfigIcon = styled(GrConfigure)`
  ${iconCss}
`;

export const ContaIcon = styled(GiAnticlockwiseRotation)`
  ${iconCss}
`;

export const Follow = styled.div`
  z-index: 10;
  background-color: white;
  position: absolute;
  right: 210px;
  border-radius: 5px;
  box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.2);
  width: 500px;
  height: 362px;
  overflow-y: scroll;
`;
export const Following = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  width: 483px;
  height: 68px;

  > div {
    display: flex;
    align-items: center;
    width: 304px;
    height: 38px;
    margin: 0 8px;
  }

  > div strong {
    font-size: 14px;
    padding: 0 0 0 5px;
    margin: 0 5px;
  }
  > div span {
    font-size: 14px;
  }
  > div span + span {
    font-size: 14px;
  }
  > button {
    font-size: 14px;
    padding: 5px 9px;
    width: 79px;
    height: 30px;
    background: transparent;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
  }
`;
export const Avatar = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
`;
export const Data = styled.div`
  display: flex;
  align-items: center;
  padding: 4px;
  margin: 8px 0 0 8px;
  width: 475px;
  height: 19px;

  > span {
    font-size: 14px;
    font-weight: bold;
  }
`;
