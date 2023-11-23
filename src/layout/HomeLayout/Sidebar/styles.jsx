import styled from "styled-components";
import { Link } from "react-router-dom";

export default styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  background: #fff;
  padding: 1rem 1rem 0 1rem;
  flex-direction: column;
  z-index: ${({ showSidebar }) => (showSidebar ? 900066666666 : 0)};

  @media screen and (min-width: 768px) {
    display: none;
  }

  @media screen and (max-width: 768px) {
    display: ${({ showSidebar }) => (showSidebar ? "block" : "none")};
    width: ${({ showSidebar }) => (showSidebar ? "250px" : 0)};
    height: ${({ showSidebar }) => (showSidebar ? "100vh" : 0)};

    .overlay {
      position: fixed;
      left: 0;
      top: 0;
      height: 100vh;
      width: calc(100vw - 250px);
      background: linear-gradient(
        99.11deg,
        rgba(49, 66, 79, 0.71) 0.83%,
        rgba(10, 11, 12, 0.64) 100%
      );
      //   background: #e3efea;
      z-index: 19;
      display: none;

      @media screen and (max-width: 768px) {
        display: ${({ showSidebar }) => (showSidebar ? "block" : "none")};
      }
    }
  }

  img {
    width: 200px;
    height: 90%;
    object-fit: cover !important;
  }

  .top__menu {
    margin-bottom: 3rem;
  }

  .bottom__menu {
    h4 {
      font-size: 1rem;
      margin: 0 0 0.5rem 1rem !important;
      color: #c0bdcc;
      font-weight: 300;
    }
  }

  .logo_group {
    margin-bottom: 4rem;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    img {
      width: 17px;
      height: 17px;
    }

    h2 {
      color: #000000;
      font-size: 20px;

      span {
        color: #f9745e;
      }
    }

    .toggle {
      font-size: 1.1rem;
      margin-right: 0.3rem;
      color: #7367f0;
      cursor: pointer;
      @media screen and (min-width: 425px) {
        display: none;
      }
    }
  }

  .active {
    background: #6149cd 0% 0% no-repeat padding-box;
    border-radius: 20px;
    opacity: 1;

    p,
    .icon {
      color: #fff;
    }

    :hover {
      opacity: 0.7;
    }
  }

  .user {
    display: flex;
    align-items: center;
    padding: 0 1rem;
    justify-content: space-between;
    margin-bottom: 3rem;

    .icon {
      font-size: 1.3rem;
      cursor: pointer;
    }
  }
`;

export const NavMenu = styled.nav`
  display: flex;
  flex-direction: column;
  // align-items: center;
  margin: 1rem 0 0 1rem;
  gap: 1rem;
`;

export const CloseBtn = styled.div`
  cursor: pointer;
  color: #28d1ff;
  background: #efefef;
  padding: 0.25rem;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 1rem;
  font-size: 1.1rem;

  :hover {
    transform: scale(1.1);
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
// const SidebarTabs = styled(Link)`
//   display: flex;
//   // align-items: center;
//   border-radius: 3px;
//   width: 200px;
//   padding: 0.3rem 0 0.3rem 1rem;
//   cursor: pointer;
//   text-decoration: none;

//   .icon {
//     font-size: 18px;
//     color: #7a86a1;
//     margin-right: 1rem;
//   }

//   p {
//     font-style: normal;
//     font-weight: 400;
//     font-size: 1rem;
//     line-height: 23px;
//     letter-spacing: 0.0015em;
//     color: #7a86a1;
//     margin: 0;
//     padding: 0;
//   }

//   :hover {
//     opacity: 0.7;
//     background: #efefef;
//     border-radius: 20px;
//   }
// `;

export const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 400;
  font-style: normal;
  color: #666;
  display: flex;
  align-items: center;
  gap: 1rem;

  :hover {
    color: #28d1ff;
  }
`;
export const UserInfo = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5em;

  p {
    font-weight: bold;
  }

  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`;
export const Logout = styled.div`
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 600;
  font-style: normal;
  color: #666;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: 1rem;

  :hover {
    color: #28d1ff;
  }
`;
