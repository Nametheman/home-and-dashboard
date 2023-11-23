import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/tmsss.svg";
import styled from "styled-components";
import logoutImg from "../../assets/icons/logout.svg";
import { RxDashboard } from "react-icons/rx";
import { CgNotes } from "react-icons/cg";
import { HiOutlineUsers, HiOutlineBuildingStorefront } from "react-icons/hi2";
import { HiMenuAlt2 } from "react-icons/hi";
import { BsBriefcase } from "react-icons/bs";
import { BiStore } from "react-icons/bi";

const MobileNv = ({ showMenu, setShowMenu }) => {
  const navigate = useNavigate();
  const currPath = JSON.parse(sessionStorage.getItem("currPath"));
  const [clikedLink, setClickedLink] = useState("");
  const sideBarLinks = [
    { name: "Dashboard", logo: RxDashboard, path: "/dashboard", id: "link1" },
    {
      name: "Transactions",
      logo: CgNotes,
      path: "/transactions",
      id: "link2",
    },
    { name: "Account", logo: HiOutlineUsers, path: "/account", id: "link3" },
    {
      name: "Services",
      logo: HiOutlineBuildingStorefront,
      path: "/services",
      id: "link4",
    },
    {
      name: "Bulk Services",
      logo: BsBriefcase,
      path: "/bulk-services",
      id: "link5",
    },
  ];
  let activeStyle = {
    backgroundColor: "#ff993a",
    border: " 1px solid",
    color: "#fff",
    borderRadius: "8px",
  };

  const NavLand = styled.nav`
    position: absolute;
    left: 0;
    background-color: #fff;
    padding: 20px;
    width: 280px;
    height: 98%;
    max-height: 98%;
    overflow: scroll;
    border-radius: 10px;
  `;
  return (
    <>
      {showMenu && (
        <div>
          <BackDrop>
            <div>
              <NavLand>
                <Nav>
                  <div className="closeMenu">
                    <HiMenuAlt2
                      onClick={() => {
                        setShowMenu(false);
                        console.log(showMenu);
                      }}
                    />
                  </div>
                  <div className="logoSection">
                    <img src={logo} alt="" />
                  </div>
                  <div className="linksSection">
                    {sideBarLinks.map((link, idx) => {
                      return (
                        <SideLink
                          to={link.path}
                          key={link.id}
                          onClick={() => {
                            setClickedLink(link.path);
                            sessionStorage.setItem(
                              "currPath",
                              JSON.stringify(link.path)
                            );
                            setShowMenu(false);
                          }}
                        >
                          <link.logo size={20} className="nav-svg" />
                          {link.name}
                        </SideLink>
                      );
                    })}
                    <Marketplace
                      href="https://saas.tm30.net/marketplace"
                      target="_blank"
                    >
                      {" "}
                      <BiStore size={20} />
                      Market place
                    </Marketplace>
                  </div>
                  <div className="logout">
                    <hr />
                    <div
                      className="logoutBtn"
                      onClick={() => {
                        navigate("/login");
                        sessionStorage.clear("token");
                      }}
                    >
                      <img src={logoutImg} alt="" />
                      <p>Logout</p>
                    </div>
                  </div>{" "}
                </Nav>
              </NavLand>
            </div>
          </BackDrop>
        </div>
      )}
    </>
  );
};

export default MobileNv;

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.79);
  z-index: 1000;
`;

const Nav = styled.div`
  color: #000;
  height: 100%;
  margin-top: 3%;

  .logoSection {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1.3em;
    gap: 10px;
    padding-bottom: 20px;
    border-bottom: 1px solid #8791a34d;

    img {
      width: 140px;
    }
  }

  .linksSection {
    padding: 0 20px;
    margin-top: 50px;
  }

  .logout {
    margin-top: 80px;

    hr {
      border: 0.2px solid #94949438;
    }
    .logoutBtn {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 30px;
      gap: 18px;
      cursor: pointer;
      p {
        font-size: 13px;
      }
      img {
        width: 17px;
      }
    }
  }

  .closeMenu {
    display: flex;
    justify-content: flex-end;
    svg {
      font-size: 20px;
      cursor: pointer;
    }
  }
`;

const SideLink = styled(NavLink)`
  display: flex;
  /* width: 270px; */
  margin: 0 auto;
  align-items: center;
  padding: 8px 10px;
  gap: 10px;
  margin-bottom: 16px;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  color: #8791a3;
  font-size: 11px;
  font-weight: 600;
  border: none;
  outline: none;

  &:hover {
    background-color: #28d1ff;
    border: 1px solid;
    color: #fff;
    border-radius: 8px;
    cursor: pointer;
    .nav-svg {
      fill: #fff;
      stroke: #fff;
      stroke-width: 0.1px;
    }
  }

  &.active {
    border: 1px solid;
    color: #fff;
    border-radius: 8px;
    background-color: #28d1ff;
    .nav-svg {
      fill: #fff;
      stroke: #fff;
      stroke-width: 0.1px;
    }
  }
`;

const Marketplace = styled.a`
  display: flex;
  /* width: 270px; */
  margin: 0 auto;
  align-items: center;
  padding: 8px 10px;
  gap: 10px;
  margin-bottom: 20px;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  color: #8791a3;
  font-size: 11px;
  font-weight: 600;
  border: none;
  outline: none;

  &:hover {
    background-color: #28d1ff;
    border: 1px solid;
    color: #fff;
    border-radius: 8px;
    cursor: pointer;
    .nav-svg {
      fill: #fff;
      stroke: #fff;
      stroke-width: 0.1px;
    }
  }

  &.active {
    border: 1px solid;
    color: #fff;
    border-radius: 8px;
    background-color: #28d1ff;
    .nav-svg {
      fill: #fff;
      stroke: #fff;
      stroke-width: 0.1px;
    }
  }
`;
