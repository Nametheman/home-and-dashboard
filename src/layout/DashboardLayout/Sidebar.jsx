import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import {
  FaGlobe,
  FaHome,
  FaUser,
  FaCog,
  FaInfoCircle,
  FaSignOutAlt,
} from "react-icons/fa";
import { PlaceholderAvatar } from "../../assets/images";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../redux/reducers/sidebar";
import { clearState } from "../../redux/reducers/auth/login";
import { LANDING_PAGE } from "../../services/route";

const Sidebar = (props) => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const activeTab = localStorage.getItem("tab");
  const user = JSON.parse(localStorage.getItem("user"));

  const handleToggleSidebar = (name) => {
    dispatch(toggleSidebar());
    localStorage.setItem("tab", name);
  };

  const handleLogout = () => {
    dispatch(clearState());
    localStorage.clear();
    Navigate(LANDING_PAGE.home);
  };
  return (
    <Container showSidebar={props.showSidebar}>
      <UserProfile>
        <img src={user?.avatar ?? PlaceholderAvatar} alt="" />
        <p>{user?.name}</p>
        <span>Client</span>
      </UserProfile>
      {sidebarTabs
        .filter((tab) => tab.name !== "Support")
        .map((tab) => {
          console.log(tab);
          const { id, name, icon, link } = tab;
          return (
            <SidebarTabs
              key={id}
              onClick={() => handleToggleSidebar(name)}
              className={activeTab === name ? "active" : ""}
              to={link}
            >
              <span className="icon">{icon}</span>
              <p>{name}</p>
            </SidebarTabs>
          );
        })}
      <LogoutTab className="logout" onClick={handleLogout}>
        <FaSignOutAlt className="icon" />
        <p>Logout</p>
      </LogoutTab>
      <div className="overlay" onClick={() => dispatch(toggleSidebar())} />
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  height: calc(100vh - 60px);
  width: 250px;
  background: #fff;
  padding: 4rem 0 0;
  display: flex;
  flex-direction: column;
  z-index: ${({ showSidebar }) => (showSidebar ? 900 : 0)};

  // @media screen and (min-width: 768px) {
  //   display: none;
  // }

  @media screen and (max-width: 768px) {
    display: ${({ showSidebar }) => (showSidebar ? "block" : "none")};
    width: ${({ showSidebar }) => (showSidebar ? "250px" : 0)};
    height: ${({ showSidebar }) => (showSidebar ? "100vh" : 0)};

    .overlay {
      position: fixed;
      right: 0;
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

  .logout {
    margin-top: 3rem;
  }

  .active {
    background: #28d1ff !important;
    color: #fff;
    p {
      color: #fff !important;
    }

    :hover {
      opacity: 0.7;
    }
  }
`;

const UserProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e5e5e5;

  @media screen and (min-width: 768px) {
    display: none;
  }

  img {
    border-radius: 50%;
    width: 36px;
    height: 36px;
  }

  p {
    font-style: normal;
    font-weight: bold;
    font-size: 1rem;
    line-height: 16px;
    text-align: center;
    letter-spacing: 0.001em;
    color: #000;
    margin-bottom: 0.4em;
  }

  span {
    font-style: normal;
    font-weight: 600;
    font-size: 0.9rem;
    line-height: 12px;
    text-align: center;
    letter-spacing: 0.015em;
    color: #28d1ff;
  }
`;

const SidebarTabs = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0.5em 0.5em 0.5em 2em;
  cursor: pointer;
  text-decoration: none;
  color: #000;

  .icon {
    font-size: 1.45em;
    margin-right: 1rem;
  }

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 23px;
    letter-spacing: 0.0015em;
    color: #000;
    margin: 0;
    padding: 0;
  }

  :hover {
    opacity: 0.7;
    background: #efefef;
  }
`;

const LogoutTab = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5em 0.5em 0.5em 2em;
  cursor: pointer;
  text-decoration: none;
  color: #000;

  .icon {
    font-size: 1.45em;
    margin-right: 1rem;
  }

  p {
    font-style: normal;
    font-weight: 600;
    font-size: 1rem;
    line-height: 23px;
    letter-spacing: 0.0015em;
    color: #000;
    margin: 0;
    padding: 0;
  }

  :hover {
    opacity: 0.7;
    background: #efefef;
  }
`;

const sidebarTabs = [
  {
    id: 1,
    name: "Overview",
    icon: <FaHome />,
    link: "/dashboard",
  },

  {
    id: 2,
    name: "Marketplace",
    icon: <FaGlobe />,
    link: "/marketplace",
  },
  {
    id: 3,
    name: "Account",
    icon: <FaUser />,
    link: "/account",
  },
  {
    id: 4,
    name: "Support",
    icon: <FaInfoCircle />,
    link: "/support",
  },
  {
    id: 5,
    name: "Services",
    icon: <FaCog />,
    link: "/services",
  },
  {
    id: 5,
    name: "Bulk Service",
    icon: <FaCog />,
    link: "/bulkservices",
  },
];
