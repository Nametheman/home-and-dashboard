import { Menu } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";

export default styled.div`
  position: fixed;
  height: 80px;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 200px;
  color: #28d1ff;
  background: #fff;
  a {
    text-decoration: none;
    font-weight: 600;
    font-size: 1.2em;
    font-style: normal;
    color: grey;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    :hover {
      color: #28d1ff;
    }
  }

  @media screen and (max-width: 1024px) {
    padding: 0 50px;
  }

  @media screen and (max-width: 768px) {
    height: 60px;
    padding: 0 16px;
  }

  .group {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    @media screen and (min-width: 768px) {
      display: none;
    }
  }
`;

export const LogoImage = styled.img`
  cursor: pointer;
  width: 120px;
  height: 80%;
  margin-right: 2rem;
  object-fit: contain;

  // @media screen and (min-width: 768px) {
  //   display: none;
  // }
`;

export const MenuIcon = styled(FaBars)`
  color: #28d1ff;
  font-size: 18px;
  cursor: pointer;

  :hover {
    transform: scale(1.1);
  }
`;

export const AvatarContainer = styled.img`
  cursor: pointer;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  border: 2px solid #e5e5e5;

  :hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 450px) {
    width: 30px;
    height: 30px;
  }
`;

export const NavMenu = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  // font-weight: 600;
  // font-size: 1.2em;
  // font-style: normal;
  color: grey;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  :hover {
    color: #28d1ff;
  }
`;

export const BtnFilled = styled(Link)`
  min-width: 120px;
  padding: 0.5rem 1rem;
  color: #fff !important;
  background: #37c625;
  font-weight: 500 !important;
  border-radius: 5px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  height: 50px;

  :hover {
    opacity: 0.7;
  }
`;

export const BtnOutline = styled(Link)`
  min-width: 120px;
  padding: 0.5rem 1rem;
  color: #28d1ff !important;
  border: 1px solid #28d1ff;
  background: transparent;
  font-weight: 500 !important;
  border-radius: 5px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  gap: 1rem;

  :hover {
    background: #28d1ff;
    color: #fff !important;
  }
`;

export const DropDownInfo = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0 1rem;
  align-items: center;
  z-index: 2000000987878978979;

  img {
    border-radius: 50%;
    height: 40px;
    width: 40px;

    @media screen and (max-width: 768px) {
      height: 32px;
      width: 32px;
    }
  }

  .user__info {
    p {
      color: #28d1ff;
      font-weight: 500;

      @media screen and (max-width: 768px) {
        font-size: 0.95rem;
      }
    }

    span {
      color: grey;

      @media screen and (max-width: 768px) {
        font-size: 0.75rem;
      }
    }
  }
`;

export const DropdownMenuItem = styled(Menu.Item)`
  display: flex;
  gap: 0.5rem;

  @media screen and (max-width: 768px) {
    p {
      font-size: 0.85rem;
    }
  }
`;

export const DropdownMenuItemWrapper = styled.div`
  padding: 0.5rem 1rem 0 1rem;
`;
