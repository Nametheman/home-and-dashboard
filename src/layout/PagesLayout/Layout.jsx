import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";
import styled from "styled-components";
import MobileNv from "./MobileNv";
import { HiMenuAlt2 } from "react-icons/hi";

const Layout = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);

  console.log(showMenu);
  return (
    <Container>
      <Sidebar />
      <Content children={children} />
      <MobileNv showMenu={showMenu} setShowMenu={setShowMenu} />
      <div className="openMenu">
        <HiMenuAlt2
          onClick={() => {
            setShowMenu(true);
            console.log(showMenu);
          }}
        />
      </div>
    </Container>
  );
};

export default Layout;

const Container = styled.main`
  display: flex;
  justify-content: space-between;
  /* position: relative; */
  width: 100%;
  /* max-width: 1440px; */
  margin: 0 auto;
  position: relative;

  .openMenu {
    position: absolute;
    z-index: 100;
    top: 3%;
    left: 3%;

    svg {
      color: #fff;
      font-size: 25px;
      cursor: pointer;
    }
  }
`;
